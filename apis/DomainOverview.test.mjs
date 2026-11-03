import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

test("domain overview URL preserves the saved resource identity in one path segment", () => {
  const source = readFileSync(new URL("./API.ts", import.meta.url), "utf8");
  const method = source.match(/  GET_DOMAIN_OVERVIEW\([^]*?\n  \}/)?.[0];
  assert.ok(method);
  const compiled = ts.transpileModule(
    `export class Subject { selldone_api_url = "https://api.example.test"; ${method} }`,
    { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } },
  ).outputText;
  const sandbox = { exports: {} };
  vm.runInNewContext(compiled, sandbox);
  const api = new sandbox.exports.Subject();
  for (const key of [101, "101", "local", "sub"]) {
    assert.equal(api.GET_DOMAIN_OVERVIEW(1, key), `https://api.example.test/shops/1/domains/${key}/overview`);
  }
  assert.equal(api.GET_DOMAIN_OVERVIEW(1, "../101?check=true"), "https://api.example.test/shops/1/domains/..%2F101%3Fcheck%3Dtrue/overview");
});

test("maintenance URL builders keep the positive custom resource in one encoded segment", () => {
  const source = readFileSync(new URL('./API.ts', import.meta.url), 'utf8');
  const methods = ['GET_DOMAIN_MAINTENANCE', 'POST_DOMAIN_MAINTENANCE'].map(name => {
    const method = source.match(new RegExp(`  ${name}\\([^]*?\\n  \\}`))?.[0];
    assert(method, name);
    return method;
  });
  const sandbox = { exports: {} };
  vm.runInNewContext(ts.transpileModule(`export class Subject { selldone_api_url='https://api.example.test'; ${methods.join('\n')} }`, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, sandbox);
  const api = new sandbox.exports.Subject();
  for (const name of ['GET_DOMAIN_MAINTENANCE', 'POST_DOMAIN_MAINTENANCE']) {
    assert.equal(api[name](7, 101), 'https://api.example.test/shops/7/domain/101/maintenance');
    assert.equal(api[name](7, '../101?disk=private'), 'https://api.example.test/shops/7/domain/..%2F101%3Fdisk%3Dprivate/maintenance');
  }
});

test("loading URL builders preserve the custom resource and never add source reads implicitly", () => {
  const source = readFileSync(new URL('./API.ts', import.meta.url), 'utf8');
  const names = ['GET_DOMAIN_LOADING', 'POST_DOMAIN_LOADING'];
  const methods = names.map(name => {
    const method = source.match(new RegExp(`  ${name}\\([^]*?\\n  \\}`))?.[0];
    assert(method, name);
    return method;
  });
  const sandbox = { exports: {} };
  vm.runInNewContext(ts.transpileModule(`export class Subject { selldone_api_url="https://api.example.test"; ${methods.join("\n")} }`, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText, sandbox);
  const api = new sandbox.exports.Subject();
  for (const name of names) {
    assert.equal(api[name](7, 101), 'https://api.example.test/shops/7/domain/101/loading');
    assert.equal(api[name]('../7', '../101?include_code=true'), 'https://api.example.test/shops/..%2F7/domain/..%2F101%3Finclude_code%3Dtrue/loading');
  }
});

test("native domain helper preserves bounded custom maintenance/loading while built-ins stay unsupported", () => {
  const exports = {};
  const source = readFileSync(new URL('../../core-js/helper/domain/DomainsHelper.ts', import.meta.url), 'utf8');
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, {
    exports, require(name) {
      assert.equal(name, '../../server/SetupService');
      return { SetupService: { MainServiceUrl: () => 'https://platform.example.test', ShopsDomain: () => 'shops.example.test' } };
    },
  });
  const summary = { enabled: true, has_html: true, byte_size: 25, updated_at: '2026-11-03T00:00:00Z', supported: true, reason: null };
  const loading = { mode: 'custom', has_code: true, head_bytes: 50, body_bytes: 25, updated_at: '2026-11-03T00:00:00Z', supported: true, reason: null };
  const domains = [{ id: 101, domain: 'store.example.test', maintenance_summary: summary, loading_summary: loading }];
  const before = JSON.stringify(domains);
  const result = exports.DomainsHelper.GetShopDomains({ name: 'fixture' }, domains);
  for (const builtin of result.slice(0, 2)) {
    assert.equal(builtin.maintenance_summary.enabled, false);
    assert.equal(builtin.maintenance_summary.supported, false);
    assert.equal(builtin.maintenance_summary.reason, 'builtin');
    assert.equal(builtin.loading_summary.mode, null);
    assert.equal(builtin.loading_summary.supported, false);
    assert.equal(builtin.loading_summary.reason, 'builtin');
  }
  assert.equal(result[2].maintenance_summary, summary);
  assert.equal(result[2].loading_summary, loading);
  assert.equal(JSON.stringify(domains), before);
  assert.equal(exports.DomainsHelper.GetShopDomains({ name: 'fixture' }, [{ id: 102, domain: 'unknown.example.test' }], false)[0].maintenance_summary, undefined);
  assert.equal(exports.DomainsHelper.GetShopDomains({ name: 'fixture' }, [{ id: 102, domain: 'unknown.example.test' }], false)[0].loading_summary, undefined);
});
