radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Firefly.setDC(Firefly.DCPinValues.dcmotor1, DCDirectionValuesDansk.forward, Speed)
        Firefly.setDC(Firefly.DCPinValues.dcmotor2, DCDirectionValuesDansk.backward, Speed)
        Firefly.setDC(Firefly.DCPinValues.dcmotor3, DCDirectionValuesDansk.forward, Speed)
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, Speed)
    } else if (receivedNumber == 2) {
        Firefly.setDC(Firefly.DCPinValues.dcmotor1, DCDirectionValuesDansk.backward, Speed)
        Firefly.setDC(Firefly.DCPinValues.dcmotor2, DCDirectionValuesDansk.forward, Speed)
        Firefly.setDC(Firefly.DCPinValues.dcmotor3, DCDirectionValuesDansk.backward, Speed)
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.backward, Speed)
    } else if (receivedNumber == 3) {
        Firefly.setDC(Firefly.DCPinValues.dcmotor1, DCDirectionValuesDansk.backward, Fart)
        Firefly.setDC(Firefly.DCPinValues.dcmotor2, DCDirectionValuesDansk.backward, Fart)
        Firefly.setDC(Firefly.DCPinValues.dcmotor3, DCDirectionValuesDansk.forward, Fart)
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.backward, Fart)
    } else if (receivedNumber == 4) {
        Firefly.setDC(Firefly.DCPinValues.dcmotor1, DCDirectionValuesDansk.forward, Fart)
        Firefly.setDC(Firefly.DCPinValues.dcmotor2, DCDirectionValuesDansk.forward, Fart)
        Firefly.setDC(Firefly.DCPinValues.dcmotor3, DCDirectionValuesDansk.backward, Fart)
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, Fart)
    } else if (receivedNumber == 5) {
        Firefly.setDC(Firefly.DCPinValues.dcmotor1, DCDirectionValuesDansk.backward, 0)
        Firefly.setDC(Firefly.DCPinValues.dcmotor2, DCDirectionValuesDansk.forward, 0)
        Firefly.setDC(Firefly.DCPinValues.dcmotor3, DCDirectionValuesDansk.backward, 0)
        Firefly.setDC(Firefly.DCPinValues.dcmotor4, DCDirectionValuesDansk.forward, 0)
    }
})
let Speed = 0
let Fart = 0
radio.setGroup(1)
Fart = 50
Speed = 255
