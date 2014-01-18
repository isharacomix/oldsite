---
layout: post
title: Open Tactics Day 14
tags: replay
replay: open-tactics-day-14
---
In this livestream, we make up for missing a day by finally implementing a way
to see the rules of the game through a dynamically generated rulebook! Now when
we create custom units, we can see how they work using the "?" key. Next time,
we're going to do the biggest project of all - the map editor!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Sorry for missing yesterday! Thursdays are, like I said, my social night, so
    I didn't get to stream. That aside, I had an opportunity to play some board
    games and think about my project quite a bit. Before programming, I'd like to
    type up a bit of a stream of consciousness about open tactics.

    So far, the emphasis on the engine has been on the relationship between the
    controller and the "rules". The rules tell the controller what can be done,
    and the controller, driven by the player's keyboard, picks something that can
    legally be permitted. I think it's really promising that the rules object,
    which I'm now essentially calling a "game", is responsible for that! If it
    doesn't tell you you can do something, you can't do it, and it won't get
    logged in the game's history. I'm very pleased.

    So, this is really exciting for one big reason: AI. I'm very excited to work
    on AI for this game. It's not anything I'm working on in the near future, since
    my goal for January is to just get the game's basic rules and map editing down,
    but AI is something I've been excited about for a while, since I've never
    seriously played with it. I love how I've generated a highly abstract protocol
    when it comes to how actions are taken in the game in a sort of state system.
    Even if I decide to branch out and make a new version of the rules, the
    protocol between the grid, the controller, and the game doesn't change. This
    is very exciting.

    I started watching some videos for a MOOC on coursera that was two months ago
    that I never got to participate in called "General Game Playing". GGP is a
    research field in AI where if you can encode the rules of a game in a logical
    manner, then a good idea should be able to learn how the game works at least
    as well as a human. The AI should know what kinds of conditions it's going
    towards, and then take actions leading to those conditions, developing
    strategies that are frequently successful.

    I don't think I want to go as far as general game playing because a game like
    the games I'm making here are orders of magnitude more spacious than games
    like checkers or chess. I feel like some degree of knowledge engineering has
    to go into the games. However, I wonder if I can make a general AI that could
    play *any* kind of game using this framework I'm developing.

    So that brings me to the task I've been planning on tackling this evening.
    Since the primary point of this game is that it's all about rules, we need
    some way to present the rules to the player so that they don't have to do
    trial and error for everything. The challenge is doing it in a non-game
    specific way, which essentially means making rulebooks. So what I'm interested
    in doing is assigning a universal "help" command accessed via the question
    mark. It should bring up a menu containing help topics, or, if hovering over
    a unit/tile, give contextual information about that particular tile.

    There are two kinds of information that have to be conveyed: rules, and balance

    The rules are the overall rules of the game. How units act, how turns proceed,
    what winning is like. These are the rules that are encoded in the python I've
    been writing for game.py. However, the balance elements are what are variable.
    The balance elements are things like units and terrain, that can be defined in
    the JSON files, allowing us to change the properties and other aspects of
    units. The challenge here is that we need to create some kind of customizable
    rule book that takes the JSON information into account.

    Luckily, most of this is still handled at the game.py level. Create a method
    specifically about getting help, with context at a particular map coordinate.
    The system will then still go into state machine mode, but without storing
    anything in the actions, since this is purely informative.

    What needs to be conveyed in our game?

    Let's say you press question mark hovering over a unit... what context should
    you get?

        * About Unit
        * About Terrain
        * Overall Help
        * Damage Chart

    Would that all be helpful?

    I feel like a rulebook should be a widget. It would be actually really cool
    to be able to just create the rulebook, have a table of contents, hyperlinks,
    etc, and be able to create the navigable rulebook dynamically based on the
    JSON data.

    A rulebook would be a really big widget, and unfortunately, it would have a
    lot of hardcoded information. Though it would be nice if the information was,
    say, templated. What if the entire rulebook was one big markdown file? And
    we could use a templating language like liquid to programmatically write the
    entire thing? Then pass the string to the rulebook widget and render it. You
    would have different pages and hyperlinks to those pages... for example,
    pages for all of the units and terrains, their various descriptions etc.

    I feel like we definitely need something like that. A rulebook would contain
    pages. You could flip through the pages manually or you could find hyperlinks.
    The context hint when you hover over a unit would be a hyperlink to that
    unit's page in the rulebook.

    I feel like the rulebook should be navigated like a text document, with a
    cursor. That way you can click on hyperlinks and such to go to different
    pages.

    OK. Let's try this out. Let's make a rulebook widget.

    So, these rulebooks are going to be less fancy than I originally wanted,
    but let's see if that's a bad thing.

    All right. So what pages go in the manual?

      * Overview
      * Units
      * Terrain

    Well, that turned out better than expected. It's not the most colorful thing
    in the world, but it's functional! The quick reference is nice, letting you
    quickly see all the different types of units in the game, and then the expanded
    reference allows you to read in much more detail how things work. Unfortunately
    hard-coding the descriptions in the python makes internationalization harder,
    so I'll have to come up with a way of translating strings on the fly. Of course
    that can wait. First I want to prototype. Everything else can come later.

    Another thing I'd like to do is include "descriptions" in the unit types. Like
    a human readable description of what a unit is or can do (same for tiles). That
    will allow humans to interpret the unit's role in the game, while robots can
    make do with the properties etc.

    Cool! So now, when you make your own units, you can provide descriptions to
    players on how to use them. This would also be a cool way to incorporate lore
    into team histories and stuff. :)

    Anyway, this is pretty awesome. We can now see the rules meaning that I can
    finally get to the main event: the map and rule editors. The central philosophy
    behind this game is that the rules should be as straightforward to edit as
    the maps. Now that we can *see* the rules, we should be able to come up with a
    way of *editing* the rules. This means that I'll be working on my map editor
    for the default ruleset next time, which will likely be a big undertaking. The
    map editor has to allow you to not just create a map, but make new units as
    well.

    I plan to use the same "controller", however, since I don't think I should need
    a different interface when this coordinate/menu editor works fine as it is.
    There will probably be some need to introduce keyboard shortcuts as well, but
    some better keyboard and input handling is needed anyway.

    So, with that, I'm calling it a night. Ciao!




