mp.events.addCommand('ah', (player, text) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");

    player.outputChatBox(">> (ADMIN HELP) /a /kick /ban /spectate /tphere /tpto /w /dv /fix /gotopos /time");
});

mp.events.addCommand('a', (player, text) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");
    if(!text) return player.outputChatBox("The correct usage is: /a [text]!");

    mp.players.forEach((_player, id) =>
    {
        switch(player.admin)
        {
            case 2:
            {
                _player.outputChatBox("<span style='color:#9bd6bf'>>></span> <span style='color:#0297d7'>(Developer)</span> <span style='color:#e038ac'>" + player.name + ":</span> <span style='color:#9bd6bf'>" + text);
                break;
            }
            default:
            {
                _player.outputChatBox("<span style='color:#9bd6bf'>>></span> <span style='color:#c60505'>(Admin)</span> <span style='color:#e038ac'>" + player.name + ":</span> <span style='color:#9bd6bf'>" + text);
                break;
            }
        }
    });
    console.log("<ACHAT LOG> " + "(ALVL:" + player.admin + ")" + " (ID: " + player.id + ") " + player.name + ": " + text);
});

mp.events.addCommand('kick', (player, target, reason) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");
    if(typeof target == 'undefined') return player.outputChatBox("The correct usage is: /kick [target] [reason]");
    if(!target || reason.length < 1) return player.outputChatBox("The correct usage is: /kick [target] [reason]");


    const recipient = gm.utility.findPlayerByIdOrNickname(target);

    if(!recipient)
    {
        player.outputChatBox("<ERROR> <b>" + recipient + " is not connected!</b>");
        return false;
    }

    recipient.outputChatBox("<SERVER> You have been kicked by: " + player.name + " for reason: " + reason);
    player.outputChatBox("<SERVER> You have kicked: " + recipient + " from the server for: " + reason);

    setTimeout(function()
    {
        recipient.kick(reason);
    }, 1500);
});

mp.events.addCommand('ban', (player, target) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");
});

mp.events.addCommand('time', (player, time) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");
    if(time < 0 || time > 24) return player.outputChatBox("<SERVER> The time range is 0-24!");
    if(!time) return player.outputChatBox("<SERVER> The correct usage is: /time [0-24]!");


    mp.world.time.hour = time;
});

mp.events.addCommand('fix', (player) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");
    player.vehicle.repair();
});

mp.events.addCommand('spectate', (player, target) =>
{
    player.outputChatBox("soon");
});

mp.events.addCommand('tphere', (player, target) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");

    if (typeof target == 'undefined') return player.outputChatBox("The correct usage is: /tphere [target]");

    const targetPlayer = gm.utility.findPlayerByIdOrNickname(target);

    let playerPos = player.position;
    playerPos.x += 5.0;

    targetPlayer.position = playerPos;
});

mp.events.addCommand('tpto', (player, target) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");

    if (typeof target == 'undefined') return player.outputChatBox("The correct usage is: /tpto [target]");

    const targetPlayer = gm.utility.findPlayerByIdOrNickname(target);

    let targetPos = targetPlayer.position;
    targetPos.x += 5.0;

    player.position = targetPos;
});

mp.events.addCommand('gotopos', (player, position) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");

    let targetPos = parseFloat(position);
    player.position = targetPos;
});

mp.events.addCommand('w', (player,  _, target, weapon) =>
{
    if(player.admin < 1) return player.outputChatBox("<SERVER> You don't have access to this command!");

    if (target && target.trim().length > 0)
    {
        const targetPlayer = gm.utility.findPlayerByIdOrNickname(target);

        if (!targetPlayer)
        {
            player.outputChatBox("<ERROR> <b>" + targetPlayer + " is not connected!</b>");
            return false;
        }
        targetPlayer.giveWeapon(mp.joaat(weapon), 1000);
    }

});

mp.events.addCommand('dv', (player) =>
{
    player.outputChatBox("soon");
});
