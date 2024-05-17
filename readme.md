## Requirements:
- PgAdmin: https://www.pgadmin.org/download/


## Run Postgresql
1. Download and install docker hub: https://docs.docker.com/desktop/install/windows-install 
2. run the command `docker compose up`


## Run the server
1. Intall java and add JAVA_HOME to the path variables
2. Go to the server folder in command line. You can use any IDE e.g. netbeans, eclipse, intellij also
3. Run the command: `./mvnw clean spring-boot:run`

## Run the client
1. Install nodejs. Guide: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
2. Go to the client folder
3. Run `npm install`
4. Run `npm run start`