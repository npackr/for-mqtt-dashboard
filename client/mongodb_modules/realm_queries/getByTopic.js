/*  MONGODB REALM QUERY - TOPIC
    Query for getting data specific topic from MongoDB
    
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
  const credentials = Realm.Credentials.serverApiKey("YOUR_API_KEY");
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
  const filter = { topic: "PhongKhach/MayLanh" };

  let task = payloads.filtered('topic = $0', filter.topic);

  // Add a listener that fires whenever one or more payload are inserted, modified, or deleted.
  task.addListener(payloadListener);

  console.log("Kết quả cho kênh: " + filter.topic.toString());
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
    console.log(`Đã nhận được cập nhật mới liên quan: ${JSON.stringify(insertedPayload, null, 2)}`);
    // ...
  });
}
