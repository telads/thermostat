'use strict';

class Thermostat{
  constructor(temperature){
    this.temperature=20
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode=true;
    this.MAX_PSM_ON=25;
    this.MAX_PSM_OFF=32;
  }


  getCurrentTemperature() {
      return this.temperature;
    }


    isPowerSavingModeOn(){
      return this.powerSavingMode===true;
    }


    isMaximumTemperature() { 
      if (this.isPowerSavingModeOn() === false) {
        return  this.temperature===this.MAX_PSM_OFF;
      }
      return this.temperature === this.MAX_PSM_ON;
    }



 increase () {
   if (isMaximumTemperature()) {
return;
   }
  this.temperature+=1
}


  decrease () {
    if(this.isMinimumTemperature()){
      return;
    }
    this.temperature-=1
  }







  //  decrease () {
  //     if (this.isMinimumTemperature ()) {
  //       return;
  //     }
  //     this.temperature-=1
  // }

  isMinimumTemperature () {
    return this.MINIMUM_TEMPERATURE === this.temperature;
  }

  changePowerSavingModeToOff(){
    return this.powerSavingMode=false;
  }

changePowerSavingModeToOn(){
  return this.isPowerSavingModeOn=true;
}







}
