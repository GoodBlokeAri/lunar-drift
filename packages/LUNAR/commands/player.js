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
    let pos = player.position;
    pos.x += 2.0;

    let veh = mp.vehicles.new(mp.joaat(veh_name), pos);
    player.putIntoVehicle(veh, -1);

    veh.dimension = player.dimension;
    veh.numberPlate = "PUSSY";
    veh.data.playerSpawned = 1;
});

mp.events.addCommand('color', (player, color1, color2) =>
{
    if (!color1 || !color2) return player.outputChatBox("The correct usage is: /color [primary] [secondary]");

    let veh = player.vehicle;
    let primary = parseInt(color1);
    let secondary = parseInt(color2);

    veh.setColor(primary, secondary);

    player.outputChatBox("<SRV> Color changed!");
});
