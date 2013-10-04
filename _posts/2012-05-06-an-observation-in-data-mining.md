---
layout: post
title: An Observation in Data Mining
---

![Photo]({{ site.baseurl }}img/screen_blogtags.png)

I was looking at my stats page the other day, because I love stats. I love looking at the graphs, seeing how my readership grows each month, collecting the flags in my <a href="http://flagcounter.com">Flag Counter</a>, and seeing what search terms refer people to my blog. I like to see it as a game. Yes, you read that right. You guys are all just achievements to me. How's that for the most dehumanizing thing I've ever written?

I noticed something very curious in my most recent visit, which is that the <em>most popular tags</em> section has its tags grouped in some very intuitive ways. The one that immediately caught my eye was that Linux, Ubuntu, Gnome, Fedora, and Unity were all clustered together. I usually just overlook things like these, but since I'm taking a data mining class with a <a href="http://people.engr.ncsu.edu/keboyer/">great professor</a>, I've stopped overlooking these little details. It's a lot of fun trying to figure out what they're doing to make it work.

My blog of 83 posts is divided into 5 disjoint categories and 81 overlapping tags (I'm not counting this entry in the data set). I imagine that what they do is take the tags out of the most popular posts in your blog, and then do some kind of clustering or association on the tags and categories of those entries to figure out which ones belong on a line together. As it turns out, the Linux, Ubuntu, etc. line was discovered because my last post was the first one to ever use any of those tags. Therefore, the tag Linux <strong>always</strong> appears with Ubuntu, Fedora, Gnome, and Unity. Even though it's a really small data set to make that assumption, it's good enough for a blog stats page.

The Responsibility, Public Service, and Volunteering tags were likely brought up due to my <a href="http://nctech4good.org">NCTech4Good</a> article. Volunteering always appears with Public Service, but Responsibility only intersects with the two in the NCTech4Good article. This is what leads me to believe that it might only be the popular articles are being considered when bringing these tags together. The tag Teaching, which also appeared in the NCTech4Good article, was not part of this group, and maybe that's because teaching appears in so many other, unrelated articles.

Granted, my blog doesn't get enough readership for me to reach any sort of definite conclusions, but it was fun to think about, especially since my Data Mining exam is next week. It would be quite fun to do this experiment again when I become immensely popular on Wordpress. Now I have to work on cutting back on the number of different tags that I use.
