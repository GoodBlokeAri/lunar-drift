mp.events.add('render', () =>
{
    if(mp.players.local.vehicle)
    {
        //Velocity
        let velocity = mp.players.local.vehicle.getRotationVelocity();
        mp.game.graphics.drawText('Velocity: ' + velocity.x + " " + velocity.y + " " + velocity.z, [0.5, 0.005],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        //Rotation
        let rotation = mp.players.local.vehicle.getRotation();

        mp.game.graphics.drawText(' Rotation x: ' + rotation.x, [0.7, 0.005],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        mp.game.graphics.drawText(' Rotation y: ' + rotation.y, [0.7, 0.055],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        mp.game.graphics.drawText(' Rotation z: ' + rotation.z, [0.7, 0.105],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        //Steering angle
        let steerangle = mp.players.local.vehicle.steeringAngle;

        mp.game.graphics.drawText('Steer angle: ' + steerangle, [0.85, 0.005],
        {
            font: 6,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });
    }
});
