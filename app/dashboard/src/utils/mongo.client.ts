import * as Realm from 'realm-web';

const REALM_APP_ID = process.env.VUE_APP_REALM_APP_ID;
export const app: Realm.App = new Realm.App({ id: REALM_APP_ID! });
export const credentials = Realm.Credentials.serverApiKey("G1lEIVcWV2e32WAiizbLtvgraT2VnvuhUTZdkBItqZNvJeZuivIYEKLLtjcOsxxs");