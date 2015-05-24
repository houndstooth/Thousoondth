# thousoondth: a houndstooth fractal

[Read more here](https://cmloegcmluin.wordpress.com/2015/05/23/houndstooth-eats-itself-thousoondth-the-houndstooth-fractal/)

It all comes down to two method calls in execute.js:
 - `superTile (0, [ 0, 0 ], true)` : Renders the entire thing, at 0 resolution (bifurcating the screen zero times), at the origin (top left), with the origin white ( = true).
 - `magicEdge (1, [ 1, 0 ], true)` : This piece would not be necessary if the superTile call was part of a call to `magicEdge` instead. However, calling magicEdge with resolution -2 and centering the view on its supertile would waste a lot of processing power on stuff offscreen).

 
