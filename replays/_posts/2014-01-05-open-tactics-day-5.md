---
layout: post
title: Open Tactics Day 5
tags: replay
replay: open-tactics-day-5
---
In this livestream, we change how we create our grids in order to facilitate
easier loading from files in the future! Ideally, we want to be able to store
everything in JSON files. Next time, we're going to focus more heavily on the
API of the grid, since we're still not sure what role we want our view to play,
but we're getting an idea of what we want the grid to do.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    That's one thing that bothers me. Whenever you start streaming or start
    recording, you essentially open a new shell and lose access to the programs
    recording before. So that means I now have an instance of emacs running
    in parallel with my recording that is different from the one running UNDER
    my recording (this one)

    Ah, whatever. None of my files are open.

    SO HELLO AND WELCOME TO DAY FIVE OF OPEN TACTICS. This is the longest I've
    ever worked on a game I think so I am quite pleased with how this is going.
    Of course, by this point, we've already seen the source code for the game
    start to get quite disgusting.

    Let's go over what I mean...

    First and foremost, there's the grid.py file that we've been working on for
    the past few days. It has four classes in it, two of which are kind of
    nonsense classes (Unit and Cell) that just hold other data in them. As storage
    classes, they don't have any behavior, but I keep wanting to assign functions
    to them. This is the sad, strange problem of object oriented programming.

    I want the game to be mostly powered by the grid, so I essentially use the
    "unit" and "cells" as abstractions for data storage... structures, if you will.
    Units aren't actually units. They don't move or do anything. At least, they
    shouldn't. All of that should be done by the grid object itself. In fact, I
    think part of the problem is the naming of the "grid" in a sense that it sounds
    more like a data storage structure than "units" do. Units "do" things, but 
    in this case, we don't actually want them to. They have no idea where they are
    in the world or what they are capable of. All of that is defined by the RULES
    of the game.

    I'm not saying this is the right way to do it in general. But in my case,
    since I'm going for ridiculous levels of abstraction, this just "feels" right,
    and I'm trying to stop myself from doing what's convenient from a conventional
    point of view.

    So here's my idea for how the system should be structured:

        the GAME.PY class is the shell of the game. It sets up the graphics,
        creates a grid for us to play on, and intercepts our input, passing it
        along to the grid.

        the GRID object is the world. It is essentially a storage unit of
        terrain and units. The grid should be acted upon by an interface that
        provides the following functionalities:
          * create units
          * destroy units
          * move units from location to location
          * change terrain
       the grid should simply provide an API for being changed

       the RULES object determines what can be done and cant be done in the
       sense of a game. the rules utilize the grid API and implement certain
       actions, such as "move" and "attack". Many different kinds of rules
       should be able to be utlized on a grid.

       the WORLDVIEW should combine the rules and the GRID in order to provide
       an interface for the player to generate and see the results of their
       actions. The WORLDVIEW (a name I *still* can't come up with) essentially
       shows the player, "Here are the units and which player's turn it is.
       This unit can legally move here, here, here. This unit can attack this
       other unit". The WORLDVIEW shouldn't directly change or affect the grid,
       it should produce actions and then run those actions. The idea is that
       the actions should be generatable by a human, an AI, or be part of a
       replay. Furthermore, all actions should be undoable, in the sense that
       I should be able to take a snapshot of the grid and simply be able to
       playback the gameplay.

    So what I'm thinking about doing today is procrastinating and NOT focusing
    on this, but do something equally important - find some way of representing
    a save/load format for grids.

    Essentially we need to think of all of the information stored in a grid
    and come up with a way of storing it. Naturally, this means we also need
    a way of representing units and teams as well. I think this will not only
    do a useful job for us, but will also give us an idea on how to begin
    refactoring this mess we call a game.

    This doesn't mean the work we've done thus far is wasted. We made some good
    prototypes I think.

    So, the format I'm going to store grids in is JSON. JSON is a cool serializable
    format that's safe to use since it doesn't include anything related to classes
    or code. It's just strings, arrays, dictionaries, and numbers.

       Game
         Grid
           w:
           h:
           Cells (list)
             terrain:
             x:
             y:
             owner: (team)
             unit:
               type:
               carrying: (list of units)
         Teams (list)
           name:
           color:
           cash:
         History (list of actions)

    In theory, because of the way our engine is designed, we shouldn't need much
    information since when you load a game, it should replay all of the actions
    to determine what is still alive, how much HP/fuel/etc it has. All of the
    information here is simply here to identify the STARTING configuration. This
    is pretty neat, since it allows us to make the format more compatible with
    different games.

    That turned out to be a lot easier than I thought it would. Sometimes being
    limited to only this terminal makes it hard to read code, though, so trying to
    refactor this is going to be a mess.

    Essentially, when you load a game, you load the grid and the rules. Whenever
    a cell or unit is loaded, the grid should consult the rules to figure out how
    to represent these elements. It just bothers me having to come up with the
    various responsibilities for each class. This is what usually makes me throw
    my hands up in frustration when programming.



    ... OK! That was tricky, but I think I like this code! Now we get to the fun
    part. TESTING. Note that one thing we'll have to do is consult the ruleset
    when it comes to "how do we create these elements"... but that can wait. :)

    WOW. That worked much better than expected. I didn't really think I'd get this
    part done this quickly. The best part about all of this is that now 

    I'm not done quite yet, I still need to be able to save a configuartion to a
    file and load it as json, but once you have the python dictionary, that's
    pretty trivial. In fact, I should be able to do a deep copy.



    So let's think about what we've done so far. Because of the very nature of
    this engine, you should be able to take just the configuration (which we
    wrote), the rules, and the actions that the players have taken, and that
    will allow you to reproduce the level. Now, it would be nice to be able to
    take snapshots that we can revert back to. In fact, before every player action,
    it would be nice if we had an "undo" that would take us back to where we
    were before. The nice thing is that a snapshot should theoretically be as easy
    to make as a "complete configuration with history". All of these are just ideas
    at this point, however...



    I'm still trying to avoid the uncomfortable "who draws what" question. I'll
    likely avoid that for as long as I can so that I can get the structure of the
    game working. I suppose the next best thing to do would be to set up the action
    system. The grid and the rules should work together. The rules take actions and
    interpret them into the grid's API. This means I should be thinking about the
    kind of API I want the grid to have. NOTHING SHOULD TOUCH THE GRID'S VARIABLES
    EXCEPT ITS API. That is an important rule for ensuring that game rules don't
    fall out of sync. It would be very nice to be able to do a safe "deep copy"...

    Apparently Python has a deep copy function. If the grid remains strictly a 
    data structure, it should be possible to deep copy them to use for undoing
    and history.

    Wow! That worked REALLY WELL. So, in that demo i just ran, pressing the 'w'
    key made a deep copy of the grid, and pressing the e key set that deep copy
    as the view's current version of the grid. It worked perfectly! Even after
    destroying an object, the deep copy brought it back with no problems.

    For anyone who doesn't know what a deep copy is, in object oriented languages
    like python, objects like Units and Cells are "pointers".

       x = Unit()
       y = Unit()
       list1 = [x,y]
       list2 = [x,y]

       list1[0].hp = 4
       print list2[0].hp
          will print 4

       the x and y are pointers to two seperate "units". If we store them in
       two seperate lists, the pointers are still the same. If I was to try to
       copy and "back up" list 1, any changes I made to the units would still
       persist.

    A "deep copy" would, instead of copying the pointers, ACTUALLY copy the objects

    So if i deep copy list1, two brand new objects are created that are copies of
    x and y. I can edit and mess up the deep copy of list1, and the original is
    still safe.

    This means that I can deep copy the grid to make backups, and then go back to
    those backups whenever I like. I think the way I'll do it is I'll make a deep
    copy after every action so that you can go back in time in order, but I'll 
    destroy all of the deep copies after you end your turn. You can make your own
    moves as many times as you like, but once its your opponent's turns, there are
    no takebacks. It might not be the most elegant solution, but it's a one-liner.
    As long as I make DOUBLE CAREFUL to make sure there are no side effects.
    For example, if I was to do a deep copy while variables were live in the view,
    bad things would happen.

    See that? I was able to move both characters in one turn. This is just because
    my view is imperfect, but it's a good reminder of the things we have to keep
    in mind.

    Since I'm still terrified of trying to figure out how to decide drawing
    responsibilities, I think tomorrow's task will be...

        Making a *good* API for the grid
        Setting up the action parsing infrastructure

    Since the entire point of everything is to make the grid a plaything for the
    rulesets, I think it would be smart to start thinking about what kind of
    functionality I want to expose and then get that down. Today wasn't much of
    a programming day, or at least, it didn't feel like it, especially since I
    didn't even get the JSON parsing down. But at the very least, we started 
    thinking more about what role we want the Grid to play in this game. :)

    OK. It's a bit early, but I'm gonna commit, kill the recording, and go to bed.
    School starts tomorrow.

