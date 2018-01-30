mp.events.add("playerDeath", (player, reason, killer) =>
{
    player.spawn(new mp.Vector3(-1809.073, 823.45, 140));
});
