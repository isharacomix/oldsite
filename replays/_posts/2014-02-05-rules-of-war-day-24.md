---
layout: post
title: Rules of War Day 24
tags: replay
replay: rules-of-war-24
---
In this livestream, we work on the UI, bringing back popups and HP animation in
battles! We struggle a bit with the low-level coding being involved with the
pop-ups, realizing that despite making great improvements in the code base, we
still have a long way to go as far as proper object-oriented design is concerned.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    It's Day 24 and we've got a lot to do! There's a lot of UI missing from the
    game, like popups saying who's turn it is, who's been killed, and the cute
    little animation I had when combat happened.

    We need to make that happen again, don't we!

    I think I need to give sprites an "update" hook. Normally, sprites don't
    change. Some, however, are animated (like the battle animation). So let's
    see what we can do.

    The way I want this to work is I want the grid to give the session all of the
    popup, notification-style sprites that need to be drawn. Maybe I can hide the
    update in the "render" method. So let's make a Notification widget that
    actually extends Sprite, and then make an extension of the notification widget
    that is used for the damage animation. We also need to start drawing our menus
    in better places than 0,0. :)


    So, I'm getting a little depressed at how hardcoded most of the sprite stuff
    is. It's not great that I actually have to encode high-level things like
    notifications with low-level things like foreground color and x,y coords.
    Hopefully when I start with the "real fancy graphics" mode, this will fix
    itself, but that will be a long way out if it ever happens.

    Last thing I really need to do is handle centering popups. It's OK if menus
    run off the edge of the screen for now. The problem is that I just don't have
    a good handle on who should delegate the drawing. After all, since I actually
    put a sprite in with each widget, I can't really get away with not using
    actual coordinates. Plus, the grid itself actually makes these popups as well,
    at least, it does when we change turns. The grid is really the best place to
    put them, I think.

    Blarg. Not a big problem right now. The code is still MUCH cleaner now, so
    when and if I decide to refactor this part, it won't be that much of a problem.
    But still, I feel like the grid should just give the widget to the session,
    and the session should decide where it wants the widget to go. There's no
    reason to encode things as low-level as x,y coords on any of this. We don't
    do it for the menu, no reason to do it for the notifications!


    All right. That makes me feel a little better. It still seems like these
    notifications need to be made more opaque than they currently are. I don't
    like how they are still such low-level beasts. There's no way to get around
    it though. Some things just have to control base graphics. Grid, notifications,
    etc. I just wish I could take some of that out of the rules, but the rules
    also need a way to provide information back to the player! There's no getting
    around it.

    Part of why I'm frstrated is that I don't... ugh. Well, when I'm making AI,
    I don't want the AI to have to sort through the stuff designed for humans, but
    I guess I've made it easy enough to ignore. It's just frustrating. Anyway,
    it's still not as bad as it used to be. The sprite rendering system isn't
    perfect, but it's getting there. I'm irritated by this bug with the sibling
    sprites not rendering correctly. Ah. That makes sense. I think I get it. So
    the siblings aren't updating because they don't say WHERE to update!

    All right. That's enough of that for now. I'm calling it a night. Unfortunately
    I don't know if I'll be able to write a quick AI tomorrow night in time for
    Feedback Friday. It was my hope that I'd be able to put together a game that
    would be playable-ish, but I don't have enough time. Maybe next week. I need to
    write some unit tests, make an AI, and make my code a bit more robust.

    On the horizon are some good things. I still like being able to prototype in
    ASCII, and I'm greatly pleased by the sprite system's improved performance.
    I think what I might do is definitely have a mode switch for the "real" game
    where you can go between "textual" representation and "fancy" representation.
    The most important difference between the representations is that it only
    applies to the game grid, since the popups and stuff are no longer bound to
    the 24x80 cell restriction. That's my favorite part about leaving the
    terminal. But all that can wait. Besides, the longer I'm in the terminal,
    the longer I can stream!
