/*

				🌕 (add some cool tag)
			+----------------------------------------------------------+

								Lunar Drift
							  Copyright © 2018

		RageMP Forums:	https://rage.mp/profile/3094-ari/
		ParagonRP:		https://paragonrp.net
		GitHub:			https://github.com/GoodBlokeAri/

		Developers:
						+>🐊
						+>Elliot
						+>Jim
						+>Clyde
						+>KrazyKazzyGuy


		Credits:
						Elliot (❄️)

		RageMP (Grand Theft Auto 5 Multiplayer Modification) is copyrighted by the RageMP team.
		https://rage.mp

	+----------------------------------------------------------+

*/

// Creating JavaScript objects - for adding data (gm.serverTime etc)
global.gm       = {};
global.server   = {};

// Initialise server functions to their respective objects

// include NodeJS packages

gm.cronjob      = require('node-cron');
gm.bcrypt		= require('bcrypt-nodejs');
gm.mysql        = require('./core/mysql');
gm.utility      = require('./core/utility');


gm.mysql.Connect(function() { }); // connect the mysql handler



let fs          = require('fs');
let path        = require('path');

// Initiate commands
require('./commands/player');
require('./commands/admin');

// Start /events/
var registeredEvents = [];

fs.readdirSync(path.resolve(__dirname, 'events')).forEach(src =>
{
	process.stdout.write('\t\"EVENT LOADED: ')
	process.stdout.write('\t\"' + src + '\"' + '\n');
	registeredEvents = registeredEvents.concat(require('./events/' + src));
});

registeredEvents.forEach(event => { mp.events.add(event); });



// Cron jobs

gm.cronjob.schedule('5 * * * *', function() // Cleanup unoccupied vehicles every 10 minutes
{
	mp.vehicles.forEach((vehicle) =>
	{
		if(vehicle.getOccupants().length == 0)
		{
			vehicle.destroy();
		}
	});
	console.log("<LOG> All empty vehicles were destroyed! ");
});

gm.cronjob.schedule('10 * * * *', function() // Save all user accounts
{
	mp.players.forEach((player, id) =>
	{
		if(player.logged = 1)
		{
			gm.utility.saveAccount(player);
		}
		console.log("<LOG> All accounts have been saved, and backed up succesfully to the database!");
	});
});
