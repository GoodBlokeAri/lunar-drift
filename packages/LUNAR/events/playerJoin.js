module.exports =
{
    "playerJoin": (player) =>
    {
        console.log("\x1b[32m[++] \x1b[0mPlayer Connection from " + player.name + " NET STATS: IP: " + player.ip + " - PL: " + player.packetLoss + " ")

        player.customData = {};
        
        mp.players.forEach((_player, id) =>
        {
            _player.notify("~r~" + player.name + "~w~ has joined!");
        });

    }
};
