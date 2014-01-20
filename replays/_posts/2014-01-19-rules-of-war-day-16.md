---
layout: post
title: Rules of War Day 16
tags: replay
replay: rules-of-war-16
---
In this livestream, we make it possible to save and load maps from JSON files.
We create a module for handling the saving of user data to their home directory,
and also make a widget that will be super useful when it comes to editing the
rules information!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Hooray! It is day 16!

    Today, I'm planning on working more on the editor. I need to make some new
    widgets to allow you to enter custom text strings (to name units and such).
    I also need to make it possible to load maps from files and such. Once again,
    this requires the widget for text strings (so that we can pick a filename).

    So first goal, save an edited map to a file.

    On a side note, I'm still not happy about the location of "teams" in the
    rules data JSON structure. I feel like that information should be outside.
    Like, the overall JSON structure should be 

    { grid
      rules
      players
      history }

    The "teams" built into the grid are simply the parents of the units. But the
    players are a level of abstraction on top of them. Ideally, each of the
    elements should be storable on their own (rules separate from grid). But eh,
    I dunno. I also need better error detection (like, when you encounter a unit
    type that the rules doesn't say exists, just don't load it). BUT YEAH WE 
    SHOULD TALK LESS AND CODE MORE.

    So first things first, completely un-controversial save the map to a file.

    Hmm...

    There is kind of a challenge here, actually.

    What folder should the file be saved to? Should it be saved in the
    rules-of-war folder? Or in the home directory? I think home directory.
    I wonder if there is a way to get the home directory in a platform independent
    way.

    Haha. You can't see it, but it worked perfectly. :D I need to support a way
    to name maps differently. I also need to add some functions for accessing a
    default data directory.

    Well that's irritating. Apparently curses will not attempt to render a unicode
    string... only a... string string.

    It's going to add a lot of computations to do that conversion in the draw
    method every time. I already call 'draw' too much.

    So these errors come from the fact that JSON doesn't know the difference betwen
    a tuple and a list, so my code that checks for tuples will fail when getting
    the JSON generated lists. So I had to just add a check for either rather than
    only allowing tuples (just like the curses addch nonsense).

    Anyway, now we have a default map that we use instead of hardcoding that entire
    dictionary at the beginning! It looks quite fantastic as well! It's a bit on
    the bloated side, but that's fine by me. I'm quite pleased by this setup.

    In fact, I've even removed the grid-like notion from the grid. Tiles just float
    in space and don't have to be part of a grid with a defined width or height!
    Fun!


    Anyway, that was a very productive time! It always feels like I don't get a
    lot done in these two hour sessions, but when you actually take the time to
    look at it all, I get quite a bit done! Especially when you look at it over
    the course of the entire time I've been working. 16 days now. January has been
    a good month for game development.

    So we should think about next steps. I don't believe I'll be doing any
    programming for the rest of the night.



    Today, off camera, I was profiling the code to see why it uses up the entire
    CPU when the game is going on, and I figured it out. Originally, I thought
    that curses and SDL were not optimizing their drawing, but they were actually
    not taking up any energy at all. I turned off the graphics and still had a
    huge CPU usage. Then I found out - every frame, I change every tile in the
    terminal... some more than once. For example, in the camera, I replace the
    entire screen with empty tiles, then draw the actual tiles on top of those!
    This is terribly wasteful. When I made it so that I only ever draw when I
    have keyboard input, CPU usage went down dramatically.

    This means that in the future, I need to think of a system where widgets
    are only drawn if they have changed. In theory, this is easy, but there are
    some non-trivial challenges. Like, for the rulebooks and buffers, you just
    draw when something new is written or the user scrolls. Easy. However, the
    camera has to be redrawn whenever units have animations cycling, and there
    is no easy way to identify that in a game-independent way (because animation
    is defined by the units).

    I feel like the best solution would be to add animation support to the graphics
    module. That way, the entire graphics module knows the best time to redraw.
    If a unit wanted to be animated, it would, instead of drawing its tiles,
    register its animation as a "sprite" of sorts. In fact, registering sprites
    instead of actually "drawing" may be the best way to go about graphics. It
    seems a little weird to think about sprites in a text-based game, but this
    would help optimize graphics quite substantially, as well as removing low-level
    code from the objects (since we still use very low-level code when it comes
    to drawing things like our terrain and units).

    This is low priority right now, so no big deal.


    The next obvious thing to work on is rules editing. The goal for this system
    is to be able to create new units and change unit properties in the map editor.
    I feel like I need a fancier edit widget, since if the user has to enter a
    seperate edit dialog for every single unit, that would get really irritating
    really quickly. I'm thinking of doing something where there's an "editor" that
    allows you to select different fields, filling in values, and then press
    enter to save everything. Use up and down to change fields, and then enter
    new values. There could be different kinds... boolean, integer, and string.
    Either way, that's a whole project, but worth thinking about. It's probably
    not just a great way to edit objects, but a great way to set options for a game
    in the general case. Pressing enter will yield the dictionary of all values.

    In that case, I feel like I need to stop making such special case menus.
    I've already added one special case to the grid controller. Furthermore,
    since the JSON files are just JSON files, more experienced users can edit
    them in their own editors (though that does kind of defeat the purpose of
    trying to lower the barrier!)



    Then after that, we need to create the main menu. Make it possible to choose
    maps to play on, select the players and configure the game.



    OK. In the time I have left, I'm going to fancy up the editor I made. Make it
    more abstract (oh no!). OK. In the meantime, that should suffice. It's
    useful both on its own and in the future. We're going to commit and call it
    a night!

