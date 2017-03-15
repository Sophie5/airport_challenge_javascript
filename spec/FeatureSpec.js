// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed


'use scrict';

describe('Feature Test', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });


// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

it ('planes can be instructed to take off', function() {
  plane.land(airport)
  plane.takeoff();
  expect(airport.planes()).not.toContain(plane);
});
});
