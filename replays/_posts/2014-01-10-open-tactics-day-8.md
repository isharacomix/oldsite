---
layout: post
title: Open Tactics Day 8
tags: replay
replay: open-tactics-day-8
---
In this livestream, we take what we've got and push object-oriented programming
to the limit! We further dissociate the rules from the grid, and create a
template for rules files to determine their own definitions of units, terrain,
and teams.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Hello and welcome to DAY 8 of Open Tactics Development! I'm a little miffed
    since I ended up missing last night. Tuesdays and Thursdays are my social
    nights, so I end up staying out later. :/

    Anyway, we're here now and ready for a full day of ... well, a full two hours
    of hacking!

    Let's review all we've accomplished so far (man, my typing is bad today)

     * Created the engine. Can move units around and attack.
     * Made it so that drawing is handled with a neat-o-widget system.
     * Seperated out the rules from the user interface so that we have a
       completely game-agnostic view of the board.

    So now we should probably list the possible things we can still do.

     * Create the unit system that lists unit attack power, movement ranges,
       and capabilities.
     * (or create terrain and stuff)

    Hmm... that's probably the best thing to work on. It's kind of a big thing,
    so it's not hard to believe that I'm a little intimidated to give it a shot.
    But hey! That's what game development is all about: getting off your butt and
    actually getting things done. Blaaaaaargh.

    So first of all, let's think about our units.

          i: Infantry, light atk, light def, cheap to produce
          T: Tank
          M: Medium Tank
          H: Heavy Tank
          L: Artillery

    That's probably a good breakdown of units for now. So we need to think...
    what does a unit have? Well, of course, there's the damage matrix. Every
    unit has a base damage that it can do to other units.

                   i   T   M   H   L
               i  50  10   5   1  10
               T  70  40  20  10  40
     Attacker  M  90  70  40  20  70
               H 100  90  60  30 100
               L  70  40  20  10  40

    The idea is that there is no reason for a formula, right? Well, we could try
    to make a formula, but I feel like a matrix is just easier to implement and
    for players to understand. As we can see, there's a kind of "feel" for how
    various things inflict damage. Also, it makes storing the data and looking it
    up pretty trivial.

    One thing I'm conflicted about is how much game logic to put into the core and
    how much to leave to rules authors. As we know, the point of this project is
    to be a pretty open system for supporting these kinds of games. By putting
    nearly everything about how the game plays out in the rules, we make the
    system about as abstract and general purpose as it can be. However, some things
    are "common", such as calculating range and whatnot. In that case, it seems
    like a waste to include them in rules code when to be reused, they have to be
    essentially copied. D:

    Maybe I can provide some default functionality to be overwritten by other
    rules authors.

    Of course, none of that matters now. Thinking about the future is important,
    but not when it gets in the way of rapid prototyping. Today we are implementing
    multiple units and the damage matrix.

    Haha! I wasn't expecting the HP to go negative! :D No kill like overkill. :P

    So that bug I found was an interesting one. You see, when the unit has 91 or
    more HP, then it should essentially be counted as 10 HP. But when it had 90,
    the formula ended up trying to make it display 10 (90//10 = 9 + 1 =10) in the
    cell. It can only display one character, though.

    I need to make it so that it doesn't go negative.



    So what I've just done is moved the very rule-specific code about movement
    ranges out of the grid. I also added two functions that actually belong in
    an auxilliary math library called "range" and "dist". The "range" will be
    used for the attack range (which does not depend on anything rule specific
    unless we implement "solid surfaces"). So, the last thing now is we have to
    set up artillery, meaning that we need to add attack ranges to our units.
    In games like advance wars, the way that ranged fire weapons are balanced is
    by dividing attacking into two types of attacks... direct and indirect.
    The way I'm going to do it is if the unit has the variable "indirect", it can
    not fire if it has moved. A unit can always counter so long as its attacker is
    in its range (maybe?)

    OK, well, everything has a range of one and artillery has to be next to a
    target to fire but IT CANT FIRE WHEN IT MOVES (joke unit)

    So, I just realized that my code is terribly unpythonic. This means that I
    should really be thinking about how I can store some of this matrix information
    in the units when they are created. One option is to have a method called
    "load information" where when I create a unit, I pass it to the rules to
    populate information from its rules file.

    The other option is to actually have the rules file create units instead of
    creating them in the grid. This makes sense. In fact, this would allow me to
    override the default unit (and terrain) classes and take them out of the grid.
    I just provide the basic interface that it expects all units and terrain to
    have. In fact, this allows me

    to

    customize the animations.




    OH MY GOSH I FIGURED IT OUT WOW




    hafjkhwewoiuf2faifijie this is great

    So what I'll do... the problem is that I don't want to store the rules in
    the grid. I could pass the rules to the grid when its created, or I could
    have the rules create the grid, since the rules are responsible for the
    grid in the first place. I just don't want a circular definition.



    OK. Things have started getting weird. Before I commit and shut down for the
    night, let me explain what on earth I'm up to.

    So, one problem with the code right now is that it's not very object oriented.
    Remember, I want to make sure that I don't encode too much of the game's
    functionality in the grid, because that's supposed to be independent of the
    rules. The grid doesn't care what units are doing... that's the game's
    problem.

    So I had an idea. What if I actually define all of the units, terrains, etc
    in the rules module instead of in the grid! I can provide some high-level
    requirements that every unit/terrain/whatever is expected to meet, but for
    the most part, all of the variables are completely unneeded. For example,
    there is no more reference to HP anywhere in grid, so that is completely
    defined by the rules... NOT the grid!

    This means that things like fuel, hp, whatever... all of that is completely
    up to the rule system, leaving the grid highly abstract and completely
    overengineered!

    For the most part, the only thing that absolutely is enforced by the game is
    that a team moves all of its units at once, and that the team must exist.
    Any elements of the team (name, color, what have you) are up to the rules to
    either sit with the default or override. This is getting complicated! D:

    Hmm. OK. That's enough I think.

    Tomorrow we'll work on further defining this relationship between the grid and
    the rules, making the abstract classes more abstract to the point where there
    are as few assumptions as to how units work as possible. One thing I'm worried
    about is the idea of "carrying" units (like an APC). I might have to enforce
    some structure such as a "carrying" variable. But it'll be well defined in
    the protocol, and I'll provide a reference implementation of how a basic rules
    system has to look. Maybe even an automated compliance checker.

    Not super thrilled that all of the rule information is in one huge python file.

    Well, not that huge at the moment, but I still haven't included terrain info
    or anything.

    All right! Time to commit what we've got and call it a night!

