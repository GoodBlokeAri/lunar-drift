mp.events.add('render', () =>
{
    if(mp.players.local.vehicle)
    {
        let velocity = mp.players.local.vehicle.getRotationVelocity();
        mp.game.graphics.drawText('Velocity: ' + velocity.x + " " + velocity.y + " " + velocity.z, [0.5, 0.005],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });
    }
});
