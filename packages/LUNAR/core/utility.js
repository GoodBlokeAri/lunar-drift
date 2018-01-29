module.exports =
{
    saveAccount: function (player)
    {
        gm.mysql.Handle.query("UPDATE `user` SET name = ?, ip = ?, serial = ?, admin = ?, premium = ?, score = ?, kills = ?, deaths = ?, last_login = CURRENT_TIMESTAMP WHERE id = ?",
        [player.name, player.ip, player.serial, player.admin, player.premium, player.score, player.kills, player.deaths, player.sqlid]);
    },

    loadAccount: function (player)
    {
        var playerData = [];
        gm.mysql.Handle.query("SELECT * FROM `user` WHERE name = ?", player.name, function(e, rows, fields)
        {
            if(rows.length)
            {
                rows.forEach(data =>
                {
                        playerData.push(data);

                        player.sqlid            = data.id;
                        player.name             = data.name;
                        player.uIP              = data.ip;
                        player.gameSerial       = data.serial;
                        player.admin            = data.admin;
                        player.premium          = data.premium;
                        player.score            = data.score;
                        player.kills            = data.kills;
                        player.deaths           = data.deaths;
                        player.lastlogin        = data.last_login;
                });
            }

        });
    },

    findPlayerByIdOrNickname: function(playerName)
    {
        if(playerName == parseInt(playerName))
        {
            return mp.players.at(playerName)
        }
        else
        {
            let foundPlayer = null;
            mp.players.forEach((_player) =>
            {
                if(_player.name.toLowerCase() === playerName.toLowerCase())
                {
                    foundPlayer = _player;
                }
            });
            return foundPlayer;
        }
    },

};
