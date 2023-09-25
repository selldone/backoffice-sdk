import API from "./apis/API";
import {BackofficeAxiosSetup} from "./plugins/BackofficeAxiosSetup";
import {ApiPage} from "./page/ApiPage";
import {ApiAgency} from "./agency/ApiAgency";
import {ApiProduct} from "./product/ApiProduct";
import  {ApiArticle} from "./article/ApiArticle";

const SDK_VERSION = "0.01";
// Extend the Window interface to recognize the properties you add to the global window object.
declare global {
    interface Window {
        NativeApp?: boolean;
        axios: any;
        SelldoneUser?: {
            access_token: string;
            /**
             * The expires_in field specifies the time at which the access token expires, represented in seconds since the token was issued.
             */
            expires_in: number;
            refresh_token?: string | null;
        };

        // Standard variables may exists
        extra_footer?: string;

        // APIs
        API: API;
        ADDRESS_API: API;
        ARTICLE_API: API;

        // Global SDK Interface
        $backoffice: {

            // Shop:
            page: ApiPage;
            product: ApiProduct;


            // Agency:
            agency: ApiAgency;


            // Article:
            article: ApiArticle
        };
    }
}

export class BackofficeSDK {
    static Setup(): void {
        console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
        console.log(`┣━━━ Selldone® Backoffice SDK | V${SDK_VERSION} ━━━┫`);
        console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛");

        this.CheckDependencies()

        //――――――――――――――――――――――――― Axios ―――――――――――――――――――――――――
        BackofficeAxiosSetup();

        //――――――――――――――――――――――――― Initialize Resources Origin ―――――――――――――――――――――――――
        window.API = new API();
        window.ADDRESS_API = window.API;
        window.ARTICLE_API = window.API;

        window.$backoffice = {
            // Shop:
            page: new ApiPage(),
            product: new ApiProduct(),

            // Agency:
            agency: new ApiAgency(),

            // Article:
            article: new ApiArticle(),
        };
    }


    static CheckDependencies() {
        if (typeof console.style !== "function") {
            throw new Error("❌ console.style not found. Please initialize 'SelldoneCore.Setup()' before initializing the Backoffice SDK.");
        }
    }

}
