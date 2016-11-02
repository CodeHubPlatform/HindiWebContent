---
layout: post
title: "एचटीएमएल  <strong>Blocks</strong>"
subtitle: "It's a big family tree"
section: html
---

### Introduction to HTML blocks 


HTML में block level और inline 2 तरह के tags होते है।  जब भी block level tags webpage में show होते है तो automatically इनके पहले और बाद में एक line का space होता है। कुछ common block level tags के बारे में निचे दिया जा रहा है।

* div 
* p
* h1

दूसरे तरीके के tags inline tags होते है। जब ये tags यूज़ किये जाते है तो webpage में ये अपने पहले यूज़ किये गए tag की line में ही show हो जाते है। यदि आप <br /> tag इस्तेमाल ना करे तो इनके पहले और बाद में कोई space नहीं होता है। कुछ inline tags निचे दिए जा रहे है।

* span
* anchor
* img 


### HTML `<Div>` tag 

`<div>` tag page को divide करने के लिए यूज़ किया जाता है। इसे division tag भी कहते है। इस tag में आप दूसरे HTML tags को यूज़ कर सकते है। `<div>` एक block level tag है। इस tag को CSS के साथ यूज़ करते हुए आप अपने webpage को design कर सकते है। ये page पुरे page को section में divide कर देता है। 
इन sections को आप जरुरत पड़ने पर hide और show कर सकते है। ऐसा करने पर information webpage पर होते हुए भी visitor को तब शो होगी जब वह देखना चाहेगा। `<div>` पर apply की गयी CSS `<div>` के अंदर के सभी tags पर apply होती है। 
किसी webpage की अलग अलग तरह की information को separate करने के लिए `<div>` tag को यूज़ किया जा सकता है। इसका उदाहरण निचे दिया जा रहा है।

{% highlight html %}
<html>
<head>
<title>Div tag demo </title>
</head>
<body>
<div style="color:black;background-color:green;padding:10px;margin:20px;">
This is a cool website you can learn all programming languages here in Hindi language. 
</div>
<div style="color:black;background-color:red;padding:10px;">
This is another div. What i am trying to tell you is that these two div's are different. And will act differently.
</div>
</html> 
{% endhighlight %}


### Some other block level tags 

 <div class ="table">
 
 
 <table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;Tags&nbsp;</o:p></div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;Explanation&nbsp;</o:p></div>
</td></tr><style>#lite-atf-content ol{margin:14.4px 0 14.4px 0;padding:0 0 0 20px;border:0 none #666}#lite-atf-content .b{padding:3.6px 0 3.6px 0}</style><tr data-xp="2" style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;&lt;form&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;form&gt; tag एक block level tag होता है। इस tag से आप किसी webpage पर form की beginning और end define करते है। बाकी दूसरे HTML forms से related tags इसी tag के अंदर आते है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;h1&gt;.....&lt;h6&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">सभी heading tags block level tags होते है। हर heading खुद का एक block define करती है जिसके पहले और बाद में automatic line break होता है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;&lt;p&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">जैसा की आप जानते है &lt;p&gt; tag से paragraph define किया जाता है और हर paragraph के पहले और बाद में line break होता है। इसलिए &lt;p&gt; tag को भी block level tag माना गया है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;ol&gt;,&lt;ul&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">दोनों list tags &lt;ol&gt; or &lt;ul&gt; block level tags होते है। क्योंकि कर list खुद का एक section define करती है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;table&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;table&gt; tag भी एक block level tag माना जाता है क्योंकि ये एक अलग section create करता है। जो page के पुरे content से अलग होता है। और अपने&nbsp;पहले और बाद में line break include करता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;pre&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
ये एक block level tag होता है। इसमें दूसरे सभी tags यूज़ किये जा सकते है। और इसे यूज़ करने से जैसे आप text editor में tags को configure करते है वैसे ही वे webpage पर show होता है।&nbsp;&nbsp;&nbsp;&nbsp;</div>
</td></tr></tbody></table>
 
 </div>

### HTML `<span>` tag

`<span>` एक inline tag है। इससे आप text format करते है। जब भी आप इस tag को यूज़ करते है तो इससे आपका text दूसरी line में ना जाकर उसी line में रहता है। जो text इस tag के बीच रहता है formatting बस उसी पर apply होती है। `<span>` tag के खुद के कोई attributes नहीं होते है लेकिन आप style और class attributes को इस tag के साथ यूज़ कर सकते है। इस tag को आप headings में भी यूज़ कर सकते है। इसका उदाहरण निचे दिया जा रहा है। 

{% highlight html %}
<html>
<body>
<p>
This is a paragraph. In this paragraph if you want to apply formatting to certain words then you can <span style="color:red;"> put them in span tag.</span> 
</p>
</body>
</html> 
{% endhighlight %}

### Some other inline tags 


<div class="table">

<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;Tags&nbsp;</o:p></div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Explanation &nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;a&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
&lt;a&gt; tag को inline tag माना जाता है। इसे यूज़ करते हुए आप किसी भी text को link बना सकते है। ऐसा करने से वह webpage में उसी line में show होता है।&nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;b&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;b&gt; tag बिना line break के किसी भी text को bold करता है। इसलिए ये भी एक inline tag होता है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;i&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;i&gt; tag text को italic बनाता है। और ये भी एक inline tag होता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;u&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;u&gt; tag से आप text को underline करते है। इसे भी inline tag माना जाता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;img&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;img&gt; tag से आप किसी text line के बीच में image insert कर सकते है। ऐसा करने से text में कोई line break नहीं आता है। इसलिए &lt;img&gt; tag भी एक inline tag होता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;input&gt;&nbsp;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;input&gt; tag से आप form के अंदर दूसरे elements create करते है जैसे की text-box और button आदि। लेकिन यदि आप &lt;br &nbsp;/&gt; tag यूज़ ना करे तो इन elements के बीच कोई line break नहीं होता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr></tbody></table>
</div>













