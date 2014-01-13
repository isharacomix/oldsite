---
layout: post
title: Open Tactics Day 10
tags: replay
replay: open-tactics-day-10
---
In this livestream, we add a lot of UI enhancements. We implement a very simple
little pop-up that appears when it's your turn, as well as adding information on
the sidebar about the currently selected unit and damage prediction for combat.
We also make the game fast-forward through its history when it is created, using
the history of actions saved in the JSON dictionary. A very productive evening!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    OK. I learned my lesson. Don't paste big buffers of text into emacs. It kinda
    locks it up. I think what was killing it was trying to match the curly braces.

    That aside, we've still managed to get a lot coded.

     * Little popup when a turn begins
     * History is stored in the JSON of the rules dictionary
     * The game replays its history when a new rules object is created
     * You can export the json structure of a game to a string (which can trivially
       be saved to a file... I'll figure that out much later).

    The other thing I really wanted to get around to was a nice sidebar on the
    right side of the terminal that has all of the information for the tiles you
    hover over. I image three boxes.

       ----------
       Day 1      The top frame is global information. All the teams and their
       Red   $300 current cash.
       Blue  $300
       ----------
       Plains     This is the information for the cell you are currently hovering
       DEF +1     over

       Infantry
       HP 86%
       
       ----------
       Infantry   This is the information for the unit you currently have selected
       DEF +2
       HP 99%
       ----------

    I think that's enough windows. Right now I'm not going to worry about making
    it abstract. We're prototyping.

    That's what I call a successful day of programming.

    We got a lot done today. Go us. :D

