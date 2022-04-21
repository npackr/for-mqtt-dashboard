# mqtt-data-dashboard

A dashboard for managing and analytics data from MQTT servers

## Documents

* SRS Document   : [SRS.md](/SRS.md)
* Gantt Chart    : [GANTT.md](/GANTT.md)
* UML Diagram    : [uml.mdj](/document/uml.mdj)
* Project Report : [report.docx](/document/report.docx)
* Presentation   : [presentation.pptx](/document/presentation.pptx)

## Local Dependencies

* [NodeJS](https://nodejs.org)

## Cloud Dependencies

* [Mosquitto](https://mosquitto.org/)
* [MongoDB Atlas](https://www.mongodb.com/atlas)

## How to use

**STEP 1.** Install all local dependencies

* To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2.** Clone this repository local and run `npm run setup` to install Node's necessary modules

**STEP 3.** Start the server

* Old dashboard (Bootstrap 3: Admin Bucket)
  * Use this command to run the old-dashboard server: `npm run old`
  * Then use a browser and go to the address: `localhost:7070` for old-dashboard
* New dashboard (Bootstrap 4: Vue Black Dashboard)
  * Use this command to run the new-dashboard server: `npm run new`
  * Then use a browser and go to the address: `localhost:8080` for new-dashboard
* MQTT Data syncing client: Edit your server infomation in `/client/client.js` and run `npm run client` for start the client
* Additional database communication scripts can be found in: `/client/mongodb_modules/realm_queries`

If an error occurs, try to remove your `node_modules` folder and use `npm run setup` to re-install Node's necessary modules and see if the problem can be fixed or not.
Try to leave a post in issues of this repository and wait for a reply if the problem still exists.

Thank you very much!
