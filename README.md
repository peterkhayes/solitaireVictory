solitaireVictory
================

A Jquery plugin that emulates the victory animation from Windows Solitaire, using your choice of DOM element(s).

##Demo Site
[Right here.](http://peterkhayes.github.io/solitaireVictory)

##Usage
**Basic:**
```
$('YOUR-CSS-SELECTOR').solitaireVictory();
```

**With Options:** (*defaults listed*)
```
$('YOUR-CSS-SELECTOR').solitaireVictory({
  
  // PHYSICS PROPERTIES
  g: -3                         // Gravity.  Must be less than 0; closer to 0 is weaker.
  
  dt: 20                        // Time between frames, in milliseconds.
  
  bounce: 0.7                   // Amount of speed conserved on bounce.
  
  endVelocity: 20               // Speed below which the element should not bounce.
  
  
  // PAGE CONFIGURATION
  clear: false                  // Clears the debris from past victories before starting.
  
  stagger: 200                  // If multiple DOM elements are selected, staggers the starts
                                // by this amount.  If set to 0, all elements start at the same time.
  
  relativeToDocument: false     // If set to true, the object will bounce at the bottom of the
                                // document instead of the bottom of the window.  This can solve
                                // some issues on longer documents, but looks worse in general.

});
```

Enjoy!
