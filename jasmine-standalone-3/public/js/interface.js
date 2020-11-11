$(document).ready(function() {
  let thermostat

  $.get('/api/thermostat', function(data) {
    console.log("API Get Successful")
    thermostat = new Thermostat(data.temperature);
    updateTemperature();
  })

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
  
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUse());
    $.post('api/thermostat', JSON.stringify({ temperature: thermostat.getCurrentTemperature() }), function(){
      console.log("API Post successful")
    })
  };

  // $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // })

});
