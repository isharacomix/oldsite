---
layout: post
title: Social Network Competition
tags: blog
---

Last night I was at a hack night in Carrboro, and we were talking about an
interesting project on the Internets called *[Tent](http://tent.io)*. Tent
is a decentralized, abstract social networking protocol that is best described
as everything that I was hoping
[Diaspora](https://en.wikipedia.org/wiki/Diaspora_%28social_network%29) would be.
The way that Tent works is that it provides a lightweight protocol that allows
individuals to keep social media data about themselves on their own servers,
and then interact with their friends and followers through apps that make
requests for this data in order to interact with it. I personally find this
super interesting.

At its most basic level, it's simply a way to store data in a contextual way.
In the same way that my website is currently powered by a Github repository,
I could just as easily turn my site into a Tent server and then have my website
frontend be nothing more than a Django app that read the data on my server
that is of the type "Blog Post", and have it using the Tent protocol under
the hood. Of course, that's just the most basic usage of Tent.

Users could follow my blog by RSS if they liked, but if they were Tent users,
they could subscribe to my blog and get updates whenever my app updated, and
they could then set up a dashboard to receive those updates from me and other
bloggers using Tent as the underlying mechanism. They could write comments on
anonymously if they like, but if they were Tent users, their comments could be
a special kind of Tent data structure that is linked to the blog post, and
their followers on Tent could receive them. If multiple bloggers are using
Tent, we display our blog in a clean visual style to normal users, with
richer possibilities for users who are using Tent.

Whenever a new social network comes up, the question of "how will you compete
with Twitter or Facebook" becomes an issue. The problem faced by most social
networks is called a cold-start problem: usually in order to enjoy a social
network, there have to be other people, but if there aren't other people,
nobody will join. This causes a bit of a catch-22 when it comes to social
network adoption and migration.

However, the idea behind Tent is that it is not a "social network" - it is a 
"social protocol" for managing data that may want to be shared with other
users for some reason. This is why I brought up the blog example: it doesn't
matter if Tent is adopted by lots of users or very few, since the success of
the blog doesn't depend on people using Tent - it's just an added bonus if
lots of users happen to adopt it!

So the idea is, **in what contexts can Tent be used where its success does not
hinge on adoption of the protocol?** The first thing that came to mind is a
protocol for social communication between players of a game. Imagine if a forum
and microblog is implemented inside of a single open source game like
Teeworlds? Users want to be able to host their own servers, but there may be
some desire for a social interaction level. So Tent can be used simply as
a protocol for establishing a "social network" for the people who happen to be
playing that game. This does the job of establishing a network without relying
on anyone to migrate to it.

The difference between this and another solution is that let's say I decide to
make another game. All the Tent profiles of the people who played the first game
are compatible with my future games, meaning that the network becomes richer as
new players are added. Other people can make games using Tent and their networks
would be compatible with mine as well. This is where the beauty of Tent shines
through, and this is how you make it marketable - where small communities are
needed and the social interaction is behind the scenes and does not require a
website to utilize.

What do you think? If you have any ideas, leave them below - no Tent account
needed. :)

