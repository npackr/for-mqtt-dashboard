const Realm = require("realm");
const { BSON } = require('realm');
const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });

// Get the API key from the local environment
const apiKey = "qIVQEOpjlDHTGAZOwuw2bVCo4nhFwCztqYQNzhyY4TRHWCuaHII6sxykUlnwssZz";
if (!apiKey) {
    throw new Error("Could not find a Realm Server API Key.");
}

const DataSchema = {
    "title": "consumption",
    "properties": {
        "_id": {
            "bsonType": "objectId"
        },
        "qos": {
            "bsonType": "string"
        },
        "status": {
            "bsonType": "object",
            "properties": {
                "temp": {
                    "bsonType": "string"
                }
            }
        },
        "timestamp": {
            "bsonType": "timestamp"
        },
        "topic": {
            "bsonType": "string"
        }
    }
};
// Create an api key credential
async function run() {
    await app.logIn(Realm.Credentials.serverApiKey(apiKey));

    const consumption = {
        schema: DataSchema, sync: {
            user: app.currentUser,
            partitionValue: "real-time"
        }
    };
    
    realm.write(() => {
        const newTask = Realm.create(DataSchema.self, {
          _id: new BSON.ObjectID(),
          _partition: partitionValue,
          topic: "a string",
          timestamp: "a string",
          payload: "a string",
          qos: "a string",
        });
      });
    
}

run().catch(err => {
    console.error("Failed to open realm:", err)
});