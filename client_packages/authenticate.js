// create browser instance for our UI
var mainUI = mp.browsers.new("package://ui/authentication/index.html");

const localPlayer = mp.players.local; // macro / declare

// -----------------------------------------------------------------------------
mp.game.graphics.startScreenEffect('DMT_flight_intro', 0xFF, true);
mp.game.cam.destroyAllCams(false);

let authCam = mp.cameras.new('default', new mp.Vector3(1110.62353515625, -633.670654296875, 65.8160514831543), new mp.Vector3(0, 0, 100), 90.0);
authCam.setActive(true);

mp.game.cam.renderScriptCams(true, false, 2000, true, false);

localPlayer.freezePosition(true);
localPlayer.position = new mp.Vector3(1106.646728515625, -630.0175170898438, 40.39840316772461);

mp.game.gameplay.setFadeOutAfterDeath(false);
mp.game.gameplay.disableAutomaticRespawn(true);

mp.gui.chat.show(false);
mp.gui.chat.activate(false);
mp.gui.chat.safeMode = false;

mp.gui.cursor.visible = true;

mp.game.ui.setMinimapVisible(true); /* this is reversed */
mp.game.ui.displayRadar(false);

// -----------------------------------------------------------------------------


mp.events.add('loginDataToClient', (user, pass, state) =>
{
	mp.events.callRemote("sendShitToServer", user, pass, state)
});

mp.events.add('authReply', (status) =>
{
	switch(status)
	{
		case "success" :
		{
			setTimeout(function()
			{
				for (var i = 0, len = mp.browsers.length; i < len; ++i)
				{
					mp.browsers.at(i)
						.destroy();
				}

				mp.game.graphics.stopScreenEffect('DMT_flight_intro');
				mp.gui.chat.show(true);
				mp.gui.chat.activate(true);
				mp.game.ui.setMinimapVisible(false);
				mp.game.ui.displayRadar(true);
				mp.gui.cursor.visible = false;

				authCam.destroy();
				authCam = undefined;

				mp.game.cam.renderScriptCams(false, false, 3000, true, false);
				localPlayer.freezePosition(false);

				mp.events.callRemote("testSpawn");
			}, 1000);
			break;
		}
		case "wrongpass" :
		{
			setTimeout(function()
			{
				for (var i = 0, len = mp.browsers.length; i < len; ++i)
				{
					mp.browsers.at(i)
						.destroy();
				}
				mainUI = mp.browsers.new("package://ui/authentication/index.html");
			}, 10000);

			break;
		}
	}
});

// functions
// macro for notify
mp.events.add("notify", (str) =>
{
	mp.game.graphics.notify(str);
});
