---
layout: post
title: Open Tactics Day 4
tags: replay
replay: open-tactics-day-4
---
In this livestream, we were able to add some basic combat functionality to the
system! Unfortunately, the engine is really cluttered, meaning we really need to
figure out how we want to get all of the moving parts working together. The next
livestream will have to be some boring refactoring while we figure out what
responsibilities we want the various classes to have, especially when it comes
to rendering to the screen.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    *yawn*

    I just woke up from a nap, so I'm a bit slow thinking right now. went and
    had a big outing with friends and all, but would still like to keep my
    momentum up.

    so i learned something from my brother. apparently the solution to working
    with twitch was to use the upgraded version of ffmpeg.

    yeah, that was it. i'm a little frustrated too. instead of going and setting
    up a whole new way of streaming directly to my website, I could have just
    added one little thing. *shrugs*

    but this doesn't bother me for a number of reasons. firstly, i didn't have much
    of a following on twitch, and game developers whose games don't exist in major
    databases can't be found by the average user. meaning that I have to do all
    the marketing myself...twitch won't help me.

    the only thing i lose is automatic reminders to people who care about watching
    my videos, but i can just as easily write custom announcements to twitter
    myself without having to rely on automatic tweet pushing. Actually, the other
    thing I lose that I wish I had was the ability to broadcast voice, which would
    be TREMENDOUSLY helpful, despite the fact that I can't talk worth anything.

    So with all of that out of the way, where are we going today?


    Today was a fun day! I posted a screenshot of my game on reddit's
    /r/screenshotsaturday. I haven't actually looked at any feedback yet since
    I was out and about, but I really enjoy the idea of having weekly mile
    markers to publicize and stay motivated about my game. My next goal would be
    to have a playable prototype by January 10th for FEEDBACK FRIDAY, which is
    where indie devs all share prototypes to give and receive feedback. I saw a
    lot of super inspiring games today, and look forward to getting some feedback,
    especially on things like the interface.

    You see, a game like this has a lot of stuff to display. HP, whether or not
    a unit has moved, it's range, etc, etc. It's overwhelming. So I really need
    to make sure that I'm only displaying what needs to be displayed. Getting
    that right is an art. It's also difficult to organize all of the graphical
    widgets in a way such that nothing knows too much about the world. It is
    truly a challenge.

    In fact, I think it would be highly intelligent to change the way I do units,
    where instead of storing units in cells, I give units position values, that
    way units can move themselves (even though they can't check collisions).
    HEY I HAVE AN IDEA LET'S STOP TYPING AND START PROGRAMMING!




       GOALS FOR TODAY
       * Make it so players take turns.
       * Maybe implement basic attacking.

    ANOTHER thing that bothers me is how the grid.py module is getting so bloated.
    some of its functionality needs to be moved to something else. D:

    The responsibility of which class draws what is always such a hard problem. :(

    If I hard-code too much, it's harder to fix later. If I think too much about
    overengineering it, nothing gets done.

    The natural choice for what should be in charge is the viewport I've been
    working on. It should draw more than just the world map. It should also draw,
    say, who's turn it is, and such. Unless that should be governed by something
    above it - but that wouldn't make much sense. Essentially this view knows
    everything about the game and should be the one to do everything. It should
    always be drawn at 0,0. This is my problem, I overthink things. In fact, the
    only widgets that need to exist are dialog boxes, buffers, and menus. What
    other widgets could we possibly need? :/

    GAAAAH.

    Let's do attacking. That doesn't require any thought.

      (another thing I'm thinking about, maybe it would be better not to draw
       units that have moved as gray. maybe it would be better to highlight them
       instead and have units that can STILL MOVE as inverted color - that would
       draw more attention to them, since they are kind of dull by themselves...)


    OK. Let's do attacking. Basically I want attacking to function as a percentage
    of efficiency. All units have 100% efficiency at first. When they attack, they
    have a base damage. Let's say the base damage for @ vs @ is 30%. Now, this
    means that when one unit attacks, it will do the base damage * its efficiency.

    @ vs @ at full HP
                      100  @       @ 100
                      100  @ -30-> @ 70
                       79  @ <-21- @ 70

    The first @ does all 30 damage. The second @ is at 70% efficiency, so only
    does 30*.7=21 damage.


    the problem is that because units don't know the world they are on, they
    don't know if they are in range to attack. :/

    therefore, I need to ask the grid if the unit is capable of launching an
    attack. blaraarararrarrarg


    another problem is that when you select the square, the unit hasn't moved
    yet, so even if I ask the world "hey can this unit attack", it wouldn't know
    until the unit actually makes the move. there's gotta be a way to do like
    a chain of potential moves that can be "undone".

    OK. as we can see, attacking works and units can even die after a while!

    now it's time to add something fun. :)


    OK, since it's taking a while, I'm just gonna say what it is. I want to add
    a cute little animation for combat. Basically, I want to display two boxes
    that start at the HP of the unit, then decrease down to the current levels.

    Adding an animation framework to the system will not be easy.


    That works nicely. The code is horrible, but the effect is passable. It needs
    some cleanup, but we've got a whole month ahead of us.

    Time to call it a night. Let's commit to github, cut the recording, and go to
    bed.

