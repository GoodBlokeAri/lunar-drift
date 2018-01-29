mp.events.addCommand('help', (player, text) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");

    player.outputChatBox(">> (ADMIN HELP) /ping /team /pos");
});

mp.events.addCommand('ping', (player) =>
{
    let playerPing = player.ping
    player.notify('PONG! Ping: ' + playerPing);
});

mp.events.addCommand('team', (player) =>
{
    //could use flip bool here
    player.notify('you swapped team!');
});

mp.events.addCommand('pos', (player) =>
{
    let pos = player.position;
    player.outputChatBox("<SRV> " + player.position);
});
