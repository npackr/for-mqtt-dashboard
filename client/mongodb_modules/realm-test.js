/*  REALM COMMUNICATION TEST SCRIPT
    This script base on a article on MongoDB docs
    
    Edited by: npackr
    Resources: https://docs.mongodb.com/realm/sdk/node/quick-start/
*/

const Realm = require("realm");
const BSON = require("bson");

const API_KEY = "YOUR_API_KEY";

// Update this with your App ID
const app = new Realm.App({ id: "mqtt-data-dashboard-djtyx" });
const payloadSchema = {
  name: "Payload",
  properties: {
    _id: "objectId",
    _partition: "string?",
    topic: "string",
    payload: "string",
    qos: "string",
    timestamp: "string"
  },
  primaryKey: "_id",
};

async function run() {
  const credentials = Realm.Credentials.serverApiKey(API_KEY);
  await app.logIn(credentials);
  console.log(`Logged in with server API key by user id: ${app.currentUser.id}`);

  const realm = await Realm.open({
    schema: [payloadSchema],
    sync: {
      user: app.currentUser,
      partitionValue: "pdb",
    },
  });

  // Get all payload in the realm
  const payloads = realm.objects("Payload");

  // Add a listener that fires whenever one or more payload are inserted, modified, or deleted.
  payloads.addListener(payloadListener);

  // Add a couple of payload in a single, atomic transaction
  // Realm automatically sets the _partition property based on the partitionValue used to open the realm
  realm.write(() => {
    const payload1 = realm.create("Payload", {
      _id: new BSON.ObjectID(),
      topic: "xxx",
      payload: "Open",
      qos: "zzz",
      timestamp: new BSON.Timestamp().toString()
    });
  });

  // Find a specific Task
  let task = payloads.filtered("payload = 'Open' LIMIT(1)")[0];
  console.log("task", JSON.stringify(task, null, 2));

  // Update the Task
  realm.write(() => {
    task.payload = "InProgress";
  });

  // Delete the Task
  realm.write(() => {
    realm.delete(task);
    task = null;
  });

  // Clean up
  payloads.removeListener(payloadListener);
  realm.close();
  app.currentUser.logOut();
}
run().catch(err => {
  console.error(err)
});

// Define the collection notification listener
function payloadListener(payloads, changes) {
  // Update UI in response to deleted objects
  changes.deletions.forEach((index) => {
    // Deleted objects cannot be accessed directly,
    // but we can update a UI list, etc. knowing the index.
    console.log(`- deleted a task -`);
  });

  // Update UI in response to inserted objects
  changes.insertions.forEach((index) => {
    let insertedTask = payloads[index].topic;
    console.log(`inserted task: ${JSON.stringify(insertedTask, null, 2)}`);
    // ...
  });

  // Update UI in response to modified objects
  changes.newModifications.forEach((index) => {
    let modifiedTask = payloads[index];
    console.log(`modified task: ${JSON.stringify(modifiedTask, null, 2)}`);
    // ...
  });
}
