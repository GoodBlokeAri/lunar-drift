mp.events.add("playerDeath", (player, reason, killer) =>
{
    player.spawn(new mp.Vector3(-2206.32, -448.172, 329.38));
});
