mp.events.addCommand('help', (player, text) =>
{
    player.outputChatBox(">> (PLAYER HELP) /ping /pos /v");
});

mp.events.addCommand('ping', (player) =>
{
    let playerPing = player.ping
    player.notify('PONG! Ping: ' + playerPing);
});

mp.events.addCommand('pos', (player) =>
{
    let pos = player.position;
    player.outputChatBox("<SRV> " + player.position);
});

mp.events.addCommand('v', (player,  _, veh_name) =>
{
    // push to an array, so it can be deleted
    if(!veh_name) return player.outputChatBox("<SERVER> The usage is: /v [model]");

    let pos = player.position;
    pos.x += 2.0;

    let veh = mp.vehicles.new(mp.joaat(veh_name), pos);
    player.putIntoVehicle(veh, -1);

    veh.dimension = player.dimension;
    veh.numberPlate = "PUSSY";
    veh.data.playerSpawned = 1;
});
