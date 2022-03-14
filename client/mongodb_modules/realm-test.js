const Realm = require("realm");
const { BSON } = require('realm');
const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });

// Get the API key from the local environment
const apiKey = "qIVQEOpjlDHTGAZOwuw2bVCo4nhFwCztqYQNzhyY4TRHWCuaHII6sxykUlnwssZz";
if (!apiKey) {
    throw new Error("Could not find a Realm Server API Key.");
}

const DataSchema = {
    name: "consumption",
    properties: {
        "_id": "string",
        "qos": "string",
        "status": "string",
        "timestamp": "string",
        "topic": "string"
    },
    primaryKey: "_id"
};
// Create an api key credential
async function run() {
    await app.logIn(Realm.Credentials.serverApiKey(apiKey));

    const realm = await Realm.open({
        schema: [DataSchema],
        sync: {
            user: app.currentUser,
            partitionValue: "real-time",
        },
    });

    realm.write(() => {
        const newData = realm.create({
            name: "consumption",
            properties: {
                "_id": new BSON.ObjectID(),
                "qos": qos.toString(),
                "topic": topic.toString(),
                "status": payload.toString(),
                "timestamp": new BSON.Timestamp(),
            },
            primaryKey: "_id"
        });
    });
}
run().catch(err => {
    console.error("Failed to open realm:", err)
});