led.enable(false)
let control2 = 0
basic.forever(function () {
    while (control2 < 1024) {
        control2 += 1
        pins.analogWritePin(AnalogPin.P0, control2)
        basic.pause(5000)
    }
    while (control2 > 0) {
        control2 += -1
        pins.analogWritePin(AnalogPin.P0, control2)
        basic.pause(5000)
    }
})
