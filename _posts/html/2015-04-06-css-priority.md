---
layout: post
title: "सीएसएस <strong>Image Properties</strong>"
subtitle: "When several rules <strong>collide</strong>"
section: css
---

### Introduction to CSS image properties

CSS आपको कुछ properties provide करती है जिनकी मदद से आप images को optimize कर सकते है। ये properties images की height, width, border और opacity आदि define करती है।


* image border
* image height
* image width
* image opacity
* image radius

आइये इन सभी properties के बारे में detail से जानने का प्रयास करते है।

### Image border property

Border property के द्वारा आप किसी भी image की border की चौड़ाई, उसका type (dotted, dashed आदि) और उसका color define कर सकते है। इन attributes को define करके आप किसी भी image को अपने webpage के लिए optimize कर सकते है। 
Border property define करने का syntax नीचे दिया जा रहा है। 
border : width | type | color; 
Border की चौड़ाई आप pixels में देते है। जैसे की

border:2px;
Border की चौड़ाई के बाद border का type define किया जाता हैं। CSS में borders के 4 basic types होते है। 

* dotted - Border dotes की form में represent होती है।  
* dashed - Border dashes की form में represent होती है।  
* double - Border double lines के रूप में show होती हैं।  
* solid - Border एक solid line के रूप में show होती है।



Border का type define करने के बाद आप उसका color define करते है। Color का आप नाम भी दे सकते है और इसे hex code के रूप में भी define कर सकते है।

Images के border से related CSS आपको एक और property provide करती है जिसकी मदद से आप चाहे तो images को round बना सकते है। इस property की value आप  % में define करते है। यदि आप images  बनाना चाहते है तो आपको value 50% देनी चाहिए। जैसे की

border-radius:50%;      
Border property का उदाहरण निचे दिया जा रहा है। 


CSS file

{% highlight css %}
img
{
  border : 1px solid blue;
  border-radius:50%; //it will make the image round than square.
}
h1{color:red;} 


{% endhighlight %}

HTML file 

{% highlight html %}
<html>
<head>
<title>Image border property demo</title>
</head>
<body>
<h1> Lotus is my favorite flower.</h1>
<img src="/images/flowers/lotus.jpg">
</body>
</html>
{% endhighlight %}
Image height property 

Height property के द्वारा आप image की height define करते है। Image की height आप pixels में भी define कर सकते है और % में भी define कर सकते है। जब आप % में height define करते है तो image container के according उतनी % height ले लेती है। जैसे की यदि 50% height define करते है तो image window की 50% height ले लेगी। 
Image height property का उदाहरण नीचे दिया जा रहा है। 

CSS file 

{% highlight css %}
h1{color:red;}

img
{
  height:200px;
 //height:50%; Height define in Percentage
}
{% endhighlight %}

HTML file

{% highlight html %}
<html>
<head>
<title>Image height property demo</title>
</head>

<body>

<h1>Life is not bed of roses</h1>
<img src="images/flowers/rose.jpg">

</body>

</html>
{% endhighlight %}
Image width property

Width property के द्वारा आप images की width define करते है। Width आप pixels में भी define कर सकते है और % में भी define कर सकते है। जैसा की मैने ऊपर बताया जब आप % में width define करते है तो image container की उतनी % width में show होती है। 
Image width property का उदाहरण निचे दिया जा रहा है। 

CSS file

{% highlight css %}
h1{color:pink;}

img
{
   height:200px;
   width:300px;
   //width:50%; width defined in percentage

}
{% endhighlight %}

HTML file 

{% highlight html %}
<html>
<head>
<title>Image width property demo</title>
</head>

<body>

<h1>Horses are faster than men</h1>
<img src="images/animals/horse.jpg">

</body>

</html>
{% endhighlight %}
Image opacity property 

Opacity property के द्वारा आप images की sharpness और clarity define कर सकते है। इस property की value 0.1 से लेकर 1 तक हो सकती है। जैसे जैसे आप value को बढ़ाते जाते है तो images उतनी है clear visible होती जाती है। 0.1 value में images सबसे दुँधली और 1 value से images सबसे clear show होती है। Opacity property का उदाहरण निचे दिया जा रहा है।

CSS file 

{% highlight css %}
h1{color:green;}

img
{
   opacity:0.6;
}
{% endhighlight %}

HTML file 

{% highlight html %}
<html>
<head>
<title>image opacity property</title>
</head>

<body>

<h1>Lion is king of all animals.</h1>
<img src="/images/animals/lion.jpg">

</body>

</html>

{% endhighlight %}














An HTML element can be targeted by **multiple CSS rules**. Let's use a simple paragraph for example:

{% highlight html %}
<p class="message" id="introduction">
  MarkSheet is a free HTML and CSS tutorial.
</p>
{% endhighlight %}

We can alter this paragraph just by using its **tag name**:

{% highlight css %}
p{ color: blue;}
{% endhighlight %}

Or we can use its **class name**:

{% highlight css %}
.message{ color: green;}
{% endhighlight %}

Or we can use its **id**:

{% highlight css %}
#introduction{ color: red;}
{% endhighlight %}

Because the browser can only pick **one color** to apply on this paragraph, it will have to decide which CSS rule takes **priority** over other ones. This is what CSS priority (or CSS _specificity_ is about).

In our example, the paragraph will be **red** because an `#id` selector is more _specific_ and thus more **important** than other selectors.

### Order of CSS rules

If similar selectors are in your CSS, the last one defined will take priority.

{% highlight css %}
p{ color: green;}
p{ color: red;}
/* Paragraphs will be red */
{% endhighlight %}

### The 100 measure

One quick way to figure out how "powerful" a CSS rule is, is by measuring the specificty of the **selectors**:

* `#id` selectors are worth 100
* `.class` selectors are worth 10
* `tag` selectors are worth 1

The selector with the highest "score" will prevail, _no matter the order in which the CSS rules appear_.

{% highlight css %}
#introduction{ color: red;}
.message{ color: green;}
p{ color: blue;}
{% endhighlight %}

{% highlight html %}
<p class="message" id="introduction">
  MarkSheet is a free HTML and CSS tutorial.
</p>
{% endhighlight %}

<div class="result">
  <p style="color: red;">
    MarkSheet is a free HTML and CSS tutorial.
  </p>
</div>

The `#introduction{ color: red;}` rule is more _specific_ than the others because ids must be **unique** throughout a webpage, and can thus only target **one** element.

`.message{ color: green;}` can target _any_ HTML element with a `class="message"` attribute, and is consequently less specific. Same goes for `p{ color: blue;}` which can target _any_ HTML paragraph.

### How to avoid conflicts

While writing your CSS, it's easy to write **conflicting rules**, where the same _property_ is applied several times.

To avoid that:

* only use **classes**: use `.introduction` instead of `#introduction`, even if that element only appears once in your webpage
* avoid applying **multiple classes** on a single HTML element: don't write `<p class="big red important">` but rather `<p class="title">` which is more semantically descriptive
* don't use **inline styles** like `<div style="background: blue;">`
