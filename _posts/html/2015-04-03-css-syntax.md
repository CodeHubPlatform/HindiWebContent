---
layout: post
title: "सीएसएस <strong>Syntax</strong>"
subtitle: "who{ what: how;}"
section: css
---

Introduction to CSS selectors 

CSS के syntax में selectors का important role होता है। आप किस element के ऊपर कौनसी style apply करना चाहते है ये आप selectors के द्वारा ही define करते है। ये CSS के selectors ही है जो इसे इतनी powerful और efficient language बनाते है। Selectors आपको HTML के किसी भी element को select करके उसकी presentation को change करने की ability provide करते है। इससे पहले की में आपको selectors के बारे में और बताऊँ आइये पहले CSS के syntax को समझ लेते है।


{% highlight css %}
/* A CSS rule */
selector{ property: value;}
{% endhighlight %}

example

{% highlight css %}
/* A CSS rule */
h1{ color: red;}
{% endhighlight %}


ऊपर दिए गए उदाहरण में h1 एक selector है। ये selector HTML के h1 tag पर apply हो रहा है इस तरह के selectors को element type selectors कहा जाता है। यँहा पर HTML tag को ही selector की तरह यूज़ किया गया है। Selector के बाद curly brackets में color property और उसकी value को define किया गया है। ये property heading के text को red में change कर देती है।

### Types of selectors 

CSS के द्वारा कई तरह के selectors provide किये गए है जिन्हें यूज़ करके आप और भी accurately काम कर सकते है। इन selectors के बारे में detail से निचे दिया जा रहा है।

### Element type selectors 

इस तरह के selectors किसी एक HTML tag पर apply होते है। इन selectors का नाम उसी HTML tag का नाम होता है। जब आपको किसी एक particular HTML tag पर कोई style apply करने की आवश्यकता हो तो आप इस तरह के selectors को यूज़ कर सकते है। इसका उदाहरण निचे दिया जा रहा है।

{% highlight html %}
<html>
<head><title>Element Selector</title></head>
<style>
p
{
   color:red;
}
</style>

<body>


<p> CSS is very powerful and effective.</p>

</body>

</html>
{% endhighlight %}

### Universal selector 

Universal selector को * से represent किया जाता है। इस selector में define की गई styles सभी HTML elements पर apply हो जाती है। लेकिन याद रहे ये तभी काम करता है जब उस element के लिए style अलग से define न की गई हो। यदि उस element के लिए अलग से style define की गई है या फिर वह element inline style sheet यूज़ करता है तो इस selector का कोई effect उस element पर नहीं होगा। इसका उदाहरण निचे दिया गया है। 


{% highlight html %}
<html>
<head><title>Universal Selector</title>
<style>
*
{
   color:blue;
}
</style>
</head>

<body>

<h1> Global Warming </h1>

<p> Global warming is a matter of talk around the world. It should be handled quickly. Other wise it will be late before we know it. 
</p>

</body>

</html>
{% endhighlight %}



यँहा पर universal selector `h1` और `p` दोनों ही tags पर apply होगा और इनका `color` blue होगा।  


### Sub-element selector

यदि आप किसी element पर तब CSS apply करना चाहते है जब वह किसी दूसरे element के अंदर आये तो इसके लिए आप sub-element selector यूज़ कर सकते है। सबसे पहले आप element का नाम देते है इसके बाद space देकर उस element का नाम लिखते है जिस पर आप styles apply करना चाहते है। इसका उदाहरण निचे दिया जा रहा हैं। 

इस उदाहरण में `<p>` के sub-element `<span>` tag पर style apply हो रही है और उसका color orange हो रहा है।

{% highlight html %}
<html> 
<head>
<title>sub element selector</title>

<style>
p span
{
    color:orange;
}
</style>
</head>

<body>

<p>
This is <span>a</span> paragraph </p>

</body>

</html>
{% endhighlight %}
### Class selectors 

हर HTML element एक class attribute define कर है। इसमें में class का नाम दिया जाता है। आप चाहे तो styles class attribute के base पर भी apply की जा सकती है। इसके लिए आप (.) operator लगाकर class का नाम selector की तरह लिखते है। जो जो elements उस class से belong करते है उन सभी पर define की गई styles apply हो जाती है। आइये इसे एक उदाहरण से समझते है। 

{% highlight html %}
<html>
<head>
<title>class selector </title>
<style>
.myClass
{
  color:red;
}
</style>
</head>

<body>

<h1> Main heading </h1>

<h2 class="myClass">sub heading </h2>

<p class="myClass"> This is a paragraph </p>

</body>

</html>
{% endhighlight %}



ID selectors

Class attribute की तरह ही आप styles को किसी particular `ID` के लिए भी define कर सकते है। जिन HTML elements की ID इस ID से match करती है दी गई styles उन्हीं पर apply हो जाती है। किसी भी id पर styles apply करने के लिए आप `#` का उपयोग करते है। इसका उदाहरण निचे दिया जा रहा है।
{% highlight html %}
<html>
<head>
<title>Id selectors </title>

<style>
#myId
{
    color:silver;
}
</style>
</head>

<body>

<p id="myId"> hello world i am css </p>


<p> hello world i am css again </p>

</body>

</html>
{% endhighlight %}
Attribute selectors 

HTML tags के जैसे ही आप चाहे तो किसी HTML tag के attribute पर भी styles apply कर सकते है। इन selectors का उपयोग form tag के sub-elements के लिए किया जाता है। आप input type के according दूसरे attributes को छोड़ते हुए किसी एक attribute को target कर सकते है।  इसका उदाहरण निचे दिया गया है।
{% highlight html %}
<html>
<head>
<title> Attribute selectors </title>
<style>
img[alt="myPic"]
{
    width:200px;
    height:200px;
}
</style>
</head>

<body>

<img src="some url" alt="SomeOtherPic">
<img src="some url" alt="myPic">

</body>
{% endhighlight %}
Group Selectors 

आप चाहे तो एक साथ एक से ज्यादा selectors भी use कर सकते है। इसके लिए आप सभी selectors को comma से separate करते है। Curly brackets में define की गयी styles सभी selectors पर apply होती है। आइये इसे एक उदाहरण से समझते है।

{% highlight html %}
<html>
<head>
<title> Group Selectors </title>
<style>
h1, p
{
    color:red;
}
</style>
</head>

<body>

<h1>What is css?</h1>
<p> CSS is a style sheet language. It is very powerful. And i like it.</p>

</body>
{% endhighlight %}
