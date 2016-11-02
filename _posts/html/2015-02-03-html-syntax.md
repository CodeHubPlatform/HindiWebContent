---
layout: post
title: "एचटीएमएल <strong>Syntax </strong>"
subtitle: "As any language, HTML has <strong>rules</strong>"
section: html
---


### Some more common HTML tags

<div class="table">

<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<br style="border:0 none #666">
&lt;h1&gt; &lt;/h1&gt;</div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<br style="border:0 none #666">
ये heading tag होता है। इससे page की heading define की जाती है। इसे आप किसी paragraph से पहले यूज़ कर सकते है और उसकी heading define कर सकते है। इसकी text size पुरे page में सबसे large होती है।<br style="border:0 none #666">
<br style="border:0 none #666"></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<br style="border:0 none #666">
&lt;h2&gt; &lt;/h2&gt;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<br style="border:0 none #666">
ये भी heading tag होता है। लेकिन इसकी text size &lt;h1&gt; tag से कम होती है। इसे heading के बाद subheading declare करने के लिए यूज़ किया जाता है।<br style="border:0 none #666">
<br style="border:0 none #666"></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<br style="border:0 none #666">
&lt;h3&gt; &lt;/h3&gt;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<br style="border:0 none #666">
ये भी heading tag होता है। इसे subheading के बाद minor heading declare करने के लिए यूज़ किया जाता है। इसकी text size sub heading से कम होती है।<br style="border:0 none #666">
&nbsp;&nbsp;&nbsp;</div>
</td></tr><tr data-xp="1" style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<br style="border:0 none #666">
&lt;p&gt; &nbsp;&lt;/p&gt;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<br style="border:0 none #666">
ये paragraph tag होता है। इसके द्वारा आप एक paragraph अपने page में लिख सकते है और उसको different attributes के द्वारा position कर सकते है। किसी paragraph पर होने वाली सभी formatting आप इस tag के attributes के द्वारा कर सकते है।<br style="border:0 none #666">
<br style="border:0 none #666"></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<br style="border:0 none #666">
&lt;/ br&gt;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<br style="border:0 none #666">
ये tag line को break करने के लिए यूज़ किया जाता है। इस tag के बाद का text दूसरी line में शो होता है।<br style="border:0 none #666">
<br style="border:0 none #666"></div>
</td></tr></tbody></table>
</div>

### Introduction to HTML attributes

जितने भी HTML tags होते है उन सबके attributes होते है। ये name और value के pair में लिखे जाते है। Attributes के द्वारा आप tags को अपने according configure कर सकते है। Attributes को हमेशा starting tag में define किया जाता है। इन्हे define करने का उदाहरण निचे दिया जा रहा था।

{% highlight html %}
<tagName attrName="value"> 
some text here.
</tagName>
{% endhighlight %}


Attributes advanced configuration के लिए यूज़ किये जाते है। जैसे की आप default page background नहीं चाहते तो उसको अपने according change कर सकते है। ऐसे ही आप यदि default text color नहीं चाहते है तो उसे भी change कर सकते है। Attributes को यूज़ करना बहुत ही simple है। बस आपको पता होना चाहिए की कौनसा attribute किस जगह यूज़ करना है। आगे attributes से related एक simple उदाहरण दिया जा रहा है।

{% highlight html %}
<html>
<head>
<title>myPage</title>
</head>
<body bgcolor="black">
<h1 style="color:pink"> Heading </h1>
<p style="color:yellow">
This is a paragraph. And you are learning html in Hindi. 
</p>
</body>
</html> 
{% endhighlight %}


ऊपर दिए हुए example में 2 जगह attributes यूज़ किये गए है। सबसे पहले <body> tag में bgcolor attribute यूज़ करते हुए page का background color define किया गया है। जब आप default body tag यूज़ करते है तो page का background color white रहता है। लेकिन जैसा की मैने आपको बताया की आप attributes के द्वारा page और text आप अपने according configure कर सकते है। इस attribute के द्वारा आप जो background अपने page का रखना चाहते है वो रख सकते है। जैसे की मैने example में black दिया है।

दूसरा attribute paragraph tag में यूज़ किया गया है। ये style attribute है। इस attribute के द्वारा आप tag पर CSS (Cascading Style Sheet) apply कर सकते है। CSS के द्वारा advanced configuration किया जाता है, जिसके बारे में आप आगे पड़ेंगे। जैसे की आप देख सकते है style attribute के द्वारा CSS apply किया गया है। इससे text का color change किया जाता है। और ऐसा ही heading tag के साथ भी किया गया है।


### Scope of attributes 

Attributes का scope उनके tags के according होता है। जिस tag के साथ आप जो attribute apply करते है वो उसी tag तक रहता है। जैसे की आपने body tag में style tag को यूज़ करते हुए text color red define किया है। Body tag पुरे page के लिए होता है इसलिए ये attribute पुरे page के text को red में show करेगा। लेकिन ऐसा तब तक ही होगा जब तक कोई body tag से छोटा tag text को दूसरे color में define नहीं करता है। जैसे की आप आगे चलकर किसी paragraph tag का color green define करते है। तो ये color body tag के color को override करेगा। और आपका ये paragraph green text में show होगा। इसका उदाहरण निचे दिया जा रहा है। इसे आप execute करवा कर देख सकते है।    

{% highlight html %}
<html>
<head>
<title> myPage </title>
</head>
<body style="color:red">
Learn html in Hindi <br>
Lean html in Hindi in 2 days. <br> 
Learn html in Hindi pdf.   
<p Style="color:green">
This is some text here 
</p>
</body>
</html> 
{% endhighlight %}

        
ऊपर दिए हुए उदाहरण में आप देख सकते है की paragraph का text color अलग से define किया गया है। ये body के text color को override करता है। HTML attributes को यूज़ करने की कुछ guide line होती है। जिनको follow करके आप attributes का बेहतर इस्तेमाल कर सकते है। इनके बारे में निचे दिया जा रहा है।

### Guidelines for using HTML attributes 

हमेशा attributes को lower case में define करे। 
हमेशा attributes की values quotation mark में ही define करे। 


### Common HTML attributes 

निचे आपको HTML में commonly यूज़ होने वाले attributes की list दी जा रही है।  

<div class="table">
<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;Attribute&nbsp;</o:p></div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Explanation &nbsp;</o:p></div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Example &nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">id &nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">HTML document में किसी tag को uniquely identify करने के लिए id attribute यूज़ किया जाता है। किन्ही 2 tags की id same नहीं हो सकती है।&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">&lt;p id="mypara"&gt;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">class&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">ये attributes tags को अलग अलग class में categories करने के लिए यूज़ किया जाता है। बहुत से tags एक class के हो सकते है।</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">&lt;h1 class="java"&gt;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">title &nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">किसी tag का tittle देने देने के लिए title attribute यूज़ किया जाता है।&nbsp;&nbsp;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">&lt;p title="Hello"&gt;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver">
<div class="MsoNormal">
<o:p style="border:0 none #666">style&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">इस attribute के द्वारा आप tag पर style rules apply कर सकते है।&nbsp;&nbsp;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid">
<div class="MsoNormal">
<o:p style="border:0 none #666">&lt;p style="color:red"&gt; &nbsp;</o:p></div>
</td></tr></tbody></table>
</div>
