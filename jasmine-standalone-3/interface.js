$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.changePowerSavingModeToOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.changePowerSavingModeToOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUse());
  };
});
