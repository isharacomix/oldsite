---
layout: post
title: Open Tactics Day 12
tags: replay
replay: open-tactics-day-12
---
In this livestream, we overcome allergies with a third day in a row of nonstop
coding! Units can now be made at certain tiles, and ranged combat works. We also
made a cool way of ending the game - the game can only end after you end your
turn, so you get a last chance to come up with a better strategy. :D

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Blarg. I'm feeling kind of meh today. Here's hoping I can pull together some
    updates for the game in spite of it. (first, need to start some music)

    So, yesterday, we got a lot of work done, implementing features for terrain
    and units. Today, what I'd like to do is at least add indirect/ranged units
    to the game and also I'd like to add unit production. While the basic ideas
    for production are Garage (for vehicles), Shipyard (for navy), and Airfield
    (for air force), the idea is that each terrain that *can* build things is
    able to build things from a list of units. I'm not sure if I want to put the
    prices on the terrain or on the units, though. I feel like putting prices on
    terrain would be really clunky, since it also doesn't allow me to evaluate
    the value of damage in monetary terms (which I think is important).

    So let's do that first!

    Done. Once again, another part of the codebase gets done because I just go and
    do it. I'm not thrilled about manually looking up the cost, though, so I think
    I'm going to make the cost part of the shop definition. Or maybe I won't. I
    dunno. Luckily, this file doesn't have to be abstract or generalizable. Besides
    it's generalizable as it is! It can work for any other terrain that builds
    stuff!

    What's next? Indirect.

    All right - now I run a set of steps to calculate if a unit is able to counter.
    That code should probably be locked away in the unit... but there are so many
    outside elements. Meh. I'll deal with it later. No need to focus on perfection
    that's unnattainable anyway.

    So where are we? We've been coding for about an hour and we now have unit
    production and indirect attacks. There are other things we could focus on...
    I'd rather not focus on coding different unit types, since (after all) that's
    all codable. But maybe we can focus on win conditions.

    A team wins when the only teams that are still active are its allies.

    Goodness, what all did we do now?

     * Units can now be produced at tiles with the "build" property
     * Ranged combat works. Only units capable of countering will counter.
     * When the last unit in a team is destroyed, that team is marked "inactive"
     * The game ends when a turn ends and only allied teams are left.

    Not bad, if I do say so myself. Another full night of programming. I'm looking
    forward to maybe doing something for Feedback Friday if I can get a level
    editor done. In fact, I think that's what needs to happen next - map editing.

    All right. Commit and bed.


