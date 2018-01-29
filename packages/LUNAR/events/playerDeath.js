mp.events.add("playerDeath", (player, reason, killer) =>
{
    player.spawn(new mp.Vector3(-1048.005, -2952.721, 13.96));
});
