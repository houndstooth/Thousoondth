# thousoondth: a houndstooth fractal

[Read more here](https://cmloegcmluin.wordpress.com/2015/05/23/houndstooth-eats-itself-thousoondth-the-houndstooth-fractal/)

It all comes down to two method calls in execute.js:
 - `superTile (0, [ 0, 0 ], true)` : Renders the entire thing, at 0 resolution (bifurcating the screen zero times), at the origin (top left), with the origin white ( = true).
 - `magicEdge (1, [ 1, 0 ], true)` : This piece would not be necessary if the superTile call was part of a call to `magicEdge` instead. However, calling magicEdge with resolution -2 and centering the view on its supertile would waste a lot of processing power on stuff offscreen.

To turn off the diagonal edge recursion (leaving only the jagging of cusps and roots), simply comment out the “if ( withEdge)” conditional and its contents in magicTriangle (and get rid of that pesky magicEdge call in execute.js).

To do the opposite and turn off the jagging only, you'll need to add a "woJaggies" argument to magicTriangle, wrap its jaggies call in a conditional based on that argument, and then change the recursive magicTriangle call in jaggies to be woJaggies. Also, comment out the while loop, leaving its innards to execute once only.

The animated version of thousoondth can be found in the repo for [my personal site.](http://github.com/DougBlumeyer/DouglasBlumeyer.com)
