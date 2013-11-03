describe('elapsed.js', function() {
  var instance;

  beforeEach(function() {
    instance = Elapsed();
  });

  it('should create a new object', function() {
    expect(instance).toEqual(jasmine.any(Elapsed));
  });

  it('should start a timer, run it for 5ms and return the elapsed time', function() {
    instance.start('move');
    var wait = 5;
    var future = Date.now() + wait;
    var now;

    // Simulate sleep, I'm so naughty.
    while(now = Date.now(), now < future){}


    expect(instance.elapsed('move')).toEqual(wait);
  });

  it('should throw an exception if their is now timer', function() {
    expect(instance.elapsed.bind(instance, 'does-not-exist')).toThrow();
  });
});
