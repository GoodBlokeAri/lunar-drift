module.exports =
{
    "playerJoin": (player) =>
    {
        console.log("\x1b[32m[++] \x1b[0mPlayer Connection from " + player.name + " NET STATS: IP: " + player.ip + " - PL: " + player.packetLoss + " ")

        player.customData = {};
    }
};
