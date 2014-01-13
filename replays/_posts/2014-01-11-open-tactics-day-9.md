---
layout: post
title: Open Tactics Day 9
tags: replay
replay: open-tactics-day-9
---
In this livestream, we struggle with the ugliness of our code, but determine
that it's beautiful on the inside and manage to pick up our spirits. We apply
what looks like a factory pattern to the code where the rules system is
responsible for actually creating new instances of Cells, Units, and Teams. That
way, the rules system can make sure it has the variables necessary to play
the game.

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    So I learned that the whole "inner classes" idea was kind of bad, since
    inner classes don't belong to the instance and can't inherit any sort of
    behaviors from them.

    So what I plan to do instead is keep the inner classes seperate and instead
    create a method called "make_X" where the function will create an instance of
    the unit following the rules of the game. This way, we can store the damage
    matrix in all of the units individually, as well as controlling their behavior
    in the game (since the rules should define that, not the built-in behavior).

    The parent class for these items will be "useful", but will not support any
    advanced behavior save for coloring based on team colors. The less assumptions
    that the game code makes about units, terrain, etc, the better.

    This means that we are almost done pulling logic out of the model.

    One thing I need to do is sit down and determine the API for rules so that
    we know what all they are allowed to do. The relationship between the rules
    and the controller is rather complex and kind of frustrating at times. Now
    I'm grappling with how to display intel on the screen.

     +----------+
     |          |
     |          |
     |          |
     +----------+

    Originally i planned to have windows under the game board:

     +----------+
     |          |
     |          |
     |          |
     +----------+
     |    |     |
     +----+-----+

    or maybe to the side

     +-------+--+
     |       |  |
     |       +--+
     |       |  |
     +-------+--+

    The side is slightly better since it "squares up" the view a bit more. But the
    problem is that I don't want for the rules to have to keep getting intel from
    the rules since it might not know what is salient to get.

    For the HP animation, the rules actually make the low-level widget that the
    controller should display. It really shouldn't be able to do that. It might
    give the controller a suggestion about what to show and where to show it, but
    ultimately the controller should make the decision.

    Hmrph...

    There has to be a good way to figure out how to display intel. I don't want to
    enforce anything...

    Another idea I had was to have hot-spots in the four corners and draw intel
    wherever it wouldn't be in the way. When that's the case, the rules can say
    "display this information in this hot spot".

    Of course, the rules aren't actually saying anything. The controller is in
    control, and is the one calling all the shots. Blargh...

    OK, first things first. Let's move some logic into our "shell" classes.



    So. Now, the fancy "drawing" is handled by the subclass, overriding the very
    basic "just draw your icon". Also, I've normalized the variables to
    "name", "icon", and "color".

    I will enforce some basic variables across these classes. If you want to make
    your own rules, you have to subclass properly so that you'll inherit the def.
    variables. Otherwise, you're free to make all the variables you want for
    yourself.

    Now, the whole point of the "rules" is that there is a template written in
    python, and specifics written in json. I want the rules of the game to be as
    editable as a map, meaning I want people to be able to change the damage done
    between units and add capabilities to units freely. This means that in the
    same way we load the grid from a configuration dictionary, I want to load the
    rules with that same dictionary (a subdictionary for the map will be passed
    to it when it's loaded). This means that units come with two pieces of data:
    their specific data (encoded in the grid) and their rule data (encoded in the
    rules). And to be perfectly honest, I have no idea how I'm going to separate
    it. :/

    UGH. CIRCULAR REFERENCE.

    I obviously haven't thought this out clearly enough since now, we're going in
    circles. I think I need to completely rethink the structure.

     game: the shell. starts graphics and loads a game
     grid: the model of the world. holds all of the pieces
     camera: a graphical representation of a grid
     rules: the logic of the game. determines what's legal and not legal
     controller: gives information to the rules to perform actions

    Part of what's making this so hard is my insistence on making games as abstract
    as possible. If I'd just decide on a set of rules and stick to it without
    worrying about how people might want to adapt it, it would be much, much easier
    to program. And that might be what I should do.

    Then, I can create a single type of unit, have the rules very clearly say how
    the game proceeds, and allow people to add to the game in very restricted ways.

    In a way, this is kind of what I want. I want to support people to make new
    games that follow the same rules, like new units and structures that mix things
    up every once in a while. I think having a perfectly abstract engine that can
    support completely different games might be unnecessary overengineering. The
    more abstract I try to make it, the worse the code is and the less interesting
    things that can be added than if I'd just get over myself and "hard-code" the
    system.

    After all, it's open source. If someone wants to make a different game, they
    can just take the source code and make their own game. That doesn't bother me
    one bit.

    *sigh*

    This is the problem with being an engineer. You want to make something
    perfectly abstract and useful in every case rather than just being really good
    at the ONE case it should work in.

    ...

    OK. So maybe we need to do some rethinking. We don't need things to be as
    completely abstract as they are, so we should start thinking about refactoring.
    How can we organize the game in a way that makes good use of the assumptions
    about the data? We can assume that all units will behave the same way (taking
    actions, being drawn, etc). This will make the code much easier to read and
    probably easier to modify than trying to make it modular.

    We should probably also undo most of the code we wrote. 

    Ugh... but even from a non-abstract point of view, the rules know best how
    to make Units and Terrains. Ideally, the only information encoded in the
    map file would be the unit's team and type, and then the rules can figure out
    what icon represents the unit, how much damage it does in various situaions,
    etc, etc, etc. Even when we aren't going for perfect abstraction.

    The circular reference came about because the grid is responsible for knowing
    the teams, the rules are responsible for creating the unit, and the unit needs
    both pieces of information from each of the parents. This game just isn't very
    object-oriented, which is what I think is contributing to the problem.

    If we had a clearer definition of what needs to know what, then it would end
    up much better. The problem comes back when we worry about deep copies. This
    is what encouraged me to use a "store data on the board and then look it up
    in the dictionary" approach. It's not pythonic... in fact, using these
    data structures this way is highly C-esque.


    Ugh... today is just not going well. :(

    I wonder if part of what's causing this frustration is how I'm trying to load
    two things simultaneously. No, what's causing trouble is a highly coupled and
    convoluted dependency between these two classes.

    The grid contains units that are dependent on two sources of information and
    stored in two places. The only solution is to rethink the controller/rules/grid
    hierarchy.




    ................

    Since I'm approaching this in a c-esque way I might as well go all the way
    C-like. This is not by any stretch of the imagination a "good" way to code
    this, but it is a consistent way, so we're going with it.

    The problem is that the way the game is built right now, the constructor
    does not have all of the information it needs to completely create a new
    unit. This is one of the problems I always have with games and object-oriented
    programming. This, of course, means that the program calls for the factory
    design pattern, where you have an object responsible for producing other
    objects. A different set of rules in the game calls for a different factory.

    I just don't know where to put everything. And that's my problem.

    As it stands, the rules object is not just a state machine for the game, it is
    also the factory by which new Unit, Cell, and Team objects for its game come
    from. Until (unless) I come up with a better way of organizing it, this will
    just have to do. Create the units as 'anonymous-like' data structures with all
    of the values stored in them necessary for rendering.

    It would be nice if we could do this in a more object-oriented fashion, but now
    I see why I love the C language so much. :/

    I'm going to commit what I have right now.

    This is the good and bad part of duck-typing. I am free to change arbitrary
    values (and make new ones) in objects anywhere. They don't have to be strictly
    defined when created, or strictly set by one object or another. I can freely
    edit their variables whenever I need to. This is a problem because there is no
    way to enforce values being set at the correct times, which I'm afraid will
    lead to bugs later on down the road.

    I'm feeling better about this now. I don't think I'm going to do a massive
    rewrite anymore. That will just dampen my spirits (and I've been doing such
    a good job!)

    So at this point, we've got our factory methods all separated out. Now...
    let's see. Maybe we should think about how to represent the data for the rules.

    Hmm... I think that all rules can technically store their data however they
    like. The JSON looks like this:

     data:
       rules:
       grid:

    The grid part of the data is passed to the grid constructor. I don't really
    like giving the 'rules' object that much authority.

    Hmmm... I guess the next step in overengineering is to create an abstract class
    that can be subclassed by other rules classes.

    All right. I'm content. There's my two hours for today. Let's commit and call
    it a night.

