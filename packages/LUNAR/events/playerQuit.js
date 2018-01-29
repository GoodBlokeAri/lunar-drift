module.exports =
{
    "playerQuit": (player, reason, kickReason) =>
    {
        if(player.logged == 1)
        {
            gm.utility.saveAccount(player);
            console.log("<LOG> " + player.name + "'s account was saved!");
        }
    }
};
