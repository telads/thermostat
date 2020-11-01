describe('Airport ', function () {
  it('lands a plane', function () {
    let airport = new Airport()
    let plane = jasmine.createSpy("plane")
    airport.land(plane)
    expect(airport.planes).toContain(plane)
  });

  it('takes off a plane', function () {
    let airport = new Airport()
    let plane1 = jasmine.createSpy("plane1")
    let plane2 = jasmine.createSpy("plane2")
    airport.land(plane1)
    airport.land(plane2)
    airport.takeOff(plane2)
    expect(airport.planes).toContain(plane1)
    expect(airport.planes).not.toContain(plane2)
  });
});
