# Elapsed.js

Elapsed.js is the result of a simple abstaction I found I was commonly coding in my animation code to calculate things like mouse velocity or physics settling. It has two methods, start and elapsed.

```javascript
var timer = Elapsed();
var key = timer.start('key');
// Do a bunch of stuff
var elapsed = timer.elapsed('key'); // How much time has elapsed since key was called?
```

## Installation

```bash
bower install elapsed
```

