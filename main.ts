const initRegisterArray: number[] = [
    0xEF, 0x00, 0x32, 0x29, 0x33, 0x01, 0x34, 0x00, 0x35, 0x01, 0x36, 0x00, 0x37, 0x07, 0x38, 0x17,
    0x39, 0x06, 0x3A, 0x12, 0x3F, 0x00, 0x40, 0x02, 0x41, 0xFF, 0x42, 0x01, 0x46, 0x2D, 0x47, 0x0F,
    0x48, 0x3C, 0x49, 0x00, 0x4A, 0x1E, 0x4B, 0x00, 0x4C, 0x20, 0x4D, 0x00, 0x4E, 0x1A, 0x4F, 0x14,
    0x50, 0x00, 0x51, 0x10, 0x52, 0x00, 0x5C, 0x02, 0x5D, 0x00, 0x5E, 0x10, 0x5F, 0x3F, 0x60, 0x27,
    0x61, 0x28, 0x62, 0x00, 0x63, 0x03, 0x64, 0xF7, 0x65, 0x03, 0x66, 0xD9, 0x67, 0x03, 0x68, 0x01,
    0x69, 0xC8, 0x6A, 0x40, 0x6D, 0x04, 0x6E, 0x00, 0x6F, 0x00, 0x70, 0x80, 0x71, 0x00, 0x72, 0x00,
    0x73, 0x00, 0x74, 0xF0, 0x75, 0x00, 0x80, 0x42, 0x81, 0x44, 0x82, 0x04, 0x83, 0x20, 0x84, 0x20,
    0x85, 0x00, 0x86, 0x10, 0x87, 0x00, 0x88, 0x05, 0x89, 0x18, 0x8A, 0x10, 0x8B, 0x01, 0x8C, 0x37,
    0x8D, 0x00, 0x8E, 0xF0, 0x8F, 0x81, 0x90, 0x06, 0x91, 0x06, 0x92, 0x1E, 0x93, 0x0D, 0x94, 0x0A,
    0x95, 0x0A, 0x96, 0x0C, 0x97, 0x05, 0x98, 0x0A, 0x99, 0x41, 0x9A, 0x14, 0x9B, 0x0A, 0x9C, 0x3F,
    0x9D, 0x33, 0x9E, 0xAE, 0x9F, 0xF9, 0xA0, 0x48, 0xA1, 0x13, 0xA2, 0x10, 0xA3, 0x08, 0xA4, 0x30,
    0xA5, 0x19, 0xA6, 0x10, 0xA7, 0x08, 0xA8, 0x24, 0xA9, 0x04, 0xAA, 0x1E, 0xAB, 0x1E, 0xCC, 0x19,
    0xCD, 0x0B, 0xCE, 0x13, 0xCF, 0x64, 0xD0, 0x21, 0xD1, 0x0F, 0xD2, 0x88, 0xE0, 0x01, 0xE1, 0x04,
    0xE2, 0x41, 0xE3, 0xD6, 0xE4, 0x00, 0xE5, 0x0C, 0xE6, 0x0A, 0xE7, 0x00, 0xE8, 0x00, 0xE9, 0x00,
    0xEE, 0x07, 0xEF, 0x01, 0x00, 0x1E, 0x01, 0x1E, 0x02, 0x0F, 0x03, 0x10, 0x04, 0x02, 0x05, 0x00,
    0x06, 0xB0, 0x07, 0x04, 0x08, 0x0D, 0x09, 0x0E, 0x0A, 0x9C, 0x0B, 0x04, 0x0C, 0x05, 0x0D, 0x0F,
    0x0E, 0x02, 0x0F, 0x12, 0x10, 0x02, 0x11, 0x02, 0x12, 0x00, 0x13, 0x01, 0x14, 0x05, 0x15, 0x07,
    0x16, 0x05, 0x17, 0x07, 0x18, 0x01, 0x19, 0x04, 0x1A, 0x05, 0x1B, 0x0C, 0x1C, 0x2A, 0x1D, 0x01,
    0x1E, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x25, 0x01, 0x26, 0x00, 0x27, 0x39, 0x28, 0x7F,
    0x29, 0x08, 0x30, 0x03, 0x31, 0x00, 0x32, 0x1A, 0x33, 0x1A, 0x34, 0x07, 0x35, 0x07, 0x36, 0x01,
    0x37, 0xFF, 0x38, 0x36, 0x39, 0x07, 0x3A, 0x00, 0x3E, 0xFF, 0x3F, 0x00, 0x40, 0x77, 0x41, 0x40,
    0x42, 0x00, 0x43, 0x30, 0x44, 0xA0, 0x45, 0x5C, 0x46, 0x00, 0x47, 0x00, 0x48, 0x58, 0x4A, 0x1E,
    0x4B, 0x1E, 0x4C, 0x00, 0x4D, 0x00, 0x4E, 0xA0, 0x4F, 0x80, 0x50, 0x00, 0x51, 0x00, 0x52, 0x00,
    0x53, 0x00, 0x54, 0x00, 0x57, 0x80, 0x59, 0x10, 0x5A, 0x08, 0x5B, 0x94, 0x5C, 0xE8, 0x5D, 0x08,
    0x5E, 0x3D, 0x5F, 0x99, 0x60, 0x45, 0x61, 0x40, 0x63, 0x2D, 0x64, 0x02, 0x65, 0x96, 0x66, 0x00,
    0x67, 0x97, 0x68, 0x01, 0x69, 0xCD, 0x6A, 0x01, 0x6B, 0xB0, 0x6C, 0x04, 0x6D, 0x2C, 0x6E, 0x01,
    0x6F, 0x32, 0x71, 0x00, 0x72, 0x01, 0x73, 0x35, 0x74, 0x00, 0x75, 0x33, 0x76, 0x31, 0x77, 0x01,
    0x7C, 0x84, 0x7D, 0x03, 0x7E, 0x01
];

let TubeTab: number [] = [
    0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07,
    0x7f, 0x6f, 0x77, 0x7c, 0x39, 0x5e, 0x79, 0x71
];

/**
 * Grove Gestures
 */
enum GroveGesture {

    //% block="swipe Right"
    Right = 1,
    //% block="swipe Left"
    Left = 2,
    //% block="swipe Up"
    Up = 3,
    //% block="swipe Down"
    Down = 4,
    //% block="object close"
    Forward = 5,
    //% block="object away"
    Backward = 6,
    //% block="circle-CW"
    Clockwise = 7,
    //% block="circle-CCW"
    Anticlockwise = 8,
    //% block="finger waving"
    Wave = 9
}

enum GroveJoystickKey {

    //% block="→ Right"
    Right = 1,
    //% block="← Left"
    Left = 2,
    //% block="↑ Up"
    Up = 3,
    //% block="↓ Down"
    Down = 4,
    //% block="UpperLeft"
    UL = 5,
    //% block="UpperRight"
    UR = 6,
    //% block="LowerLeft"
    LL = 7,
    //% block="LowerRight"
    LR = 8,
    //% block="pressed"
    Press = 9
}

enum GrovePin {
    //% block="P0"
    P0 = DigitalPin.P0,
    //% block="P1"
    P1 = DigitalPin.P1,
    //% block="P2"
    P2 = DigitalPin.P2,
    //% block="P3"
    P3 = DigitalPin.P3,
    //% block="P4"
    P4 = DigitalPin.P4,
    //% block="P5"
    P5 = DigitalPin.P5,
    //% block="P6"
    P6 = DigitalPin.P6,
    //% block="P7"
    P7 = DigitalPin.P7,
    //% block="P8"
    P8 = DigitalPin.P8,
    //% block="P9"
    P9 = DigitalPin.P9,
    //% block="P10"
    P10 = DigitalPin.P10,
    //% block="P11"
    P11 = DigitalPin.P11,
    //% block="P12"
    P12 = DigitalPin.P12,
    //% block="P13"
    P13 = DigitalPin.P13,
    //% block="P14"
    P14 = DigitalPin.P14,
    //% block="P15"
    P15 = DigitalPin.P15,
    //% block="P16"
    P16 = DigitalPin.P16
}

enum GroveAnalogPin {
    //% block="P0"
    P0 = AnalogPin.P0,
    //% block="P1"
    P1 = AnalogPin.P1,
    //% block="P2"
    P2 = AnalogPin.P2,
    //% block="P3"
    P3 = AnalogPin.P3,
    //% block="P4"
    P4 = AnalogPin.P4,
    //% block="P10"
    P10 = AnalogPin.P10
}

enum DistanceUnit {
    //% block="cm"
    cm,
    //% block="inch"
    inch
}

/**
 * Functions to operate Grove module.
 */
//% weight=10 color=#9F79EE icon="\uf1b3" block="Grove"

//% groups='["Display","Sensor","Motor","Communication"]'

namespace grove {
    /**
     * 
     */
    export class PAJ7620 {
        private paj7620WriteReg(addr: number, cmd: number) {
            let buf: Buffer = pins.createBuffer(2);

            buf[0] = addr;
            buf[1] = cmd;

            pins.i2cWriteBuffer(0x73, buf, false);
        }

        private paj7620ReadReg(addr: number): number {
            let buf: Buffer = pins.createBuffer(1);

            buf[0] = addr;

            pins.i2cWriteBuffer(0x73, buf, false);

            buf = pins.i2cReadBuffer(0x73, 1, false);

            return buf[0];
        }

        private paj7620SelectBank(bank: number) {
            if (bank == 0) this.paj7620WriteReg(0xEF, 0);
            else if (bank == 1) this.paj7620WriteReg(0xEF, 1);
        }

        private paj7620Init() {
            let temp = 0;

            this.paj7620SelectBank(0);

            temp = this.paj7620ReadReg(0);
            if (temp == 0x20) {
                for (let i = 0; i < 438; i += 2) {
                    this.paj7620WriteReg(initRegisterArray[i], initRegisterArray[i + 1]);
                }
            }

            this.paj7620SelectBank(0);
        }

        /**
         * Create a new driver of Grove - Gesture
         */
        init() {
            this.paj7620Init();
            basic.pause(200);
        }

        /**
         * Detect and recognize the gestures from Grove - Gesture
         */

        read(): number {
            let data = 0, result = 0;

            data = this.paj7620ReadReg(0x43);
            switch (data) {
                case 0x01:
                    result = GroveGesture.Right;
                break;

                case 0x02:
                    result = GroveGesture.Left;
                break;

                case 0x04:
                    result = GroveGesture.Up;
                break;

                case 0x08:
                    result = GroveGesture.Down;
                break;

                case 0x10:
                    result = GroveGesture.Forward;
                break;

                case 0x20:
                    result = GroveGesture.Backward;
                break;

                case 0x40:
                    result = GroveGesture.Clockwise;
                break;

                case 0x80:
                    result = GroveGesture.Anticlockwise;
                break;

                default:
                    data = this.paj7620ReadReg(0x44);
                    if (data == 0x01)
                        result = GroveGesture.Wave;
                break;
            }

            return result;
        }
    }
    
    /**
     * 
     */
    export class TM1637
    {
        clkPin: DigitalPin;
        dataPin: DigitalPin;
        brightnessLevel: number;     
        pointFlag: boolean;
        buf: Buffer;

        private writeByte(wrData: number) 
        {
            for(let i = 0; i < 8; i ++)
            {
                pins.digitalWritePin(this.clkPin, 0);
                if(wrData & 0x01)pins.digitalWritePin(this.dataPin, 1);
                else pins.digitalWritePin(this.dataPin, 0);
                wrData >>= 1;
                pins.digitalWritePin(this.clkPin, 1);
            }
            
            pins.digitalWritePin(this.clkPin, 0); // Wait for ACK
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.clkPin, 1);
        }
        
        private start()
        {
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 0);
        }
        
        private stop()
        {
            pins.digitalWritePin(this.clkPin, 0);
            pins.digitalWritePin(this.dataPin, 0);
            pins.digitalWritePin(this.clkPin, 1);
            pins.digitalWritePin(this.dataPin, 1);
        }
        
        private coding(dispData: number): number
        {
            let pointData = 0;
            
            if(this.pointFlag == true)pointData = 0x80;
            else if(this.pointFlag == false)pointData = 0;
            
            if(dispData == 0x7f)dispData = 0x00 + pointData;
            else dispData = TubeTab[dispData] + pointData;
            
            return dispData;
        } 

        /**
         * Show a number on the 4 digit display
         * @param dispData value of number
         */

        //% blockId=grove_tm1637_display_number block="4-Digit Display: |%4Digit|show number|%dispData"
        //% dispData.min=0 dispData.max=9999
        //% group="Display"
        //% weight=50
        show(dispData: number)
        {
            if((dispData == 0x7f) || ((dispData <= 9999)))
            {
                let segData = 0;
                
                segData = this.coding(dispData);
                this.start();
                this.writeByte(0x44);
                this.stop();
                this.start();
                this.writeByte(segData);
                this.stop();
                this.start();
                this.writeByte(0x88 + this.brightnessLevel);
                this.stop();

            }
        }
        
        /**
         * Set the brightness level of 4 digit display
         * @param level value of brightness light level
         */
        //% blockId=grove_tm1637_set_display_level block="4-Digit Display: |%4Digit|set brightness to|%level"
        //% level.min=0 level.max=7
        //% group="Display"
        //% weight=20
        set(level: number)
        {
            this.brightnessLevel = level;
            
            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }
        
        /**
         * Show a single digit at specified bit of the Digit Display
         * @param dispData value of number
         * @param bitAddr value of bit number
         */
        //% blockId=grove_tm1637_display_bit block="4-Digit Display: |%4Digit|show digit|%dispData|at bit|%bitAddr"
        //% dispData.min=0 dispData.max=9
        //% bitAddr.min=0 bitAddr.max=3
        //% group="Display"
        //% weight=40
        bit(dispData: number, bitAddr: number)
        {
            if((dispData == 0x7f) || ((dispData <= 9) && (bitAddr <= 3)))
            {
                let segData = 0;
                
                segData = this.coding(dispData);
                this.start();
                this.writeByte(0x44);
                this.stop();
                this.start();
                this.writeByte(bitAddr | 0xc0);
                this.writeByte(segData);
                this.stop();
                this.start();
                this.writeByte(0x88 + this.brightnessLevel);
                this.stop();
                
                this.buf[bitAddr] = dispData;
            }
        }
        
        /**
         * Turn ON or OFF the colon of the 4 Digit Display
         * @param pointEn value of point switch
         */
        //% blockId=grove_tm1637_display_point block="4-Digit Display: |%4Digit|colon|%point"
        //% group="Display"
        //% weight=30
        point(point: boolean)
        {
            this.pointFlag = point;
            
            this.bit(this.buf[0], 0x00);
            this.bit(this.buf[1], 0x01);
            this.bit(this.buf[2], 0x02);
            this.bit(this.buf[3], 0x03);
        }
        
        /**
         * Turn off all segments the 4 digit display
         */
        //% blockId=grove_tm1637_display_clear block="4-Digit Display: |%4Digit|off"
        //% group="Display"
        //% weight=10
        clear()
        {
            this.bit(0x7f, 0x00);
            this.bit(0x7f, 0x01);
            this.bit(0x7f, 0x02);
            this.bit(0x7f, 0x03);
        }
    }


    export class GroveJoystick
    {
        /**
         * Detect position from Grove - Thumb Joystick
         * @param xPin
         * @param yPin
         */
     
        joyread(xPin: AnalogPin, yPin: AnalogPin): number {

            let xdata = 0, ydata = 0, result = 0;
            if (xPin && yPin) {
                xdata = pins.analogReadPin(xPin);
                ydata = pins.analogReadPin(yPin);
                if (xdata > 1000) {
                    result = GroveJoystickKey.Press;
                }
                else if (xdata > 600) {
                    if (ydata > 600) result = GroveJoystickKey.UR;
                    else if (ydata < 400) result = GroveJoystickKey.LR;
                    else result = GroveJoystickKey.Right;
                }
                else if (xdata < 400) {
                    if (ydata > 600) result = GroveJoystickKey.UL;
                    else if (ydata < 400) result = GroveJoystickKey.LL;
                    else result = GroveJoystickKey.Left;
                }
                else {
                    if (ydata > 600) result = GroveJoystickKey.Up;
                    else if (ydata < 400) result = GroveJoystickKey.Down;
                    else result = GroveJoystickKey.Right;
                }
            }
            else {
                result =  GroveJoystickKey.Right;
            }
            return result;
        }
    }
    
    const gestureEventId = 3100;
    const joystickEventID = 3101;
    let lastGesture = GroveGesture.Right;
    let lastJoystick = GroveJoystickKey.Right;
    let distanceBackup: number = 0;
    let joystick = new GroveJoystick();
    let paj7620 = new PAJ7620();
    // adapted to Calliope mini V2 Core by M.Klein 17.09.2020
    

    /**
    * Turn ON or OFF mini fan motor at specified Grove port
    */
    //% blockId=grove_minifanOnOff
    //% block="Mini Fan$groveport|: turn $on"
    //% groveport.fieldEditor="gridpicker" groveport.fieldOptions.columns=4
    //% groveport.fieldOptions.tooltips="false" groveport.fieldOptions.width="250"
    //% on.shadow="toggleOnOff"
    //% on.defl="true"
    //% group="Motor"
    //% weight=100
    export function grove_minifanOnOff(groveport: GrovePin, on: boolean) {
        let port: number = groveport;
        if (on) {
            pins.digitalWritePin(<DigitalPin>port, 1);
        } else {
            pins.digitalWritePin(<DigitalPin>port, 0);
        }
    }

    /**
    * Set the servo angle, the angle is between 0 to 180°
    */
    //% blockId=grove_servo
    //% block="Servo$analogport|: set angle to $angle|°"
    //% analogport.fieldEditor="gridpicker" analogport.fieldOptions.columns=4
    //% analogport.fieldOptions.tooltips="false" analogport.fieldOptions.width="250"
    //% angle.min=0 angle.max=180
    //% angle.defl=90
    //% group="Motor" 
    //% weight=99
    export function grove_servo(analogport: GroveAnalogPin, angle: number) {
        let port: number = analogport;
        pins.servoWritePin(<AnalogPin>port, pins.map(angle, 0, 180, 10, 180));
    }
    



    /**
    * Read the sound sensor value from specified Grove port, the value is between 0 to 1023
    * @param analogport value of clk pin number
    */
    //% blockId=grove_soundsensor
    //% block="Sound Sensor $analogport|: value"
    //% analogport.fieldEditor="gridpicker" analogport.fieldOptions.columns=4
    //% analogport.fieldOptions.tooltips="false" analogport.fieldOptions.width="250"
    //% analogport.defl=DigitalPin.C16
    //% group="Sensor"
    //% weight=80
    export function grove_soundsensor(analogport: GroveAnalogPin): number {
        let port: number = analogport;
        // amplify the raw data with index value
        let index: number = 1;
        let sample: number = 50;
        let interval: number = 2;
        let max_data: number =0;
        let raw_data: number =0;

        for (let i = 0; i < sample; i++) {
            raw_data = 1023 - pins.analogReadPin(<AnalogPin>port);
            if (raw_data >= max_data) {
                max_data = raw_data;
            }
            control.waitMicros(interval);
        }

        max_data = Math.round(max_data*index);
        max_data = Math.constrain(max_data, 0, 1023);

        return max_data;
    }

    /**
    * Read the loudness sensor value from specified Grove port, the value is between 0 to 1023
    * @param analogport value of clk pin number
    */
    //% blockId=grove_loudnesssensor
    //% block="Loudness Sensor $analogport|: value"
    //% analogport.fieldEditor="gridpicker" analogport.fieldOptions.columns=4
    //% analogport.fieldOptions.tooltips="false" analogport.fieldOptions.width="250"
    //% analogport.defl=DigitalPin.C16
    //% group="Sensor"
    //% weight=79
    export function grove_loudnesssensor(analogport: GroveAnalogPin): number {
        let port: number = analogport;
        let result: number =0;

        for (let i = 0; i < 32; i++) {
            result += pins.analogReadPin(<AnalogPin>port)
        }
        result /= 32;

        return result;
    }

    /**
    * This block for micrGet the distance from Ultrasonic Sensor, the measuring range is between 2-350cm
    * @param groveport value of clk pin number
    */
    //% blockId=grove_ultrasonic
    //% block="Ultrasonic Sensor $groveport|: distance in $Unit"
    //% groveport.fieldEditor="gridpicker" groveport.fieldOptions.columns=4
    //% groveport.fieldOptions.tooltips="false" groveport.fieldOptions.width="250"
    //% groveport.defl=DigitalPin.C16
    //% group="Sensor"  
    //% weight=78
    export function grove_ultrasonic(groveport: GrovePin, Unit: DistanceUnit): number {
        let duration = 0;
        let distance = 0;
        let distanceBackup = 0;
        let port: number = groveport;

        pins.digitalWritePin(<DigitalPin>port, 0);
        control.waitMicros(2);
        pins.digitalWritePin(<DigitalPin>port, 1);
        control.waitMicros(10);
        pins.digitalWritePin(<DigitalPin>port, 0);

        duration = pins.pulseIn(<DigitalPin>port, PulseValue.High, 50000);

        if (Unit == DistanceUnit.cm) distance = duration * 153 / 58 / 100;
        else distance = duration * 153 / 148 / 100;

        if (distance > 0) distanceBackup = distance;
        else distance = distanceBackup;
        basic.pause(50);

        return distance;
    }
    /**
    * (For micro:bit V2 ONLY)Get the distance from Grove-Ultrasonic Sensor, the measuring range is between 2-350cm
    * @param groveport value of clk pin number
    */
    //% blockId=grove_ultrasonic_v2
    //% block="(V2)Ultrasonic Sensor $groveport|: distance in $Unit"
    //% groveport.fieldEditor="gridpicker" groveport.fieldOptions.columns=4
    //% groveport.fieldOptions.tooltips="false" groveport.fieldOptions.width="250"
    //% groveport.defl=DigitalPin.C16
    //% group="Sensor"
    //% weight=77
    export function grove_ultrasonic_v2(groveport: GrovePin, Unit: DistanceUnit): number {
        let duration = 0;
        let distance = 0;
        let distanceBackup = 0;
        let port: number = groveport;

        pins.digitalWritePin(<DigitalPin>port, 0);
        control.waitMicros(2);
        pins.digitalWritePin(<DigitalPin>port, 1);
        control.waitMicros(10);
        pins.digitalWritePin(<DigitalPin>port, 0);

        duration = pins.pulseIn(<DigitalPin>port, PulseValue.High, 50000);

        if (Unit == DistanceUnit.cm) distance = duration * 153 / 88 / 100;
        else distance = duration * 153 / 226 / 100;

        if (distance > 0) distanceBackup = distance;
        else distance = distanceBackup;
        basic.pause(50);

        return distance;
    }


    
    /**
     * Create a new Grove - 4-Digit Display driver at specified ports
     * @param clkPin value of clk pin number
     * @param dataPin value of data pin number
     */
    //% blockId=grove_tm1637_create block="4-Digit Display at|%clkPin|and|%dataPin"
    //% clkPin.fieldEditor="gridpicker" clkPin.fieldOptions.columns=4
    //% group="Display" 
    //% weight=60
    //% clkPin.fieldOptions.tooltips="false" clkPin.fieldOptions.width="250"
    //% dataPin.fieldEditor="gridpicker" dataPin.fieldOptions.columns=4
    //% clkPin.defl=DigitalPin.C16 dataPin.defl=DigitalPin.C17
    //% dataPin.fieldOptions.tooltips="false" dataPin.fieldOptions.width="250"
    //% blockSetVariable=4digit
    export function createDisplay(clkPin: DigitalPin, dataPin: DigitalPin): TM1637
    {
        let display = new TM1637();
        
        display.buf = pins.createBuffer(4);
        display.clkPin = clkPin;
        display.dataPin = dataPin;
        display.brightnessLevel = 0;
        display.pointFlag = false;
        display.clear();
        
        return display;
    }
 

    /**
     * Get the gesture sensor value, 0 refers to none detected, 1 - 9 represents 9 diffrent gestures
     * 
     */
    //% blockId=grove_getgesture block="get gesture model"
    //% group="Sensor"
    export function getGestureModel(): number {
        paj7620.init();
        return paj7620.read();
    }
    /**
     * Do something when the joystick is pushed to a specified direction
     * 
     */
    //% blockId=grove_getjoystick block="joystick|%xpin|and|%ypin"
    //% xpin.fieldEditor="gridpicker" xpin.fieldOptions.columns=4
    //% xpin.fieldOptions.tooltips="false" xpin.fieldOptions.width="250"
    //% ypin.fieldEditor="gridpicker" ypin.fieldOptions.columns=4
    //% ypin.fieldOptions.tooltips="false" ypin.fieldOptions.width="250"
    //% group="Sensor" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17
    export function getJoystick(xpin: AnalogPin, ypin: AnalogPin): number {
        return joystick.joyread(xpin, ypin);
    }

   /**
     * Check if a specified gesture is detected and return as "Ture" or "False"
     * @param g type of g to detect
     */
    // % blockId=ggesture block="%key"
    //% g.fieldEditor="gridpicker" g.fieldOptions.columns=3
    //% g.fieldOptions.tooltips="false" g.fieldOptions.width="200"
    //% group="Sensor"
    export function ggesture(g: GroveGesture): boolean {
        if (g==1 || g==2 || g==3 || g==4 || g==5 || g==6 || g==7 || g==8 || g==9  )
            return true;
        else
             return false;
    }
    
    /**
     * Do something when a specified gesture is detected
     * @param gesture type of gesture to detect
     * @param handler code to run
     */
    //% blockId=grove_gesture_create_event block="on Gesture|%gesture"
    //% gesture.fieldEditor="gridpicker" gesture.fieldOptions.columns=4
    //% gesture.fieldOptions.tooltips="false" gesture.fieldOptions.width="250"
    //% group="Sensor"
    export function onGesture(gesture: GroveGesture, handler: () => void) {
        control.onEvent(gestureEventId, gesture, handler);
        paj7620.init();
        control.inBackground(() => {
            while(true) {
                const gesture = paj7620.read();
                if (gesture != lastGesture) {
                    lastGesture = gesture;
                    control.raiseEvent(gestureEventId, lastGesture);
                }
                basic.pause(50);
            }
        })
    }


    /**
     * Check if the joystick is being pressed or pushed to a specified direction and return as "Ture" or "False"
     * @param key type of joystick to detect
     * @param xpin
     * @param ypin
     * @param handler code to run
     */
    //% blockId=grove_joystick_create_event block="on Key|%key at |%xpin|and|%ypin"
    //% key.fieldEditor="gridpicker" key.fieldOptions.columns=4
    //% key.fieldOptions.tooltips="false" key.fieldOptions.width="250"
    //% xpin.fieldEditor="gridpicker" xpin.fieldOptions.columns=4
    //% xpin.fieldOptions.tooltips="false" xpin.fieldOptions.width="250"
    //% ypin.fieldEditor="gridpicker" ypin.fieldOptions.columns=4
    //% ypin.fieldOptions.tooltips="false" ypin.fieldOptions.width="250"
    //% group="Sensor" xpin.defl=AnalogPin.C16 ypin.defl=AnalogPin.C17

    export function onJoystick(key: GroveJoystickKey, xpin: AnalogPin, ypin: AnalogPin, handler: () => void) {
        control.onEvent(joystickEventID, key, handler);
        control.inBackground(() => {
            while(true) {
                const key = joystick.joyread(xpin, ypin);
                if (key != lastJoystick) {
                    lastJoystick = key; 
                    control.raiseEvent(joystickEventID, lastJoystick);
                }
                basic.pause(50);
            }
        })
        
    }

    let isWifiConnected = false;
    /**
     * Set up Grove - Uart WiFi V2 to connect to  Wi-Fi
     */
    //% block="Setup Wifi|TX %txPin|RX %rxPin|Baud rate %baudrate|SSID = %ssid|Password = %passwd"
    //% txPin.fieldEditor="gridpicker" txPin.fieldOptions.columns=3
    //% txPin.fieldOptions.tooltips="false" txPin.fieldOptions.width="200"
    //% rxPin.fieldEditor="gridpicker" rxPin.fieldOptions.columns=3
    //% rxPin.fieldOptions.tooltips="false" rxPin.fieldOptions.width="200"
    //% group="Communication"
    //% txPin.defl=SerialPin.P15
    //% rxPin.defl=SerialPin.P1
    //% baudRate.defl=BaudRate.BaudRate115200
    export function setupWifi(txPin: SerialPin, rxPin: SerialPin, baudRate: BaudRate, ssid: string, passwd: string) {
        let result = 0

        isWifiConnected = false

        serial.redirect(
            txPin,
            rxPin,
            baudRate
        )

        sendAtCmd("AT")
        result = waitAtResponse("OK", "ERROR", "None", 1000)

        sendAtCmd("AT+CWMODE=1")
        result = waitAtResponse("OK", "ERROR", "None", 1000)

        sendAtCmd(`AT+CWJAP="${ssid}","${passwd}"`)
        result = waitAtResponse("WIFI GOT IP", "ERROR", "None", 20000)

        if (result == 1) {
            isWifiConnected = true
        }
    }

    /**
     * Check if Grove - Uart WiFi V2 is connected to Wifi
     */
    //% block="Wifi OK?"
    //% group="Communication"
    export function wifiOK() {
        return isWifiConnected
    }

    /**
     * Send data to ThinkSpeak
     */
    //% block="Send Data to your ThinkSpeak Channel|Write API Key %apiKey|Field1 %field1|Field2 %field2|Field3 %field3|Field4 %field4|Field5 %field5|Field6 %field6|Field7 %field7|Field8 %field8"
    //% group="Communication"
    //% apiKey.defl="your Write API Key"
    export function sendToThinkSpeak(apiKey: string, field1: number, field2: number, field3: number, field4: number, field5: number, field6: number, field7: number, field8: number) {
        let result = 0
        let retry = 2

        // close the previous TCP connection
        if (isWifiConnected) {
            sendAtCmd("AT+CIPCLOSE")
            waitAtResponse("OK", "ERROR", "None", 2000)
        }

        while (isWifiConnected && retry > 0) {
            retry = retry - 1;
            // establish TCP connection
            sendAtCmd("AT+CIPSTART=\"TCP\",\"api.thingspeak.com\",80")
            result = waitAtResponse("OK", "ALREADY CONNECTED", "ERROR", 2000)
            if (result == 3) continue

            let data = "GET /update?api_key=" + apiKey
            if (!isNaN(field1)) data = data + "&field1=" + field1
            if (!isNaN(field2)) data = data + "&field2=" + field2
            if (!isNaN(field3)) data = data + "&field3=" + field3
            if (!isNaN(field4)) data = data + "&field4=" + field4
            if (!isNaN(field5)) data = data + "&field5=" + field5
            if (!isNaN(field6)) data = data + "&field6=" + field6
            if (!isNaN(field7)) data = data + "&field7=" + field7
            if (!isNaN(field8)) data = data + "&field8=" + field8

            sendAtCmd("AT+CIPSEND=" + (data.length + 2))
            result = waitAtResponse(">", "OK", "ERROR", 2000)
            if (result == 3) continue
            sendAtCmd(data)
            result = waitAtResponse("SEND OK", "SEND FAIL", "ERROR", 5000)

            // // close the TCP connection
            // sendAtCmd("AT+CIPCLOSE")
            // waitAtResponse("OK", "ERROR", "None", 2000)

            if (result == 1) break
        }
    }

    /**
     * Check if Grove - UART WIFI V2 IS CONNECTED TO WIFI
     */
    //% block="Send Data to your IFTTT Event|Event %event|Key %key|value1 %value1|value2 %value2|value3 %value3"
    //% group="Communication"
    //% event.defl="your Event"
    //% key.defl="your Key"
    //% value1.defl="hello"
    //% value2.defl="micro"
    //% value3.defl="bit"
    export function sendToIFTTT(event: string, key: string, value1: string, value2: string, value3: string) {
        let result = 0
        let retry = 2

        // close the previous TCP connection
        if (isWifiConnected) {
            sendAtCmd("AT+CIPCLOSE")
            waitAtResponse("OK", "ERROR", "None", 2000)
        }

        while (isWifiConnected && retry > 0) {
            retry = retry - 1;
            // establish TCP connection
            sendAtCmd("AT+CIPSTART=\"TCP\",\"maker.ifttt.com\",80")
            result = waitAtResponse("OK", "ALREADY CONNECTED", "ERROR", 2000)
            if (result == 3) continue

            let data = "GET /trigger/" + event + "/with/key/" + key
            data = data + "?value1=" + value1
            data = data + "&value2=" + value2
            data = data + "&value3=" + value3
            data = data + " HTTP/1.1"
            data = data + "\u000D\u000A"
            data = data + "User-Agent: curl/7.58.0"
            data = data + "\u000D\u000A"
            data = data + "Host: maker.ifttt.com"
            data = data + "\u000D\u000A"
            data = data + "Accept: */*"
            data = data + "\u000D\u000A"

            sendAtCmd("AT+CIPSEND=" + (data.length + 2))
            result = waitAtResponse(">", "OK", "ERROR", 2000)
            if (result == 3) continue
            sendAtCmd(data)
            result = waitAtResponse("SEND OK", "SEND FAIL", "ERROR", 5000)

            // // close the TCP connection
            // sendAtCmd("AT+CIPCLOSE")
            // waitAtResponse("OK", "ERROR", "None", 2000)

            if (result == 1) break
        }
    }


    function waitAtResponse(target1: string, target2: string, target3: string, timeout: number) {
        let buffer = ""
        let start = input.runningTime()

        while ((input.runningTime() - start) < timeout) {
            buffer += serial.readString()

            if (buffer.includes(target1)) return 1
            if (buffer.includes(target2)) return 2
            if (buffer.includes(target3)) return 3

            basic.pause(100)
        }

        return 0
    }

    function sendAtCmd(cmd: string) {
        serial.writeString(cmd + "\u000D\u000A")
    }
}
