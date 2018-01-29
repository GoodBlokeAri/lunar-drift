mp.events.add("playerChat", (player, text) =>
{
	mp.players.broadcast("!{blue} " + player.name + "!{white}: " + text);
});
