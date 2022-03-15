# mqtt-data-dashboard

A dashboard for managing and analytics data from MQTT servers

## Documents

* SRS Document: [SRS.md](/SRS.md)
* Gantt Chart : [GANTT.md](/GANTT.md)
* UML Diagram : [UML.mdj](/UML.mdj)

## Local Dependencies

* [NodeJS](https://nodejs.org)

## Cloud Dependencies

* [Mosquitto](https://mosquitto.org/) *(Private server)*
* [MongoDB Atlas](https://www.mongodb.com/atlas)

## How to use

**STEP 1.** Install all local dependencies

* To run this project offline, make sure you are installing the local client of cloud dependencies and changing the connection string as well

**STEP 2.** Clone this repository local

**STEP 3.** Start HTTP server

* Old dashboard (Bootstrap 3: Admin Bucket)
  * Use this command to run the old-dashboard server: `npm run old`
  * Then use a browser and go to the address: `localhost:3000` for old-dashboard
* New dashboard (Bootstrap 4: Vue Black Dashboard)
  * Use this command to run the new-dashboard server: `npm run new`
  * Then use a browser and go to the address: `localhost:8080` for new-dashboard
* MQTT connection script: `npm run mqtt`

If an error occurs, try to use `npm install` to install Node's necessary modules and see if the problem can be fixed or not. Try to leave a post in issues of this repository and wait for a reply if the problem still exists. Thank you very much!
