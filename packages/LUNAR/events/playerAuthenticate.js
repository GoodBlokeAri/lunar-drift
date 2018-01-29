gm.utility      = require('../core/utility.js');

mp.events.add('sendShitToServer', (player, user, pass) =>
{
    gm.mysql.Handle.query("SELECT password FROM `user` WHERE name = ? LIMIT 1", [user], function(e, result)
    {
        if(result.length)
        {
            let sqlPassword = result[0]["password"];

            gm.bcrypt.compare(pass, sqlPassword, function(err, res)
            {
                if(res == true)
                {
                    console.log("<LOG> " + player.name + " has authenticated!");

                    player.call("authReply", ["success"]);
                }
                else
                {
                    player.outputChatBox("Wrong Password!");
                    console.log("<LOG> " + player.name + " has entered the wrong password!");
                    player.call("authReply", ["wrongpass"]);
                }
            });
        }
        else
        {
            player.call("authReply", ["register"]);
            player.outputChatBox("You don't have an account!");
            console.log("<LOG> " + player.name + " has tried to authenticate to a non existance account!");
        }
    });
});

mp.events.add("testSpawn", (player) =>
{
    gm.utility.loadAccount(player);
	player.logged = 1;

    player.outputChatBox("Welcome to Lunar Drift: !{769fe0}" + player.name + "!{white}.");
    player.outputChatBox("<SRV> To view a list of commands type /help!");

    player.spawn(new mp.Vector3(-1048.005, -2952.721, 13.96));
    player.model = mp.joaat('mp_m_freemode_01');

    setTimeout(function() // allows asynchronous sql loading to take place
    {
        if (player.admin > 0)
        {
            console.log("<LOG> " + player.name + " has logged in as a level: " + player.admin + " administrator!");
            player.outputChatBox("<SRV> Type /ah to view a list of administrator actions!");
        }
    }, 3000);

});
