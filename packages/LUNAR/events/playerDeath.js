mp.events.add("playerDeath", (player, reason, killer) =>
{
    player.spawn(new mp.Vector3(-2195.063, -490.986, 729.615));
});
