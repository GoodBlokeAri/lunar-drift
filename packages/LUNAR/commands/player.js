mp.events.addCommand('help', (player, text) =>
{
    player.outputChatBox(">> (PLAYER HELP) /ping /pos /v /gotospawn /fix /gotopos /tpto");
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

mp.events.addCommand('gotospawn', (player) =>
{
    player.position = new mp.Vector3(-2206.32, -448.172, 329.38);
});

mp.events.addCommand('fix', (player) =>
{
    player.vehicle.repair();
});

mp.events.addCommand('tpto', (player, target) =>
{
    if (typeof target == 'undefined') return player.outputChatBox("The correct usage is: /tpto [target]");

    const targetPlayer = gm.utility.findPlayerByIdOrNickname(target);

    let targetPos = targetPlayer.position;
    targetPos.x += 5.0;

    player.position = targetPos;
});

mp.events.addCommand('gotopos', (player, position) =>
{
    let targetPos = parseFloat(position);
    player.position = targetPos;
});
