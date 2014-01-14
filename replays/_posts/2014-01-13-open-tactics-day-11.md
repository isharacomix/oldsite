---
layout: post
title: Open Tactics Day 11
tags: replay
replay: open-tactics-day-11
---
In this livestream, we have a second super-productive day in a row! The biggest
update is that tiles and units now load all of their capabilities from the JSON
data file that makes up the rules. Units are now impeded when travelling through
rough terrain and can capture tiles. Capturing mechanics are hard-coded, but
should be offloaded to some formula in the near future.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Welp! It's that time of night again! I don't know if I'll be able to pull off
    another marathon coding session like I did yesterday - we got a whole mess of
    stuff done. I suppose what I'd like to do this time is take it slow, primarily
    with creating terrain and units. As we know, a unit is a unit is a unit, but
    basically all of its elements (attack, def, properties) come from "rules".
    So when the unit is created, we can check the rules and give it the properties
    that we need to, especially since the rules are responsible for creating the
    units.

    On a side note, and speaking of "slow", I'm troubled by the runtime of the
    game. It takes up a lot of CPU, and a Curses game like this shouldn't. I may
    need to find some way to optimize the drawing and rendering, but that's
    something definitely for a later day. Right now, we're going to do more 
    engine stuff since that's a guaranteed way to be productive.

    Well! That worked nicely! I still need to add more units, but right now, the
    rules are being loaded successfully! Time for terrain... and that's done too!

    Wow. That worked out much more easily than I thought it would. All of the
    calculation is in a single space, too, so I don't need to worry about messing
    up the calculations in multiple places.



    Now, it's possible to preview where units can move (even units you've already
    moved!). I am surprised by how much I've accomplished. Maybe I could implement
    factory types of units now? No, I was going to do terrain movement blocking.
    Ugh, I'm not super thrilled about that. I feel like the movement blocking
    should be stored in the unit's information.

    Woo! That was much easier than I thought it'd be, and it makes the maps look
    so much more alive, too!

    And there goes another part of the game. It would be cool to change how some
    tiles get captured. Maybe give units "capture power" instead of hardcoding
    50% of HP, but that's a discussion for another day. Cities should also be
    giving their captors moneys. Done, done, done!


    We are getting so much awesome stuff done tonight! I've been on a roll these
    past two nights! I can't think of anything else to do tonight, so I'm going to
    call it a night. Let's commit and publish the video online! Nobody joined us
    on the stream tonight, but that's ok. It's my own fault for not spreading the
    word more widely.

