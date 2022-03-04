const Realm = require("realm");

const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });

// Get the API key from the local environment
const apiKey = "qIVQEOpjlDHTGAZOwuw2bVCo4nhFwCztqYQNzhyY4TRHWCuaHII6sxykUlnwssZz";
if (!apiKey) {
  throw new Error("Could not find a Realm Server API Key.");
}
// Create an api key credential
const credentials = Realm.Credentials.serverApiKey(apiKey);
try {
  const user = app.logIn(credentials);
  console.log("Successfully logged in!", user.id);
  return user;
} catch (err) {
  console.error("Failed to log in", err.message);
}