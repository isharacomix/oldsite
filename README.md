IsharaComix.org
===============

Blog and Livestreaming Hub
--------------------------
isharacomix.github.io is my blogging platform and livestreaming hub hosted
on Github Pages using Jekyll and Javascript. This repository pushes personal
homepages to their limits by using a simple html page to host a highly
interactive web application!

The philosophy behind this website is that it should present data from the
most important ways that I interact with other people:

 * Twitter
 * Blogging
 * Livestreaming
 * IRC

As such, the ```index.html``` immediately presents the user with three
columns covering all of this media: the left is an interactive Twitter
widget, the right is a Jekyll-generated blogroll, and the center is a
virtual terminal that creates a live websocket connection to a TTYcast
server - in my case, *live.isharacomix.org*. There is even a revealable
Freenode webchat client that enables Twitch.tv-style chat between me and
viewers when I'm streaming, so all of the bases are covered!

Each blog post is dated as a Jekyll post in ```_posts``` and is automatically
retrieved by Jekyll in both the post archive list as well as RSS feeds. The
RSS feed is split across ```feed.xml```, ```rss.xml```, and ```atom.xml```
to support automatic discovery by feed reading apps.


JSON Terminal Replays
---------------------
In theory, the site supports playing JSON Typescript replays generated by
[Shelr](http://shelr.tv). When the YAML front matter "replay" value is
true, the javascript needed to turn a terminal-container into a terminal
video is loaded at the end of the page. The ```play_file``` function can
then take a JSON file and attempt to replay it.

Currently, I can't figure out a way to store these replays in a way that
makes sense since the videos would ideally be stored with whatever software
project they go with. One option would be to make all of the replays their
own "posts" in one category/tag and the blogs in another. However, this would
pollute the repo with extra data, and would still require the manual
addition of a _post for each replay.


Other Github Repos
------------------
This repo is named after the standard naming convention required to map
it to my *user.github.io* domain. I added a CNAME for my *isharacomix.org*
domain, meaning that other repos with gh-pages branches are automatically
added to this namespace, inheriting my custom 404 page and overall linking
structure.

As long as the site.baseurl is set in each repo's ```_config.yml``` to
my domain, everything works automatically. The idea is that every
project I work on should have its own website powered by a Github
repo.


Software Utilized
-----------------
 * [Jekyll](http://jekyllrb.com) and Github Pages
 * [Bootstrap 3](http://getbootstrap.com)
 * [TTYcast](http://github.com/dtinth/ttycast)
 * [script-replay](http://mister-muffin.de/scriptreplay/)


Glitches
--------
Whenever Github Pages or Jekyll (or their dependencies) are updated, sometimes
the markdown renderer (Maruku) breaks down. This causes sporadic failures when
pushing, but luckily, the last successful build of the website remains online
until the pushes start working again.