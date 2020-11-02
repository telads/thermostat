// use 'strict'

class Thermostat{
  constructor(temperature){
    this.temperature=20
    this.MINIMUM_TEMPERATURE = 10
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
}
