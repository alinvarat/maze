basic.forever(function () {
    if (input.buttonIsPressed(Button.A) == true) {
        while (true) {
            if (iBIT.ReadADC(ibitReadADC.ADC0) <= 1280) {
                iBIT.MotorStop()
            } else {
                serial.writeValue("sonar", iBIT.ReadADC(ibitReadADC.ADC0))
                iBIT.setMotor(ibitMotorCH.M2, ibitMotor.Forward, 50)
                iBIT.setMotor(ibitMotorCH.M1, ibitMotor.Forward, 50)
            }
        }
    } else {
        if (input.buttonIsPressed(Button.B) == true) {
            iBIT.MotorStop()
        }
    }
})
