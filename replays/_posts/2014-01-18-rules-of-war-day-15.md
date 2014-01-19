---
layout: post
title: Rules of War Day 15
tags: replay
replay: rules-of-war-15
---
In this livestream, we rename the project and start the level editor! We make
some good progress, but struggle with some infrastructure issues that seem a
little more hard-coded that we'd like for them to be.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Hooray! Today was screenshot saturday! I managed to create an imgur album to
    hold all of my screenshots for this game. In addition, after two weeks, I've
    come up with a game name I like:

     "Rules of War"

    This name really captures the entire point of the game - the changes in the
    rules. The philosophy driving me to keep making this game has been that the
    rules should be as easy to make as the maps, so a name like this is
    particularly suitable. So I'm going to call today Day 15 of Rules of War
    development. Also, RoW is a pretty neat acronym!

    So today, I think I'm going to bite off more than I can chew by working on the
    map editor. Right now, I'm just going to try to get away with making a map
    with some basic rules before I start worrying about how to change the rules.
    The way I think it should be is that nothing should really be made from scratch
    or something. I feel like every map that's made should be forked from another
    map... rules and all. The map is a function of the rules, so you can't really
    separate the two. With all that in mind, let's see if we can make this work.
    I'd love to be able to make the map editor solely using the grid and controller
    and not need the magic of the "actual rules" to make it work.

    In fact, in the future, it would be so cool if any game could be made entirely
    in JSON, but I think that the structure I've got is too reliant on Python for
    that to be possible. I could either sacrifice future flexibility by creating
    a python plugin for my rules system, or something else.

    Overall, I don't think there's any reason to go beyond what I've got. The
    move-move-act-target dynamic offers a LOT of flexibility, and I think we could
    make more interesting games by having plugins simply patch in new kinds of
    properties for tiles and things. But I digress. This isn't a topic for now.

    Right now, let's just see if we can get away with actually making a map
    editor. Also, I want to rename that "game" back to the "rules". I think that's
    more useful in the context of this game and what it all means. So yeah, we
    have a 'rules' module. One day, I'd like to be able to abstract that out and
    support different kinds of rule engines written in python in order to support
    completely different kinds of games.

    (in fact, speaking of seperating out, the grid should really have no concept
    of turns or days... ugh I have to be careful when I do things like this. This
    kind of super-abstraction hurts my head and reduces my motivation).

    Enough. Let's make a map editor. I'm not sure if the map editor should really
    be part of the rules file, but I'm gonna stick it in there for now at least.

    It's midnight, but I'm going to keep working on this. I knew what I was getting
    into when I started making the level editor. It's a big job, and I keep getting
    distracted by little things.


    OK. That worked! How about that. There's still a bit more to do, but I'm gonna
    call it a night here.

    There's one thing still on my mind, and that's the idea that the team info
    really should not be stored inside of the map data. I mean, that information
    is created when a game starts... the map can, of course, only support a
    certain number of teams, but when you start the game, you decide who is
    playing on which team, what color they'll be, and who will be allies. I suppose
    that the information stored inside the map could be the "default" and then be
    edited or something. Also, how do we keep track of where a team's input comes
    from? Is it local? Internet? AI?

    These are challenges, but it probably doesn't help to stay up any later to
    figure them out. I don't like how HUGE the rules module is getting, but there
    likely isn't any other choice. To be fair, the point of the game is that rules
    should be editable, so perhaps it's a good thing that I make it so that the
    rules module should support both gameplay and editing. In fact, I think it
    would be really cool to "simulate" gameplay while editing.

    I feel like I should permit "raw" editing of the data underlying the units
    too, such as variables, HP, fuel, etc. There should be a way to explore the
    underlying data structure, but I'll think about that later. After all, no
    good trying to get it perfect on the first try and all at once. Let's just
    work with what we've got. Chances are, this will be good enough.

    The other thing that's bothering me is this notion of maybe supporting other
    systems of rules... I suppose that it's a noble cause, but maybe not worth
    my energy. Most of the utility functions are so tied to a specific set of
    rules that it's not worth attempting to abstract them other than to create
    a reference interface. 

    I was trying to think about the notion of making the "current turn" something
    controlled by the 'rules' system, but then I realized that would break down
    the whole idea of having turns undoable, etc.

    Eh. Whatever. No point in overthinking it. Code is easy to change later on.
    I'll figure it out. OK. Time to commit and then go to sleep.

