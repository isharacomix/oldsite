---
layout: post
title: Rules of War Day 18
tags: replay
replay: rules-of-war-18
---
In this livestream, we do some miscellaneous rule additions to the game. Units
can now be recovered both by sitting on the correct friendly properties as well
as by joining with other units. Units can also be loaded and unloaded onto units
with carrying capabilities, and capturing the enemy HQ kicks them out of the
game.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Here we are again! Day 18! Boy, it's cold here in North Carolina.

    Sorry I missed yesterday! I was presenting my streaming system at the Linux
    Users Group meeting! It was a lot of fun showing off my infrastructure!

    Gimme a minute to get some stuff organized and we'll get started.

    OK. Now, a warning... i might not be streaming this weekend since this weekend
    is the Global Game Jam, and I'll likely be doing something else entirely that
    weekend. So we'll see what we can do up until then. Also, I'm really up to my
    elbows in work, so I'll probably keep my work the next few days light and
    easy on me.

    So with that, let's start. I was originally going to work on the rest of the
    rules editor, but I think instead I'm going to do some engine stuff. I'm a bit
    miffed that the rules.py module is now nearly 1000 lines long. I know the
    editor makes up a substantial bit of that, but I'm not pleased by how huge it
    is. I'll likely need to to work in some refactoring one night. Also, my unit
    tests are failing, and I need to get to the bottom of that!

    So the things I'm going to do tonight! I'm going to set up:

     * When you capture a tile with the 'hq' property, the original owner of that
       tile loses the game. All of their units are destroyed and all of their
       properties are given to the captor. If the current owner of the property is
       not the original property, then nothing happens... it's just like any other
       city.
     * You can recover a unit by leaving it on a property at the end of a turn.
       The city's variables should be responsible for determining how much to
       recover each unit and how much that should cost. I think what I'd like to
       do is "when you recover a unit, you forfeit that city's income". That way
       repairs don't have to be cancelled in weird orders. The problem with making
       it a cost is that you don't get to choose which ones get processed, and I
       don't want there to be any confusion about what the order is.
     * You can also recover units by joining two units together. The HP is set
       equal to min(hp1+hp2,100)
     * You can load units into other units.

    OK! That was pretty tricky, but we got all of the tasks outlined above
    complete! I also brought our tests back up to passing! I think I cut some
    corners there at the end when it came to loading and unloading units. For
    example, I don't check if the unit is still in the carry list when I'm in the
    unload drop state, but I think it's better than an exception is thrown than
    something 'sane' happening (since it points to a bigger bug). I should trust
    preconditions a bit more than I do, but hey - this has been a great learning
    experience. I've also learned that trying to repeat experiments by hand is
    very tiring. The interface is not the nicest, meaning that one day, I'm going
    to want to incorporate some kind of mouse controls in the SDL mode.

    But that's for another day. We had a very successful two hours. Let's commit
    and go to bed.

