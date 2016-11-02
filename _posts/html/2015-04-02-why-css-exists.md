---
layout: post
title: "<strong>क्यों</strong> सीएसएस Exists"
subtitle: "<strong>Separating</strong> content and styling"
section: css
---

### Introduction to CSS 

CSS एक designing language है। इसका इस्तेमाल webpages को और भी beautiful बनाने के लिए किया जाता है। CSS के द्वारा आप HTML tags पर designing apply कर सकते है। CSS आप 3 तरह से apply कर सकते है। 

* Inline - इस method में आप CSS को HTML tag में ही define कर देते है। ऐसा आप style attribute के द्वारा करते है।   
* Internal - इस method में आप CSS को HTML tag में define करने की बजाए HTML file के `<head>` tag में script tag की मदद से define करते है।   
* External  - इस method में आपकी CSS file और HTML file अलग अलग होती है। HTML file में आप CSS file को `<link>` attribute के द्वारा add करवाते है। 

CSS से आप webpages के presentation को control कर सकते है। CSS आपको webpage की design पर पूरा control देती है। CSS से आप webpage का text color, font family, background, margin, padding और position आदि set कर सकते है। 
CSS बहुत ही powerful technology है। इसकी मदद से आप complete HTML page की presentation control कर सकते है। CSS property और value के context में काम करती है। जैसे की यदि आप web page का background-color change करना चाहते है तो background-color property है और जो आप value देंगे वो इसकी value होगी।

{% highlight html %}
property:value
{% endhighlight %}

जैसा की मैने ऊपर बताया inline style sheet में आप style attribute यूज़ करते है और internal और external CSS के लिए `<script>` tag के साथ selector यूज़ किये जाते है। Selector उस tag का नाम होता है जिस पर आप CSS apply करना चाहते है।


CSS is a 3-part process:

* the **selector** defines _who_ is targeted, which HTML element(s)
* the **property** defines _what_ charateristic to alter
* the **value** defines _how_ to alter that charateristic

This whole block (selector/property/value) is a **CSS rule**.

### Advantages of CSS (Cascading Style Sheet)

CSS को यूज़ करने से आपका time बचता है। आप एक CSS file बना कर उसे कई HTML documents पर apply कर सकते है। आप हर HTML tag के लिए एक style fix कर सकते है और इसे जितने चाहे उतने webpages पर apply कर सकते है। 

जब आप HTML attributes के द्वारा webpage को decorate करते है तो हर element के लिए अलग से attribute और value define करनी पड़ती है। ऐसा करने से code बहुत अधिक हो जाता है और pages धीरे load होते है। लेकिन जब आप CSS यूज़ करते है तो उस webpage में यूज़ होने वाले सभी tags के लिए आप एक बार ही styles define करते है। ऐसा करने से code कम रहता है और आपके pages fast load होते है। 


CSS के द्वारा webpage को maintain करना बहुत ही आसान होता है। उदहारण के लिए आप सभी headings का यदि color change करना चाहते है तो सिर्फ CSS में change कीजिये और ये सभी headings पर apply हो जायेगा। 
CSS आपको HTML से अधिक style options provide करती है। HTML के comparison में आप CSS से अधिक attractive webpages design कर सकते है। 
CSS के द्वारा आप एक ही webpage को multiple devices के लिए configure कर सकते है। जैसे की mobile phones के लिए अलग styles यूज़ की जा सकती है। 
अब HTML attributes का उपयोग बहुत कम हो चूका है। CSS को यूज़ करना अब एक global standard बन चूका है।       


### Applying CSS (Cascading style sheet) 


### Inline style sheet 

निचे दिए गए उदाहरण को देखिये इसमें body tag के अंदर style attribute define किया गया है। इसके बाद style attribute में property और value define की गई है। इसे inline style sheet कहते है।    


{% highlight html %}
<html>
<head>
<title>Inline CSS Demo</title>
</head>
<body style="background-color:red;"> <!-- property : value in style attribute -->
<p>This is inline CSS Demo</p>
</body>
</html> 
{% endhighlight %}

### Internal style sheet 

Internal style sheet में आप styles को HTML के अंदर define नहीं करते है। Head section में `<script>` tag define किया जाता है। इसके बाद selectors को यूज़ करते हुए आप styles को define करते है। इसमें HTML code और CSS code को एक ही document में define किया जाता है। 

{% highlight html %}
<html>
<head>
<style>
body 
{ 
background-color:red; 
}
</style>
</head>
<body>
<p> This is internal CSS Demo</p>
</body>
</html>
{% endhighlight %}


### External style sheet

External style sheet के concept में CSS किसी दूसरी file में होती है। उस file को `<link>` tag द्वारा HTML file पर apply किया जाता है। External style sheet से आपको बार बार CSS लिखने की जरुरत नहीं होती है। आप एक ही CSS file को कई HTML files पर apply कर सकते है। इसका उदाहरण निचे दिया जा रहा है। 



{% highlight html %}
<html>
<head>
<link rel="stylesheet" type="text/css" href="yourfile.css">
</head>
<body>
<h1>External Stylesheet Demo</h1>
</body>
</html>
{% endhighlight %}
