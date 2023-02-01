US = 0

def on_button_pressed_a():
    iBIT.set_motor(ibitMotorCH.M1, ibitMotor.FORWARD, 50)
    iBIT.set_motor(ibitMotorCH.M2, ibitMotor.FORWARD, 50)
    if iBIT.read_adc(ibitReadADC.ADC0) < 20:
        iBIT.motor_stop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    iBIT.motor_stop()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global US
    US = sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.MICRO_SECONDS)
basic.forever(on_forever)
