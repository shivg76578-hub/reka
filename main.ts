let strip: neopixel.Strip = null
rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 128)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
})
