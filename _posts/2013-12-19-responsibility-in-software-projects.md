---
layout: post
title: Responsibility in Software Projects
---
As a programmer, I respect Github for running the bleeding edge of its software on its servers. For example, Github pages - the engine that renders and hosts this website - is constantly being updated. This is how you find bugs and make software better. It's the open source way. *I get that.* I'm a hacker, so I like playing with things that might not be fully working because *that makes them better*.

But there's a limit to my patience. On many occasions, these updates completely break my website. Just yesterday, I spent two hours trying to figure out why a perfectly compiling website stopped compiling for some reason. Github even recently rolled out [error messages](https://github.com/blog/1706-descriptive-error-messages-for-failed-github-pages-builds) for when pages fail to build, but for some reason, I was just getting this cryptic e-mail telling me "Page build failed". According to the Github pages documentation, the proper way to debug this is to **simply** install the [Github pages project](https://github.com/github/pages-gem) on your *own machine* just so you can figure out why your website isn't building on their servers. Not only did I have to install Github pages, I also had to upgrade my own system's version of Ruby so that it matched the new upgrade that pages had. After all of this, I found out that, for some reason, the new version of [Jekyll](https://github.com/jekyll/jekyll)'s Markdown renderer called "[Maruku](https://github.com/bhollis/maruku)" had updated to where you can't have ampersands in URLs in ```[hyperlinks](like these)```. You know, the ampersands that separate GET parameters.

I also just discovered another bug, that you can't have colons in H1 headers.

    Test: Header
    ============
    This doesn't compile

Why shouldn't this compile? After all, this is legal Markdown!

I'm not blogging to complain about bugs. I'm blogging to complain about workflow. First of all, it is *completely unacceptable* to say "if our software isn't working for you, **simply** debug your input on your own machine". This attitude has the connotation that "our software is working, something must be wrong on *your end*", which is most certainly not the case. My website has valid Markdown, yet valid markdown strings are breaking builds. I'm fed up with using ridiculous workarounds, because the entire philosophy of Markdown is that the source code should be as readable as the rendered output, and the more I have to add wrappers around my code, the more I'm breaking that philosophy.

So why don't I just write a bug report? Well, I did. But the problem is, I haven't the foggiest clue of who to report it to? Do I report it to Github pages? Jekyll? Maruku?

Part of software engineering and Object Oriented design in general is about assigning responsibility to modules. If Maruku is responsible for handling Markdown rendering, then Github pages doesn't have to worry about it and can focus on other things. But what isn't handled so well in Object Oriented design is the idea of *accountability*. When Maruku no longer works, *who is accountable for it? Who has to clean up the mess?* The overwhelming open source attitude of "not my problem" is absurd. Requiring your users to have to work around dependencies that you're not accountable for, is unacceptable, regardless of how **simple** it is for you to do it.

This is not an indictment of Github pages, or even Maruku. They made simple mistake and haven't even gotten around to responding to an issue I posted a few minutes ago. I'm not accusing them of this behavior at all. This is an indictment of a more pervasive attitude I see in the spaces of the technical elite, an attitude that has no respect for users who can't figure out the cryptic error messages or inconsistencies in documentation. After all, the code is open and they can just read it. If they don't like the way the project is being run, they can **simply** fork it. I'm all for improving the code literacy of the layperson, but *this is not how it should be done*.

