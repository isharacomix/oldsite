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

    Day 17 begins NOW. We've made tremendous progress in recent days. I'm still
    struggling over how to reconcile this notion of players vs teams and what
    makes them different. I feel like I've got it close to right, and I think it's
    probably better to do it the ugly but right way rather than the pretty wrong
    way.

    So let's do it. We're going to change the notion of teams and players where
    teams are part of the map (default names, etc), but players control the teams
    and add expected behavior on top of them. I'll leave it as a task for rules to
    do until I find a better way, but the structure must be right.

    Much better! So now, the "players" structure overrides the teams, but only
    teams that exist! When starting a new game, this is what will set up how the
    game advances, and also where control will come from (user, AI, internet).

    This is encouraging. We can extend this in the future. I've also been thinking
    of a way of improving graphics. What I can do is make it so that the animation
    of the units is controlled in part by the timer, and the animation is only
    updated during the grid's animation tick. This will likely improve rendering.
    I wonder how that would look.

    Hmm... I suppose that's not really as big a deal as the widget placement issue.
    There's no reason for widgets to be running off the edge of the screen. This
    is especially a problem for things like menus. Right now, it's 100% possible
    for menus and alerts to render out of view because I don't have a good way of
    telling the difference between absolutes and stuff. Perhaps I could, do some
    stuff by default.

    The engine tells the controller some suggestions about where to render things.

    Right now, the only things that get rendered are global alerts, menus, and
    damage. Hmm... global alerts. Is the camera a good point of reference?

    OK. That's looking good. The 24-tile limit may prove to be a problem when
    trying to edit very large sets of rules. One thing I've been holding back on
    are the actual rules. There are a lot of things that need to be edited when
    editing rules:

      Unit
      Name
      Description (how will THAT work)
      Damage to ALL other units
      Movement across ALL terrain
      Properties

    And for terrain

      Name
      Description
      Defensive Cover
      What units it can produce at what price
      Properties

    The problem is that this is going to create a whole bunch of boring states.
    I suppose I could create one state called "rule edit"... and then it would
    utilize a bunch of switch cases in ONE state. Besides, I don't have to worry
    *as much* about illegal entries since if you make a bad JSON file, well, you
    could have done that anyway.

    I think the goal is to definitely try to make a good user experience for this
    particular part of the game, but don't let it eat up too much time. If it
    involves a ridiculously convoluted state machine, it might be better off if we
    rethink our editor. We can even always make our editor a separate program
    entirely or something. The menu-based interaction is guaranteed to be slow.

    So we need to think about flow...

    Edit Rules...
       Create Unit
       Delete Unit
       Create Terrain
       Delete Terrain
       Edit Unit
       Edit Terrain

    Or...
       Edit Unit
         Infantry    >  Damage
         Artillery      Movement
         Create New     Properties
                        Delete Unit

    The "repeat last step" command is ridiculously helpful.


    All right. I think I've gotten started well enough. I need to get to bed
    since school and work start back up tomorrow. Let's commit and revisit this
    tomorrow night. I'm actually giving a presentation on my livestreaming setup
    and this game tomorrow, so that should be great fun!


