---
layout: post
title: Single Sign-On and OpenID
---

![Photo]({{ site.baseurl }}img/screen_openid.png)

So now that exams are over, the only thing on my mind now is my paper due on Thursday. Well, that and also <a href="https://openid.net/">OpenID</a>. For those of you who don't know, OpenID is an open standard for a little thing called <em>Single Sign-On</em> where a single account on one website allows you to log into many websites without having to deal with passwords and whatnot. If that sounds a little fishy, good on you for noticing that. To the untrained eye, it may look like a weakened form of security, but I've been playing around with it for a while and decided I'd spend a blog entry talking about why I think it's actually a pretty cool thing.

As you know, most websites are powered by the old-fashioned username and password authentication scheme. Let's use everyone's favorite social networking site, Wordpress, as our example. In order to prove to Wordpress that you are the person that you say you are, you provide a secret that is only known between you and the Wordpress, called a <em>password</em>. The security of the password is based on the trust that the password will remain a secret between you and Wordpress. If you give your password to other people, then Wordpress can no longer accurately identify you. If Wordpress leaks the password, then you can no longer be confident that your blog has not been accessed by someone else. The password is the oldest form of security, and for the most part, we have gotten pretty used to it.

But let's just face it - nobody's perfect. We use our password on multiple websites all of the time, even though it's a very bad practice. Remembering a unique password for every website you go to is flat-out painful, especially when it's one you only visit every once in a while. On the flip side, with the <a href="http://www.telegraph.co.uk/technology/twitter/9253861/Thousands-of-Twitter-passwords-leaked.html">frequent password leaks</a> we've seen recently in the news, it's getting hard to trust a web site with a password these days, especially if you use that password in multiple places.

So consider this situation: let's say I want to create an account on a new website, like SourceForge. However, instead of creating an account with a password, I can tell SourceForge, "instead of having a secret between the two of us, I would like for you to allow Wordpress to vouch for my identity." Since Wordpress and I already have a shared secret, and I trust Wordpress more than this little SourceForge website, I would rather have Wordpress tell SourceForge to let me in rather than trying to remember a whole new password.

This is called Single Sign-On, and OpenID is an open standard for implementing Single Sign-On. This doesn't really give SourceForge anything that it can use against me, so I'm able to use the password for the site I trust more on a site that I trust less. In a way, it's like using Paypal. I don't trust other websites with my passwords or my credit card information, so I can use OpenID and Paypal as a trusted third party to go in between us.

There are a number of advantages to this approach: first of all, it means that SourceForge is not responsible for storing my password anywhere securely, so I don't have to worry if they get hacked or some silliness like that. On the other hand, if Wordpress gets compromised, then Wordpress can be added to an OpenID blacklist until the problem is resolved, preventing anyone from using Wordpress against me. In this case, the keys to my account are only in one location, and Wordpress is a location I can trust, while I might not trust other, smaller sites to protect my account information. And of course, on the user side, I just have to log into the one website I trust the most, and then I don't have to worry about logging in elsewhere.

While I wouldn't like to see banks trying to use "log in with Wordpress" any time soon, I think it's quite appropriate for small, niche forums and news sites. These sites are pretty slapped together, and I don't really want to deal with the security issues that come with running them. In fact, it would be nice to see websites that have absolutely no password support at all, and only accept OpenID connections. That would set a good precedent for small websites and even small businesses, so that they wouldn't have to deal with the irritating liability of taking care of passwords.
