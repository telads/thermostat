// # Thermostat starts at 20 degrees

describe("A thermostat", function(){

  it("Has a starting temperature of 20 degrees", function(){
    let thermostat = new Thermostat ();
    expect(thermostat.temperature).toEqual(20);
  });


  it('Can increase the temperature with an up function', function () {
    let thermostat = new Thermostat ();
    thermostat.increase()
    thermostat.increase()
    expect(thermostat.temperature).toEqual(22);

  });

  it('Can decrease the temparature by one ', function () {
    let thermostat = new Thermostat();
    thermostat.increase()
    thermostat.increase()
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(21);
    });


    it('Has a minimum temperature of 10 degress', function () {
      let thermostat = new Thermostat();

      for (var i = 1; i < 11; i++) {
        thermostat.decrease();
      }
    expect(thermostat.temperature).toEqual(10);
    });
});
