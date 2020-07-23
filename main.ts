enum RadioMessage {
    message1 = 49434,
    Byt1 = 17295,
    Byt2 = 7527,
    Byt3 = 27697,
    Byt4 = 5632
}
radio.onReceivedMessage(RadioMessage.Byt1, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
radio.onReceivedMessage(RadioMessage.Byt2, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    radio.sendMessage(RadioMessage.Byt3)
    basic.pause(5000)
    radio.sendMessage(RadioMessage.Byt4)
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
