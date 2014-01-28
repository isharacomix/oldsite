---
layout: post
title: Rules of War Day 20
tags: replay
replay: rules-of-war-20
---
In this livestream, we return from writing a conference paper to do a really
boring thing: finish the rule editor. We don't even attempt to do anything clever
this time, since making menu flowcharts is not fun at all. Instead, we just add
some massive states to the 1400-line Rules.py state machine.

We've decided that after getting the human-vs-human play mode finished, we'll
consider this as January's [One Game a Month](http://onegameamonth.com). For
February, we'll be doing a more traditional Roguelike, albeit with some elements
from turn-based strategy that we just can't let go.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    WELL. It has been a while, hasn't it? This past weekend was the global game
    jam, which - in my case - was the global PAPER jam! I had to write a paper
    for the 2014 conference on intelligent tutoring systems, and that took up
    my entire weekend. NO TIME FOR FUN NOPE.

    So now, I'm spending this week finishing the first sprint of Rules of War!
    We've come a long way since day 1. We got used to streaming, then we got used
    to making a game! There were definitely some bumps in the road to get here,
    and for some reason I'm having a hard time typing!

    That aside, it's been fun. Now that the month is over, I want to reflect on
    some of the things I've learned (that I should have known already).

    1. It's very enticing to want to make a game as 100% abstract as possible, but
    there's really no call for that. There was no reason for me to make my camera
    and grid compatible with any game that anyone MIGHT turn my game into. I don't
    have to do that much work for other people. I should make my system
    object-oriented as much as possible for my own benefit, but there's no reason
    for that hypothetical nonsense.

    2. Trying to enforce low-redundancy I think really is causing me a lot of
    problems. There's this principle in database systems called the "Update
    Anomaly". Let's say you have a character that has an X,Y position, and that
    character is also referenced by the tile object that lives at that X,Y pos.
    In theory, this data is redundant: both items shouldn't need both parts of
    data. In the worst case, I might update one object's X,Y position and forget
    to change the other's. That would be bad.

    In Database systems, it's not a big deal to avoid that because a lot of really
    smart people made it relatively quick to JOIN rows together to access this
    information. In Python, trying to keep as few references as possible has made
    my life pretty miserable. I use convoluted methods to access elements, and 
    most of that is caused by the aforementioned issue of trying to make things
    too generalizable. I was already biting off a lot when I said "HEY! Let's let
    make players make their own maps AND rules!" Allowing them to edit the python
    too seems like a really bad idea.

    So with that in mind, I've been working on RoW enough that I think it is time
    to take a break. I would like to flex my muscles on a different kind of game
    for a while, so for February, I think I'll devote my time to a new game, and
    most likely a one-player roguelike in the more traditional sense. It'll still
    probably have some tactical elements, but I think by relaxing the restrictions
    and making the game one-player, I can add some extra fun. Also, by making the
    interface more aware of the game mechanics, I think I can do some great stuff.

    So that's that! Let's finish up RoW and take a break!

    Oh, one last thing - I had originally considered the idea of making a version
    of RoW with "real" graphics, but I think I won't do that. The problem with
    handling "real" graphics is that you end up in a sadness situation where you
    have to allow people to make their own units, but you either require them to
    make the sprites or you make them use ugly sprites next to your professional
    ones. In ASCII, everyone is equal! You just pick a letter and that's you! I've
    been very inspired by games like Cogmind that really push "ASCII" graphics to
    the next level.

    Oh, while I'm thinking about it, I also think I need to think about
    internationalization. Supposedly curses supports wide characters, but I think
    what I'd likely do is only support ASCII in curses, and then support other
    charsets using a fancier Pygame wrapper. I dunno. ASCII is nice for debugging
    and I prefer it in the terminal, but to each his own.


    SO NOW WHAT WILL WE PROGRAM!
     * We need to finish the main menu
     * We need to finish the rules editor

    As much as I hate to admit it, I think the rules editor would be an easier,
    if less fun job. Then all that's left is starting a game. So I'm going to work
    on that. I'm going to try to use the same technique I used for unloading units
    where I'm able to simply stay in the same state in the state machine and roll
    around in circles rather than creating a new state for each page.

    SO LETS DO THIS THING.

    Sometimes I regret not being on Twitch where I can comment on life while I
    code, but I would get distracted and mumble anyway, so we're not missing much.


    Haha. Man, that was a lot more work than it should have been. As you can see,
    this is why I'm starting to lose steam on RoW. The code has gotten so ugly.
    Between work, I just haven't had time to clean it up, and state machines are
    essentially the absolute worst when it comes to elegance and efficiency.
    If only there were clean ways to make state machines... or ways for me to
    encode them without these ridiculous switches.

    Anyway, I'm going to quit whining. I imagine that if people try to edit the
    rules, they'll likely encounter problems or even crashes, but I'm not going
    to let that stop me.

    Hmm... actually, I don't think I need to purge old units from the lists... eh,
    yes I do.



    Welp, that was not fun at all! I've already done all the fun parts of making
    this game, I suppose. Having to create these ugly state machines, especially
    with the menu flow, is not at all what I'd consider a fun time. The state
    machine for the rest of it, keeping track of actions and stuff? That was
    actually fun. But what I'm doing now? Not at all.

    But hey, things are winding down, and that's to be expected. Now the editor
    is, for the most part, finished (or at least feature complete, not at all
    polished). Next step is to make it so that you can play games against other
    players, which involves some work on the main menu. After that, I'll write up
    the manual and stuff that teaches you how to play and then that's that for
    January!

    We're almost there! Until then, let's commit and call it a night.

