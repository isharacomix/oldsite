---
layout: post
title: Rules of War Day 19
tags: replay
replay: rules-of-war-19
---
In this livestream, I start out not knowing what to do but then come up with an
idea to work on the main menu! We make it possible to see all of the levels
currently available and open them up in the level editor. We decided to do that
instead of working on the rules editor because that job is sad and boring.

Once we finish the rule editor and main menu, the game should be in a playable
state!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    It's day 19, and for once I'm at a loss for what to work on! I'm actually
    quite restless since tomorrow is the beginning of the global game jam!
    I'm the social media wizard apparently. Woohoo for me! I'll probably be
    streaming my game dev for this event on Twitch.tv. (sorry if I'm a bit
    scattered, still responding to emails)

    Anyway. Let's see. The first thing I want to do is add a property that makes
    units exempt from terrain cover (aka flying units).

    The arbitrary fact that defensive cover is in multiples of 10% bugs me. I
    don't like arbitrariness, as you can imagine. But right now it isn't a big
    deal. I suppose the only thing that needs to be done that I can immediately
    think of is the rule editor for units. The problem is that you'll never have
    as much flexibility with the in-game rule-editor as you will with pure JSON
    editing. Perhaps that doesn't have to be a bad thing.

    Another thing I'd like to bring in is the idea of "ruined" terrain, like,
    a city gets hit and turns into ruins, or a plains turns into wastelands.
    The problem is that the rule from one terrain to the other, both terrain must
    be defined. We need some better error checking besides "indexError" crashes
    the game. Like, ways to make sure that all of the units referenced in the
    JSON properties are all defined as units in the rules... terrains too.

    I suppose one thing I can do is do the team adding.


    Accomplishments so far:
     * Possible to add new teams and change team order in map editor.
     * Can only save maps where either units are deployed or there is an HQ for
       each team.
     * Added "nocover" property for units.

    uggggh i don't wanna do the rule editooooor. ;_;

    After working on the rule editor, the next thing to do is the main menu where
    you select your maps and pick your teams. Actually, once I get that done and
    the rule editor done, we'll have ourselves a first releasable version of the
    game. It won't have much glitz, but it'll be "done" and "playable" for all
    intents and purposes. We can make maps and play against other humans locally.
    That should be highly enjoyable.

    You know what? Let's work on that part. The main menu. I don't want to make
    a rule editor quite yet.

    So the main menu should look as follows:

       RULES OF WAR          > Versus Match
                             > Edit Maps/Rules
                             > Quit

    In both cases, you are presented with a list of maps. When you click on a map
    in 'edit maps/rules', you are taken to the editor. When you click on a map in
    versus match, you get to pick the names and colors for each player (as well
    as allies).

    The challenge is where to put the main menu in the code. The main menu lets
    you essentially create a rules file from a file on the computer and then
    instantiates it.


    So that works out pretty well. We find all of the stages we can play on, list
    them, and let the player pick what they'd like to do. When they pick play,
    they go to another menu that lets them change the team configurations and
    switch the default colors. I'll work on that next time. I'd like to go to bed
    now. So we'll wrap things up, commit, and call it a night!

