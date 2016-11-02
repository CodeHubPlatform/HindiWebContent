---
layout: post
title: "सीएसएस <strong>Selectors</strong>"
subtitle: "How to <strong>target</strong> HTML elements"
section: css
---

### CSS background properties 

CSS के द्वारा किसी भी HTML element का background set किया जा सकता है। उदाहरण के लिए आप headings को highlight करना चाहते है ऐसी situation में आप CSS के द्वारा सभी headings का background set कर सकते है। 


Background 2 तरह से set किया जा सकता है। आप चाहे तो background में कोई solid color set कर सकते है या फिर कोई image भी set कर सकते है। Background को set करने के लिए CSS आपको बहुत सी properties provide करती है। आइये इनके बारे में जानने का प्रयास करते है। 
Setting background color 

CSS के द्वारा background color set करने के लिए आप background-color property यूज़ करते है। इस property की value आप color का नाम या hex code दे सकते है। आइये इसे एक उदाहरण से समझते है। 

{% highlight html %}
<html>
<head>
<title>Setting background color</title>
<style>
p
{
     background-color:gold;
} 
</style>    
</head>

<body>

<h1>Indian economy </h1>
<p> Indian economy is growing very fast. India is 7th richest country in the world</p>

</body>

{% endhighlight %}

ऊपर दिए गए उदाहरण में paragraph का background color CSS के द्वारा change किया गया है। इसी प्रकार दूसरे HTML elements का background color भी आप change कर सकते है। आइये अब CSS के द्वारा background में image set करना सीखते है।

### Setting image background 

CSS के द्वारा image को background के रूप में set किया जा सकता है। इसके लिए background-image property यूज़ की जाती है। इस property की value के रूप में image का url दिया जाता है। इसका उदाहरण निचे दिया जा रहा है।

{% highlight html %}
<html>
<head>
<title>setting image background with css </title>
<style>
body
{
    background-image:url(http://www.hdwallpapers.in/walls/cosmea_floral_bloom-wide.jpg);
}
</style>
</head>

<body>

<h1>Image background</h1>

<p>There is an image behind this text. </p>

</body>

</html> 
{% endhighlight %}

कई बार ऐसा हो सकता है की आपकी image बहुत छोटी हो और उससे पूरा background fill नहीं हो रहा हो। ऐसी situation में आप background-image property के बाद background-repeat property यूज़ कर सकते है। इस property की repeat और no-repeat 2 values होती है। जब आप repeat value define करते है तो आपकी image repeat हो जाती है और pure background को fill कर देती है। आइये इसे एक उदाहरण से समझने का प्रयास करते है।




{% highlight html %}
<html>
<head>
<title>background repeat property</title>
<style>
body
{
    background-image:url(http://www.hdwallpapers.in/walls/cosmea_floral_bloom-wide.jpg);
    background-repeat:repeat;
}
</style>
</head>

<body>

<h1>Image background repeat example </h1>

<p> This is an example of background image repeating. Background this text
is an image and it is repeating it self so it can fill the entire background</p> 

</body>

</html>
{% endhighlight %}


Background image repeat करने के अलावा आप चाहे तो image को background में किसी certain position पर set कर सकते है। उदाहरण के लिए आप image को left से 50px छोड़कर set करना चाहते है तो ऐसा करना possible है। ऐसा background-position property के द्वारा किया जाता है। में आपको बता दू की इस property को आप background-image property के साथ यूज़ करते है।

Background position property की आप 2 values दे सकते है। पहली value left side से image की दुरी define करती है। और दूसरी value top से image की दुरी define करती है। आइये इसे एक उदाहरण से समझने का प्रयास करते है।

CSS file

{% highlight css %}
h1
{
   background-image(/images/flowers/rose.jpg');
   background-position:100px 50px;
}
{% endhighlight %}
HTML file

{% highlight html %}
<html>
<head>
<title>Background position demo</title>
</head>
<body>
<h1> Rose </h1>
<p>Roses are most amazing flowers according to me. I gave my mother rose on mother's day.</p>
</body>
</html>
{% endhighlight %}

एक और property CSS के द्वारा provide की गई है जिसे आप background images के साथ यूज़ कर सकते है। इस property के द्वारा आप background image को fixed या scroll-able बना सकते है। ये property background-attachment है। इस property की fixed और scroll 2 values हो सकती है। Fixed value से image fixed रहती है उसे scroll नहीं किया जा सकता है। और scroll value से image को scroll-able बनाया जा सकता है। इसका उदाहरण निचे दिया जा रहा है।

CSS file
{% highlight css %}
p
{
  background-image(/images/flowers/orchid.jpg);
  background-attachment:scroll;
}
{% endhighlight %}
HTML file
{% highlight html %}
<html>
<head>
<title>Background attachment demo</title>
</head>
<body>
<h1> This is a heading </h1>
<p> This is a paragraph. And behind this paragraph there is an image background. This image background is scroll enabled.</p>
</body>
</html>
{% endhighlight %}
