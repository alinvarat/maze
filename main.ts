input.onButtonPressed(Button.A, function () {
    iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 50)
    iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
    if (iBIT.ReadADC(ibitReadADC.ADC0) < 20) {
        iBIT.MotorStop()
    }
})
input.onButtonPressed(Button.B, function () {
    iBIT.MotorStop()
})
basic.forever(function () {
    serial.writeValue("sonar", iBIT.ReadADC(ibitReadADC.ADC0))
})
