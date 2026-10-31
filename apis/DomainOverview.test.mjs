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
