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
});
