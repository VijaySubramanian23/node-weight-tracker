"use strict";
//https://scotch.io/tutorials/build-a-weight-tracker-app-with-nodejs-and-postgresql

const dotenv = require( "dotenv" );
const createServer = require( "./server" ).createServer;

const init = async () => {
	dotenv.config();
	const config = {
		port: process.env.PORT || 3000,
		host: process.env.HOST || "localhost"
	};
	const server = await createServer( config );
	await server.start();
	console.log( "Server running on %s", server.info.uri );
};

process.on( "unhandledRejection", ( err ) => {
	console.log( err );
	process.exit( 1 );
} );

init();