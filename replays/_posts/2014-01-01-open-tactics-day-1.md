---
layout: post
title: Open Tactics Day 1
tags: replay
replay: open-tactics-day-1
---
The first day of livestreaming the [Open Tactics](http://github.com/isharacomix/open-tactics)
project. In this livestream, I introduced the project and got used to my new
streaming environment.

I mostly worked on the design document to set the stage for what I'd be
programming. I think it's important to have a philosophy behind what you want
your game to be, since it not only helps keep you focused, it keeps you 
motivated in the sense that your philosophy should be what makes the game
special to you.

As far as programming, I worked on some basic drawing routines. I made a Grid
object to hold the maps that the game would take place on, and added a method
for drawing it. The next few days will probably focus on the interface before
I start working on the engine (units, moving, combat).

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    OK. We are recording and streaming. No audio, unfortunately, so this
    will have to do.

    I'm a little too nervous to share the link to recording with everyone
    though. :( So I'll record by myself a few nights, but the goal is to
    record and stream EVERY NIGHT. Woooooo

    As you can see, I'm using emacs for my editor. This is the editor I'd
    be most comfortable with in a terminal. I actually don't know it very well,
    so this will be a learning experience. What you see here is the "scratch
    buffer". It's basically a place I'll use to type up narrations and whatnot.

    It is currently 22:02 EST.... so we'll be coding at least until midnight,
    maybe longer.



    We are making a game this month. What I want to do is document the entire
    game dev process, from ideas to code. This means that the first task is to
    describe the game in the form of a design document. 


    The folder layout is as such:
       /code/  All python code and stuff will go here.
       /data/  Non-python stuff
       /docs/  Design docs and spec sheets, etc

    The reason for this deliniation(?) will be made clear when we describe
    what the game will be.

    The name of the game will be "open-tactics", at least for now. You can find
    the game project in its entirety on http://github.com/isharacomix/open-tactics.


    Now let's see if i remember how to open a new file.



    OK. So what we're going to be making is a Deterministic Perfect Information
    Tactical Wargame. This is a really long title and has big words, but there
    is a reason for these two attributes, mainly that I want the game to be
    playable without having to rely on randomness or hidden information. While
    these properties are really cool, they add some strain to the system.

    The biggest inspiration for this game engine are games like Advance Wars and
    Battle for Wesnoth. Despite relying on randomness to varying degrees, they
    are mostly defined very strictly by their SYSTEMS OF RULES. I want mastery of
    the rules to be the most important factor in the success or failure of a
    player, not the ability to hide units and confuse the other player.


    So that's what we're going to be doing.


    Now we need a plan. What should we focus on?



    Right now, the game engine has been taken from another game I made for a
    game jam around thanksgiving. Let me quickly demonstrate it...


    THe engine supports terminal graphics (which is why I'm also deving in a
    terminal), and also has a "fake terminal" mode built on pygame for people
    who don't have access to curses (cough , windows).

    Basically the first thing I did was abstract away from the curses details.


    So since we have abstracted away from the low-level graphics stuff, we can
    now focus on game design. Tonight, the first thing I actually want to do is
    implement some graphics routines. Right now, the only way to draw is one
    character at a time. There's no way to, say, print a string to the terminal.
    I don't like that, so I'm going to do something about it.

    (i also need to make the wrapping for these files fit in a terminal. :P)



    OK! That worked! As we can see, we just added some higher-level drawing
    functions. Now we don't have to rely so much on the low-level drawing. It
    should also work in theory for the SDL mode, which I can't stream.




    So, I decided against that.... it's important to think about how you
    want your API to be used... even by you. So I'd rather have routines
    like 'refresh' and 'clear' done by the low-level routine, but have
    things like drawing strings, filling blocks, and even doing animations
    handled by 'draw'.



    OK. So now that that's done, what should we do next?

    Well, let's see.

    In a turn-based game, an important place to start is the MAP. A MAP is where
    a single round of combat takes place. It has all of the units held by each
    team. A map is a grid of terrain where each cell is a terrain and can hold
    one unit.

    Because this game is highly influenced by systems of rules, I don't want
    terrains and such to be particularly modular or customizable. Essentially
    I want a strictly enumerated list of possible terrains (plains, mountians),
    and then have multiple identical copies. Of course, we have to be able to
    store SOME information in the cell, like who owns a factory, or whatever.

    Then there are units. I want units to be defined by the system of rules as
    well... this is hard. But that's what a stream of consciouness is about. 
    Getting your thoughts out so you can organize them later!




     GOAL
      - Create a map object
      - Map object should contain a grid of cells. A cell will just be
        defined right now as a character (., _, !).
      - Create a 'render' function for the map. Make it possible to draw
        the map.
      - Create a map in the game object.
      - Test.

    VICTORY!

    Hopefully you saw what just happened.
     * We created the grid object (had to change the name since map has a special
       meaning in python)
     * We constructed it randomly at first, but then numbered the cells
     * We created a "draw" method! Now we can draw it any time we want
     * We had a bug when we tried to make it possible to draw camera angles.
       Cameras are tricky business. You need to know how the viewport, the
       camera position, and the actual locations of the tiles all intersect.
     * We made it WORK.


    There's something I'm concerned about. Right now, I store our grid as a
    dictionary of coordinates instead of as an array. I wonder if I shouldn't.
    Dictionaries are easy to add to... but our grid should be rigid. In fact,
    perhaps it should just be a tuple... since our map is immutable.

    If you don't understand python, this might not make any sense. Sometimes it's
    hard to think about the best implementation. I like being able to simply use
     grid.get((x,y)) to get a cell. :(


    OK! I decided to make it a list instead of a dictionary, and since it's stored
    in y,x order, I wrote my own function to make it x,y! :D

    I dislike having a function to go through, but it's not THAT much slower.

    Now that we've gotten this far, we should push to github.

    OK. It is currently 23:26, but I'm not quite sleepy yet. I feel like I should
    at least flesh out the design doc a bit more. I'll be very interested in
    seeing how large this recording is. It should be invariably smaller than a
    video recording, but I wonder if it will fit on github. :(


    blarg... it's getting late.



    OK. It's midnight. That was fun. I'll probably hack on the design doc later,
    but we have lots more to do that doesn't depend on those kinds of decisions,
    such as our user interface. We need to set up a cursor that can select units,
    we need menus to select actions, so on, so on.

    The reason I'm fretting over this ruleset stuff is that I don't want to have
    people have to hack the python code just to add a new unit with some fancy
    capabilities. Granted, I can't control that, but it would be nice to have an
    engine support such things without needing the core to be changed.

    Anyway. I'm calling it a day. Gonna push to github then shut down.




