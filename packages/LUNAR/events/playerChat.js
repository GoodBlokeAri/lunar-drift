mp.events.add("playerChat", (player, text) =>
{
	mp.players.broadcast("<span style='color:#38e09f'>(" + player.id + ") " + player.name + "</span>: <span style='color:#ffffff'>" + text + "</span>");
});
