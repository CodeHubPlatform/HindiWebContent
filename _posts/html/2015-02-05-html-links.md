---
layout: post
title: "एचटीएमएल <strong>Links</strong>"
subtitle: "The <strong>core</strong> of the Web"
section: html
---

### Introduction to HTML links

एक link ऐसा text या image होती है जिस पर click करते ही आप दूसरे page पर redirect कर दिए जाते है। जब भी आप किसी link पर अपना cursor ले जाते है तो वह एक clickable hand icon में convert हो जाता है। Links का उपयोग basically एक page से दूसरे page पर जाने के लिए किया जाता है। Links web की दुनिया की roads होती है।  


HTML में link create करने के लिए `<a>` tag यूज़ किया जाता है। इसे anchor tag भी कहा जाता है। इस tag के सबसे basic attributes href और target होते है। इन दोनों attributes के बारे में निचे बताया गया है। 

### href 

इस attribute के द्वारा आप उस page का address define करते है जो आप link के click होने पर show  करना चाहते है।  

{% highlight html %}
href = "page-Address"
{% endhighlight %}

### target 

target - इस attribute के द्वारा आप वह frame define करते है जँहा पर आप page शो करना चाहते है। ये attribute optional होता है। यदि आप इसे define नहीं करते है तो page new tab में open होता है। इस attribute कि कुछ predefined values होती हिए जिन्हें आप युज कर सकते हैं। 
{% highlight html %}
target = "frame-Name"
{% endhighlight %}

* _blank - जब आप ये value define करते है तो आपका webpage new tab या window में open होता है। 
* _self - जब आप ये value define करते है तो आपका webpage उसी tab या frame मे open होता है जिसमें link पर click किया गया था। 
* _parent - ये value webpage को parent frame में open करती है। 
* _top - इस value के द्वारा web page full document में open होता है। 
* customFrame - आप खुद का भी कोई frame define कर सकते है। ऐसा करने पार webpage उसी मे open होगा।         





### Creating links in HTML 

जैसा की मैने आपको बताया की HTML के द्वारा link create करने के लिए आप `<a>` tag यूज़ करते है। यँहा पर में आपको इसे कैसे यूज़ करते है ये बताने वाला हूँ। आइये इस tag का normal structure देखते है।      

{% highlight html %}
<a href="address-of-webpage> link-Name </a>
{% endhighlight %}
HTML में links create करने का complete उदाहरण नीचे दिया जा रहा है।
{% highlight html %}
<html>
<head>
<title>Text Formatting</title>
</head>
<body>
<p>
Go to Google <a href="www.google.com">Click Here</a>
</p>
<p>
Go to Best Hindi Tutorials <a href="www.besthinditutorials.com">Click Here</a>
</p>
<p>
Go to Facebook <a href="www.facebook.com">Click Here</a>
</p>
</body>
</html> 
{% endhighlight %}


### Configuring links 

Links को आप अपने page के according configure भी कर सकते है। जैसे की आप apply कर सकते है की जब भी कोई link पर mouse ले जाये तो उसका color green हो जाये और mouse हटाते ही red हो जाये। ये सब आप style tag के द्वारा कर सकते है। इसके लिए आप a के साथ condition colon लगाकर define करते है। इनके बारे में निचे दिया जा रहा है। इनका उदाहरण आप CSS वाली tutorials में देख सकते है।  

<div class="table">


<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Condition&nbsp;</o:p></div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Explanation &nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">a:link</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस condition में link first time web page पर show होती है। &nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">a:visited</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस condition में link पहले visit कि जा चुकी होती है। &nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">a:hover</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस condition में mouse पर cursor ले जाया जाता है। &nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">a:active</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
जब आप किसी link पर click करते है तो वह link active होती है। &nbsp;</div>
</td></tr></tbody></table>

</div>




