---
layout: post
title: "एचटीएमएल  <strong>Lists</strong>"
subtitle: "Ordered & Un-ordered"
section: html
---


### Introduction to HTML lists 

HTML में आप किसी भी information को lists के द्वारा भी represent कर सकते है। Lists के द्वारा आप अपने webpage को well ordered बना सकते है। HTML से आप 3 तरह की list बना सकते है। इनके बारे में निचे दिया जा रहा है। 



<div class="table">
<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">Type &nbsp;</o:p></div>
</td><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">Explanation &nbsp;</o:p></div>
</td><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">Example &nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">Ordered-List &nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">ये list ordered form में होती है। इस तरह की list को आप कई तरह से order कर सकते है जैसे की numbers(1,2,3,4,5) और alphabets(a,b,c,d,e,f) आदि। इस तरह की list आप &lt;ol&gt; tag के द्वारा create करते है।</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<ol style="margin:15.8px 0 15.8px 0">
<li style="margin:0 0 4px 0">&nbsp;A</li>
<li style="margin:0 0 4px 0">B</li>
<li style="margin:0 0 4px 0">C</li>
<li style="margin:0 0 4px 0">D</li>
<li style="margin:0 0 4px 0">E</li>
</ol>
<br></td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">Unordered-List&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">इस तरह की list unordered form में होती है। इस तरह की list के items bullets से represent किये जाते है। इस तरह list आप &lt;ul&gt; tag के द्वारा create करते है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<ul style="line-height:22px">
<li style="margin:0 0 4px 0">a</li>
<li style="margin:0 0 4px 0">b</li>
<li style="margin:0 0 4px 0">c</li>
<li style="margin:0 0 4px 0">d</li>
</ul>
<br></td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">Definition-List&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">Definition list में पहले आप एक list item define करते है और उसके बाद उसकी definition provide करते है। इस तरह की list आप &lt;dl&gt; tag के द्वारा create करते है। List item declare करने के लिए &lt;dt&gt; tag और उसकी definition देने के लिए &lt;dd&gt; tag को यूज़ किया जाता है।</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">A</o:p></div>
<div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp; &nbsp;First Alphabet.</o:p></div>
<div class="MsoNormal">
<o:p style="border:0 none #666">B</o:p></div>
<div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp; &nbsp;Second Alphabet&nbsp;</o:p></div>
</td></tr></tbody></table>
</div>



### Ordered list 

जैसा की मैने आपको पहले बताया ordered list create करने के लिए आप `<ol>` tag का यूज़ करते है। इस tag के बाद list item define करने के लिए आप `<li>` tag यूज़ करते है। यही tag unordered list में भी यूज़ किया जाता है। इसका उदाहरण निचे दिया जा रहा है। 

{% highlight html %}
<html>
<head>
<title>Ordered list </title>
</head>
<body>
<ol>
<li>Ram</li>
<li>Shyam</li>
<li>Sita</li>
<li>Gita</li>
</ol>
</body>
</html> 
{% endhighlight %}


### Type attribute

Ordered list के साथ आप type attribute भी यूज़ कर सकते है। Type attribute के द्वारा आप ये बताते है की आप list को किस तरह से order करना चाहते है। जैसे की यदि आप numbers की list चाहते है तो आप type attribute की value 1 define करते है। और यदि आप alphabet order में list को चाहते है तो type attribute की value a देते है। आप चाहे तो roman letters से भी list को define कर सकते है इसके लिए आप type attribute की value I देते है। इसका उदाहरण निचे दिया जा रहा है।
{% highlight html %}
<html>
<head>
<title>Type attribute </title>
</head>
<body>
<ol type="I">
<li>Ram</li>
<li>Shyam</li>
</ol>
</body>
</html> 
{% endhighlight %}

### Unordered list 

Unordered list क्रिएट करने के लिए आप `<ul>` tag का इस्तेमाल करते है। इस tag के बाद `<li>` tag से list item define किये जाते है। इस तरह की list में type attribute की 3 values दी जा सकती है। Disc, Circle और square values से आप अलग अलग तरह की unordered list create कर सकते है। इसका उदाहरण आगे दिया गया है।
{% highlight html %}
<html>
<head>
<title> Unordered list </title>
</head>
<body>
<ul type="square">
<li>Ram</li>
<li>Shyam</li>
</ul>
</body>
</html> 
{% endhighlight %}


### Definition list

Definition lists के द्वारा आप किसी term की definition provide करते है। Definition lists create करने के लिए आप `<dl>`, `<dt>` और `<dd>` tags इस्तेमाल करते है। इसका उदाहरण निचे दिया गया है। 
{% highlight html %}
<html>
<head>
<title>Definition list </title>
</head>
<body>
<dl>
<dt>A</dt>
<dd>First letter of alphabet</dd>
<dt>B</dt>
<dd>Second letter of alphabet</dd>
</dl>
</body>
</html> 
{% endhighlight %}
