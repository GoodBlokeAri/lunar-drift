mp.events.add('render', () =>
{
    if(mp.players.local.vehicle)
    {
        //Velocity
        let velocity = mp.players.local.vehicle.getRotationVelocity();
        mp.game.graphics.drawText('Velocity: ' + parseFloat(velocity.x).toFixed(3) + " " + parseFloat(velocity.y).toFixed(3) + " " + parseFloat(velocity.z).toFixed(3), [0.5, 0.005],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        //Rotation
        let rotation = mp.players.local.vehicle.getRotation(2);

        mp.game.graphics.drawText(' Rotation x: ' + parseFloat(rotation.x).toFixed(3), [0.7, 0.005],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        mp.game.graphics.drawText(' Rotation y: ' + parseFloat(rotation.y).toFixed(3), [0.7, 0.055],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        mp.game.graphics.drawText(' Rotation z: ' + parseFloat(rotation.z).toFixed(3), [0.7, 0.105],
        {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });

        //Steering angle
        let steerangle = mp.players.local.vehicle.steeringAngle;

        mp.game.graphics.drawText('Steer angle: ' + parseFloat(steerangle).toFixed(3), [0.85, 0.005],
        {
            font: 6,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });
    }
});
