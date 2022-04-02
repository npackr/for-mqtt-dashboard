/*  MONGODB REALM QUERY - KEYWORD
    Query for getting data keyword like room name or device name from MongoDB
    
    Edited by: npackr
    Resources: https://docs.mongodb.com/realm/sdk/node/quick-start/
*/

// MONGODB REALM IMPORT
const Realm = require("realm");
const BSON = require("bson");

// REALM APP DEFINDS
const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });

// DATA SCHEMA DEFINDS
const payloadSchema = {
  name: "Payload",
  properties: {
    _id: "objectId",
    _partition: "string?",
    topic: "string",
    payload: "string",
    qos: "string",
    timestamp: "date"
  },
  primaryKey: "_id",
  timestamps: true,
};

// REALM DATABASE COMMUNICATION FUNCTION
async function run() {
  const credentials = Realm.Credentials.serverApiKey("G1lEIVcWV2e32WAiizbLtvgraT2VnvuhUTZdkBItqZNvJeZuivIYEKLLtjcOsxxs");
  await app.logIn(credentials);

  const realm = await Realm.open({
    schema: [payloadSchema],
    sync: {
      user: app.currentUser,
      partitionValue: "pdb",
    },
  });


  // Get all payload in the realm
  const payloads = realm.objects("Payload");
  const filter = { keyword: "PhongKhach" };

  let task = payloads.filtered('topic LIKE "*' + filter.keyword + '*"');

  // Add a listener that fires whenever one or more payload are inserted, modified, or deleted.
  task.addListener(payloadListener);

  console.log("Result for keyword: " + filter.keyword.toString());
  console.log(`${JSON.stringify(task, null, 2)}`);
}

run().catch(err => {
  console.error(err)
});

// Define the collection notification listener
function payloadListener(payloads, changes) {
  // Update UI in response to inserted objects
  changes.insertions.forEach((index) => {
    let insertedPayload = payloads[index].topic + " : " + payloads[index].payload + " / " + payloads[index].timestamp;
    console.log(`Update arrived: ${JSON.stringify(insertedPayload, null, 2)}`);
    // ...
  });
}
