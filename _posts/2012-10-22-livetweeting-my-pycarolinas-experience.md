---
layout: post
title: Livetweeting my PyCarolinas Experience
tags: blog
---

![Photo]({{ site.baseurl }}img/screen_pycarolinas_tweets.png)

Even though I tried the livetweeting thing at PKAL <a href="http://isharacomix.org/2012/10/17/pkal-and-livetweeting">last week</a>, I decided I'd give it another go at <a href="http://pycarolinas.org">PyCarolinas</a> this weekend... for science. Long story short, it went better than expected. For the long story long, check out <a href="http://storify.com/IsharaComix/pycarolinas-unc-chapel-hill-oct-20-21">the Storify</a>. This post talks about my second experience livetweeting, what I learned, and what I want to do differently in the future. I'll talk more about the conference on Wednesday when I've had time to let it all soak in.

Even though I still can't figure out the proper way to write "livetweeting", I probably did the most extensive play-by-play compared to the rest of the crowd. I laid claim 42% of the 421 Tweets under the #pycarolinas hashtag, and I'm not really sure as to how much of an impact I made. People definitely noticed me, and recognized who I was when I gave them my business card because my Twitter avatar is printed on it. One of my colleagues from Duke's Ph.D. lab even commented on one of the things I brought up, and another Twitter follower of mine engaged in my posts as well, meaning that I had an impact on at least two folks who didn't attend. According to one PyCarolinas attendee, my tweeting was even "infectious", inspiring others to be more vocal! However, in terms of my own participation in PyCarolinas... was it worth it?

The two issues I have with livetweeting is that it potentially disconnects you from the content of the talks you attend as well as the other people in the conference. Since those are the two main reasons for going to conferences in the first place (the third being food), I've been hesitant to try this out. However, that original preconception of mine was shattered, as I found it easier to engage with the talks when I forced myself to identify and articulate the main points of the talk in front of me. I call it "taking notes in public", and I think that's a pretty awesome concept. When you can fit a main point into a tweet, that demonstrates comprehension better than indiscriminately filling pages of a notebook. By day two of the conference, I stopped trying to take notes on paper and Twitter in parallel, and simply focused on Tweeting. After the talks, I summarized them in detail on paper. While I didn't this time, I could even go so far as to draw diagrams in my notebook, take pictures of them with my tablet and push <em>those</em> to Twitter as well!

On the subject of disconnecting me from other people, I've always worried that having your head buried in social media would make it harder to connect with people at the conference. That fear was also blown away since Twitter, as many folks say, establishes a back-channel that allows people to provide a commentary regarding the talk while the presenter gives his or her presentation. While livetweeting is more about parroting what the presenter says, the backchannel adds more to the talk, allowing you to ask questions to other members of the audience and make the post-talk discussion more substantial. Even after the conference, I'm actually communicating on Twitter (about the Tweet data-mining I'm doing), which is a first for me. As a naturally quiet person, simply jumping on Twitter and sharing my thoughts under the conference hashtag made invisible little me more visible, meaning that if I did this more intentionally, it might actually improve my networking!

There's a caveat to this, however. I think that the backchannel is only helpful when you're dealing with the traditional <strong>1:N</strong> dynamic of presentations. Because the number of speakers is few and the number of listeners is many, the audience can engage the material on Twitter while listening to it peripherally. I believe that this would be a <em>bad thing</em> for a THATCamp-like discussion with a small number of participants with equal speaking time. If you're trying to talk in person and chat, the attention between the discussion and back-channel becomes split. Extending this example, I also believe the same idea could work in a classroom environment. While there are countless problems with the traditional "lecturer up front" model, having a backchannel where students can discuss the material during lecture (and then Storify it for studying later), this would provide a low-cost way to engage students who would not normally be participating in such as large class. My colleague @stargould <a href="http://texturalliterature.blogspot.com/2012/10/the-power-of-we-collaboration-in.html">did this in her classroom</a> very successfully, though it was done in parallel with a group discussion among 10 participants. While it definitely <em>works</em> in a small group, I think the <em>relative impact</em> would be greater in a larger environment where students can meet students they may otherwise never know existed.

On the technical side, I didn't discover until Day 2 that my Nexus 7's Twitter application consistently failed to deliver tweets related to #pycarolinas to me. Unlike the <a href="https://code.google.com/p/gfeedline/">gFeedLine</a> application on my laptop, you can't monitor a hashtag on Twitter's stock reader. I'm going to try HootSuite next time, since it seems to be working in the last hour that I installed it. Even though multitasking is tricky in Android, I think I can handle this.

Finally, just for a bit of fun, I did some surface-level analytics on the tweets. Luckily, when you screen-scrape Storify, the tweets are in a very well-structured format:

    Tweet Text
    Poster's Real Name
    Time of Tweet
    "ReplyRetweetFavorite" (static string)

So an example of one of my Tweets would be...

    After this, I'm gonna have to take a three day tweeting break. #pycarolinas
    Barry Peddycord III
    3 hours ago
    ReplyRetweetFavorite

In the spirit of PyCarolinas, I rounded up all of the tweets and came up with the following statistics. The corpus contains all of the Tweets available on the Storify, meaning that only publicly available Tweets that were <em>not</em> retweets were counted. While it would have been cool to measure them, that would have seriously blown up the size of the Storify, making it unreadable. All characters were converted to lowercase and punctuation marks (except #) were removed.

    Total number of Tweets: 421
    Total number of Tweeters: 46
    Top 3 Tweeters: @isharacomix (179), @roguelynn (38), @leafstorm (28)
    Percentage of Tweets by @isharacomix: 43% (179 Tweets)
    Percentage of Tweeters with 1 Tweet: 48% (22 Tweeters)
    Unique Words: 2430
    Most mentioned Tweeters: @juliaelman and @kennethreitz (12 times)
    Most frequent word: #pycarolinas (428)
    Weirdest word pattern: "this" (45 times) "with" (44) "you" (43)

    @isharacomix tweeted 179 times during PyCarolinas...
    bringing his total tweet count to 499.

