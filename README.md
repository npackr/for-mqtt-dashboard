# mqtt-data-dashboard

A dashboard for managing and analytics data from MQTT servers

## Documents

* SRS Document: [SRS.md](/SRS.md)
* Gantt Chart : [GANTT.md](/GANTT.md)

## Local Dependencies

* [NodeJS](https://nodejs.org)

## Cloud Dependencies

* [Mosquitto](https://mosquitto.org/) *(Private server)*
* [MongoDB Atlas](https://www.mongodb.com/atlas)

## How to use

### Old dashboard: Admin Bucket theme

**STEP 1.** Install all local dependencies

To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2.** Pull this repository local

**STEP 3.** Run the HTTP server

Use this command to run the server: `node old-dashboard.js`

**STEP 4.** Access via browser

Use a browser and go to the address: `localhost:3000`

### New dashboard: Vue Black Dashboard

**STEP 1.** Install all local dependencies

To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2.** Pull this repository local

**STEP 3.** Run the HTTP server

Use this command to run the server:

  cd app/dashboard
  npm run dev

**STEP 4.** Access via browser

Use a browser and go to the address: `localhost:3000`
