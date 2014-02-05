---
layout: post
title: Rules of War Day 23
tags: replay
replay: rules-of-war-23
---
In this livestream, we finish coding the attack portion of the state machine,
which means that most of the state machine is finished for the gameplay portion
of RoW (we still need to implement the editor). We rewrite some of the JSON
parsing, fix bugs, and restructure the code a bit.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Day 23 of RoW development. I've got some sticky notes on the wall behind my
    monitor telling me what I need to be doing. Right now, I think I need to
    finish the state machine... at least for gameplay mode, and make sure that
    I have my JSON format well-written so that I can export maps as well.

    We last stopped at attacking, but I think I want to write loading/unloading
    first. We tested joining and saw that in theory it works, though we still
    don't have unity HP displayed on the screen. The info method of the action
    objects will return a string of what needs to be displayed to the viewer,
    and one such thing is a tooltip at the bottom left that explains what's
    going on.


    +--------+
    |        |
    |        |
    +--------+
    Press enter to move unit (or something like that)

    It's a pretty cool idea I think.

    I also need to make sure history is being saved correctly, but that's
    less of a priority.

    OK. Let's make it possible to load/unload units.



    And that's what I wanted to accomplish today! As we can see, it took longer
    than I expected it to as far as fixing up attacking and dropping, but not only
    did I finish that part, I also made a new form of drawing sprites! Hooray!

    All righty then. With that, I think I'm ready to call it a night. There are
    some interesting implications when it comes to rendering though. I wonder why
    "null" sprites don't propagate their colors down the stack? That's frustrating.

    Ah, wait. I understand why. That's irritating. Don't mind me. Just thinking
    to myself. next time, I think we should try to get some popups and UI stuff
    on the screen so we can see what's going on.


