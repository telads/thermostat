// # Thermostat starts at 20 degrees

describe("A thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat=new Thermostat();
  })


  it("Has a starting temperature of 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  it('Can increase the temperature with an up function', function () {
    thermostat.increase()
    thermostat.increase()
    expect(thermostat.getCurrentTemperature()).toEqual(22);

  });

    it('Can decrease the temparature by one ', function () {
    thermostat.increase()
    thermostat.increase()
    thermostat.decrease()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    //
    it('Has a minimum temperature of 10 degrees', function () {
      for (var i = 1; i < 20; i++) {
        // console.log('initial temp', thermostat.getCurrentTemperature())
        thermostat.decrease();
         // console.log('i',i)
         // console.log('thermostat',(thermostat.getCurrentTemperature()))
      }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('Has a powersaving mode on by default', function (){
      expect(thermostat.powerSavingMode).toBe(true)
    })


    it('Can change the powersaving mode to off and on again ', function (){
      thermostat.changePowerSavingModeToOff();
      // console.log(thermostat.changePowerSavingModeToOff());
      expect(thermostat.powerSavingMode).toBe(false)
      thermostat.changePowerSavingModeToOn();
      expect(thermostat.powerSavingMode).toBe(true)
    })

    it ('has a reset function that resets to 20', () => {
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })

    describe('When the powersaving on', function () {
      it('it has a max temp of 25 when on', function () {
        for (var i = 0; i < 10; i++) {
          thermostat.increase()
          // console.log(thermostat.getCurrentTemperature())
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });

      it('it has a max temperature of 32 when off', () =>  {
        thermostat.changePowerSavingModeToOff();
        for (var i = 1; i < 15; i++) {
          thermostat.increase()
          console.log(thermostat.getCurrentTemperature())
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32)
      })
    })

    describe('energy use', () => {
      // it ('is low energy use <18', () => {
      //   for (var i = 0; i < 3; i++) {
      //     thermostat.decrease()
      //   }
      //   expect(thermostat.energyUse()).toEqual('low energy use')
      // })

      // it ('is high energy use >25', () => {
      //   for (var i = 0; i < 8; i++) {
      //     console.log('after loop', thermostat.getCurrentTemperature())
      //     thermostat.increase()
      //     console.log('after increase', thermostat.getCurrentTemperature())
      //
      //   }
      //   expect(thermostat.energyUse()).toEqual('high energy use')
      // })

      it('is medium energy use', () => {
        expect(thermostat.energyUse()).toEqual('medium-use')
      })

      it ('is low energy use <18', () => {
        thermostat = new Thermostat(16)
        expect(thermostat.energyUse()).toEqual('low-energy-use')
      })

      it ('is high energy use >25', () => {
        thermostat = new Thermostat(27)
        expect(thermostat.energyUse()).toEqual('high-energy-use')
      })

    })
})
