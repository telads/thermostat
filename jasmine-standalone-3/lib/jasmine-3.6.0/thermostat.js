// use 'strict'

class Thermostat{
  constructor(temperature){
    this.temperature=20
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSavingModeOn=true;
  }


 increase () {
  this.temperature+=1

}

   decrease () {
      if (this.isMinimumTemperature ()) {
        return;
      }
      this.temperature-=1
  }

  isMinimumTemperature () {
    return this.MINIMUM_TEMPERATURE === this.temperature;
  }

  changePowerSavingModeToOff(){
    return this.isPowerSavingModeOn=false;
  }

changePowerSavingModeToOn(){
  return this.isPowerSavingModeOn=true;
}

}
