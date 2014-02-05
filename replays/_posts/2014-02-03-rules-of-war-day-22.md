---
layout: post
title: Rules of War Day 22
tags: replay
replay: rules-of-war-22
---
In this livestream, we get back into the game by continuing refactoring! We did
a lot of refactoring off camera, and are just now recording it again. The curses
rendering systems has been completely overhauled, as has the state machine,
which was the focus of tonight's stream. The state machine is now implemented in
a more object-oriented way, which makes it easier to write, read, and maintain.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Hello! It has been a while!

    Today, we come back from a break to bring you day 22 of Rules of War
    development! I have some news to start off with before we kick off the month
    of February.

    As you might remember, I was feeling a bit out of touch with RoW after seeing
    the codebase diminish in quality the way it did. However, I decided to spend
    this entire weekend refactoring it, and it looks SO much nicer. I redid the
    sprite rendering engine... or rather, I MADE a sprite rendering engine, and
    have replaced the rules.py state machine with a bunch of objects that tell
    the game what is going on. :)

    If you want to see the code, check Github in the master branch. I've frozen
    the prototype in time so that we can see how much we grow in the next month.
    There's too much to show in the stream, but I can at least explain it.

    The way it works now is that instead of directly rendering to the screen, you
    create "sprites", which behave like hardware sprites. Basically, whenever you
    want to draw something, you create a sprite and call its render method. The
    thing that makes this cool is that sprites can have subsprites, and those
    subsprites can have subsprites. Whenever you call 'render', you only ever
    update the cells of a sprite that have changed either because it has been
    drawn over or because a subsprite has moved.

    Now, this makes some things more difficult, but it makes rendering 100% more
    efficient. The CPU graph is barely a blip on the radar, so I'm pleased with
    this approach.

    Now, since we decided to refactor, I have to make a lot of stuff over again
    from scratch using my new engine. This means that all the stuff we did on
    rules.py is basically gone. I set up "movement" again, but that's just the
    start. I also have to make menus again, rulebooks, the map editor (joy) and
    some other stuff. However, it's OK, since we did it before, and now we can
    do it better!

    So today's task will be to redo all of the actions that we did before. Moving,
    waiting, loading, unloading, capturing, attacking, and building. We'll need
    to start by making a menu system so we can get options from the player. I
    already have coordinate loading working, so this should be a quick job. I'd
    like to make it possible to play against a random-legal-move AI before this
    feedback friday, since other people just don't want to try to play against
    themselves. I also need to incorporate a debug mode that allows changing
    variables at runtime (so I can take over the AI or something).

    Anyway, that's enough of that. LETS CODE.

    So as you can see, making a menu looks a lot different. It looks much more high
    level than before. And the rendering is ridiculously faster. I'm a little
    worried by the dead reckoning that occurs when making the menu, since we seem
    to be trusting that when enter is pressed, the action is guaranteed to accept
    the input. That should be the case, of course, so if it raises an exception,
    all is well.


    OK, it's 11 past midnight. Let's recap!

    Today, I made a new menu widget and started rebuilding the state machine. We
    can now move around, wait, end our turn, capture things, load units and join
    units to recover and refuel. We fixed some bugs hidden around the legacy code
    and will continue this tomorrow.

    That's enough for tonight. Felt good to get back into the stream! Commit and
    head to sleep!

