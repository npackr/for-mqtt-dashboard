/*  MONGODB REALM QUERY - DATE TIME
    Query for getting data by date time from MongoDB
    
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

  // Set datetime to filter (GMT+7)
  const startDate = { timestamp: new Date("2022-04-03T21:00:00") };
  const endDate = { timestamp: new Date("2022-04-03T22:00:00") };
  
  convertDateToUTC(startDate.timestamp); 
  convertDateToUTC(endDate.timestamp);
  
  let task = payloads.filtered('timestamp >= $0 && timestamp < $1', startDate.timestamp, endDate.timestamp);
  task.addListener(payloadListener);

  console.log("Result for timestamp: " + startDate.timestamp.toString() + " -> " + endDate.timestamp.toString());
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

function createDateAsUTC(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
}

function convertDateToUTC(date) { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}