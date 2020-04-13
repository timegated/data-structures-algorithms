// Last Item in and First Item Out: LIFO;
// We use push and pop to add and remove items from the stack;
// Theory, no shift or unshift === generally a stack;
// Example of this is the call stack the engine uses for JS execution;

//Browser has limited space in memory;

var makeEggs = function (style, n) {
    // Variable modified based on the style chosen in the arguments
    var completedEgg;

    // Base condition if the egg is not going to be boiled
    if (style !== "boiled") {
        
        var crackedEggs = crackEggs(n);
        if (style !== "scrambled") {
            completedEgg = fryEgg(crackedEggs, style);
        } else {
            var preppedEggs = whipEggs(crackedEggs)
            completedEgg = fryEgg(preppedEggs)
        }
    }
    //... other procedures here
    return completedEgg;
}

makeEggs('scrambled', 3);
makeBacon('crispy', 2)