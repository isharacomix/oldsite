---
layout: post
title: Open Tactics Day 7
tags: replay
replay: open-tactics-day-7
---
In this livestream, we made up for the lost time we missed yesterday by finally 
taking most of the logic out of the controller. We created a new middle layer
called the Rules that is responsible for all game logic, and turned the
controller into a completely game-agnostic system!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Oh man, I missed last night. D:

    So, yesterday was my first day back teaching, and then a club meeting ran
    long, so I decided not to even bother after getting back at 11 PM. Of course,
    the more days in a row you go without doing the thing, the harder it is to get
    back in the habit, so I'm back in full force getting ready to do some hard
    programming!

    So, last time, we managed to complete the sad and unhappy problem about who
    draws the grid, so we are happy! Today, we do one of the biggest challenges
    in Open Tactics, the RULE SYSTEM

    Right now, we have the following infrastructure


      Game: A game, sets up graphics and intercepts keypresses
      Grid: Stores unit, terrain, team information
      GridView: Handles input/output
      Camera: A widget that draws a grid.

    So, as we said yesterday, one of the biggest problems in the system at the
    moment is that there is too much game logic in the gridview. Ideally, the
    responsibility of the gridview is to build actions that the rule system can
    interpret. So we would build these actions one piece of input at a time.

    The GridView, which I'm thinking about renaming to Controller, can basically
    give two kinds of feedback. A coordinate, or a value from a menu. The Rule
    system, while it can interact with an AI or anything else, is essentially a
    state machine that takes input one character at a time.


      The game has started. Give me any coordinate.
      I click on 3,4
      There's nothing there
      I click on 3,5
      There is an infantry there. Give me a coordinate in $MOVEMENT_RANGE
      I click on 4,4
      I will move the infantry to 4,4. Give me an action "Wait", "Attack", "Cancel"
      Attack.
      Give me a coordinate in $ATTACK_RANGE
      I click on 4,5
      I will use the infantry to attack the tank at 4,5. Give me any coordinate

    So in other words, the entire negotiation of movement and turn taking can be
    done in this kind of interaction system. You either give the Rules ANY
    coordinate, a coordinate out of a legal list of coordinates, or an option from
    a menu. This will add an interaction to the history of the game, and the
    system could just as easily simply parse the interactions from the log as it
    could parse them from a user (probably using the exact same state machine).

    So I like that, and that's what we're going to work on. First, rename the
    GridView to controller (since that's what we're doing, making an agnostic
    controller than can play no matter the rules), and then start making the rule
    system. We may end up having to delete some of our code or comment it out, and
    unfortunately, emacs and the terminal are TERRIBLE for refactoring.

    (sorry, was figuring out how to cut and paste in emacs. ctrl+w cuts the marked
    area)


    SO. Let's try this out. We might colosally mess this up, but that's why I'm
    just making this game for fun. :)


    So far, so good. To summarize what has been done up until now:
        We have abstracted away from having rules in our controller. The entire
        purpose of the controller is to send menu selections and positions to the
        rules implementation.

    We don't keep a full history, but it's now (supposedly) possible to undo
    actions. However, there is now a problem. We have no idea how to tell the
    controller to render alerts (like our combat animation).

    I suppose one way to do this is to store the alerts in the rules and then
    have the controller take them out in order to render them. The problem being,

    ... well... the problem being that the rules don't know the best place on the
    screen to render them. I suppose the rules could provide a suggestion...
    or maybe do it based on the location of the camera cursor. Let's try that.


    It's not perfect, but it's a start. To recap:
      1. we created a new rules object. now, the purpose of the gridview is to
         pass coordinates and commands to the rules instead of doing all the work
         itself
      2. renamed gridview to "controller"
      3. made the rules system responsible for creating alerts and the controller
         responsible for fetching the alerts that are currently available.

    This marks a huge improvement in the behind-the-scenes infrastructure of the
    engine. Now that we have started putting all of the game logic into a more
    centralized place, creating the rules for the game will only get easier. There
    is still some logic in the grid (the combat), but that will be moved out next
    time.

    Welp, as usual, time to commit changes and call it a night. We had three
    viewers tonight!

