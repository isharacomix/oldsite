---
layout: post
title: Open Tactics Day 13
tags: replay
replay: open-tactics-day-13
---
In this livestream, we are good software developers and add some unit tests to
the project! We manage to create a nice testing suite that doesn't get in the
way of our code, and finished all the tests for our Grid interface. We even found
a bug in our ```get_range``` function thanks to the tests we wrote today!

    ;; This buffer is for notes you don't want to save, and for Lisp evaluation.
    ;; If you want to create a file, visit that file with C-x C-f,
    ;; then enter the text in that file's own buffer.

    Still getting things ready.

    Blarg! OK. Time to get started. Today is the 13th day of streaming. We've
    collected a total of 24 hours of video of programming, which is pretty
    impressive. We've come a long way too! I haven't had a lot of viewers along
    for the ride, but maybe the recording will be more interesting after the fact,
    especially when the game reaches completion?

    Only time will tell. :D



    So! What's on the menu for today? Well, first and foremost, I'd like to add a
    quick feature. When a team is defeated, I feel it's only appropriate to display
    an alert to the user saying so. Alerts are important from an HCI perspective
    since they are expected to be used to convey important information to the
    player! So let's add that reallllly quickly.

    Cool! That was pretty quick and easy. But now for what I really wanted to
    work on. There's a lot this game needs, like a map editor, some optimized
    animation, and a main menu. But what I think we really need has been a long
    time coming.

    TESTING.

    Right now, we've been doing all of our testing manually, and that doesn't
    scale when you start making a game as complex as this one. It's very important
    that when you change parameters, the behavior that the game had before doesn't
    change. While I probably won't do test-driven development (since I don't know
    the requirements in advance), making tests to ensure that I don't break my
    code or cause ridiculous failures is a good thing. So I want to spend tonight
    getting a testing suite started.

    First of all, I need to add command-line options to the program. Right now,
    you run the game by using ./open-tactics, but I want to include a command
    called ./open-tactics --test that runs the test suite and provides a health
    report of the program. I'm going to quickly look up some of python's built-in
    testing stuff, especially with regards to code coverage. It'll be done
    off-terminal, though.

    The first thing is to do the command line arguments.

    As with so many other things in this project, testing seems to be easier than
    I thought it would be! Here's how it works.

    First and foremost, all of the tests are put in the /code/tests folder. The
    ugly code I wrote that had that "discover" method will find all of these tests
    for us magically, so we don't have to do anything special there. Whenever we
    run with the "--test" option, it will automatically grab all the tests from
    that folder and run them, giving us output. In the output, all of the "."
    characters represent passing tests. I included a really basic test called
    test tests, which just checks to see if we can successfully get 5+5 to equal
    10. We did. Now let's show a failing test.

    When a test fails, we get which test failed and why it failed, giving us
    something we can debug with!

    So let's make some tests for our grid, for example. :D

    You see that! That's what unit testing does! Let's you find bugs like THAT one

    And that right there is how you test a module. Ideally, we'll create a single
    test file for every class in our program, especially once we get some more
    abstraction going on. Things are a little messy right now.

    Also, things like the controller will be tricky to test (not impossible) since
    they rely on user input. I'll need to come up with a way to intercept the
    gfx (maybe make a gfx_testing) so that it doesn't try to get the keypresses
    from curses.

    Bang. Now we have ourselves a nice little mock graphics library that will allow
    us to simulate keyboard input. This should prove to be very useful. We can also
    test and make sure our widgets are working (though I don't think it's
    worth it to try to automatically verify that it draws the things correctly).

    Anyway. That was a full day of work. Not the most glamorous, but it was once
    again something that needed to be done. If you've never done unit testing in
    python, hopefully this video will provide some tips and tricks to making it
    work painlessly! Time to commit and call it a night!

