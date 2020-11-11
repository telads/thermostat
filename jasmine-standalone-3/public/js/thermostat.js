'use strict';

class Thermostat{
  constructor(temperature = 20){
    this.Temperature = temperature
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode=true;
    // this.MAX_PSM_ON=25;
    // this.MAX_PSM_OFF=32;
  }


  getCurrentTemperature() {
    return this.Temperature;
  }


  // isPowerSavingModeOn(){
  //   return this.powerSavingMode===true;
  // }


  // isMaximumTemperature() {
  //   if (this.isPowerSavingModeOn() === false) {
  //     return  this.Temperature=== 32;
  //   }
  //   return this.Temperature === 25;
  // }



  increase () {
    if (this.powerSavingMode === true) {
      if (this.getCurrentTemperature() < 25) {
        this.Temperature+=1
        console.log('inc by 1, psm on, under 25', this.getCurrentTemperature())
      }
      else {
        this.getCurrentTemperature()
      }
    }
    else {
      if (this.getCurrentTemperature() < 32) {
        this.Temperature+=1
      }
      else {
        this.getCurrentTemperature()
      }
    }
  }


  decrease () {
    // if(this.isMinimumTemperature()){
    //   return;
    // }
    // if the thermosastat ==10, the temperature remains at 10 degrees
  if (this.Temperature > 10) {
        this.Temperature-=1
   }

  }



  //  decrease () {
  //     if (this.isMinimumTemperature ()) {
  //       return;
  //     }
  //     this.temperature-=1
  // }

  isMinimumTemperature () {
    return this.MINIMUM_TEMPERATURE === this.Temperature;
  }

  changePowerSavingModeToOff(){
    return this.powerSavingMode=false;
  }

  changePowerSavingModeToOn(){
    return this.powerSavingMode=true;
  }

  reset(){
      this.Temperature=20
  }


  energyUse(){
    if (this.getCurrentTemperature() < 18 ) {
      return 'low-energy-use'
    }
    else if (this.getCurrentTemperature() > 25) {
      return 'high-energy-use'
    }
    else {
      return 'medium-use'
    }
  }
}
