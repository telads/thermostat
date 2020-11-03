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
        thermostat.decrease();
      }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('Has a powersaving mode on by default', function (){
      expect(thermostat.isPowerSavingModeOn()).toBe(true)
    })
    //
    //
    it('Can change the powersaving mode to off and on again ', function (){
      thermostat.changePowerSavingModeToOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false)
      thermostat.changePowerSavingModeToOn();
      expect(thermostat.isPowerSavingModeOn).toBe(true)
    })

    describe('When the powersaving is on', function () {
      it('it has a max temp of 25', function () {
        for (var i = 0; i < 10; i++) {
          thermostat.increase()
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });






});
