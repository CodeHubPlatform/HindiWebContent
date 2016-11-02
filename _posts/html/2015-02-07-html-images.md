---
layout: post
title: "एचटीएमएल <strong>Images</strong>"
subtitle: "The major <strong>media</strong> on the Web"
section: html
---


### Introduction to HTML and images 


Images से एक web page attractive और beautiful लगता है। HTML के द्वारा web page में आप कोई image add कर सकते है। इसके लिए आप `<img>` tag यूज़ करते है। `<img>` tag बहुत से attributes provide करता है जिनसे आप image की representation को control कर सकते है। इन attributes के बारे में निचे दिया जा रहा है। 

<div class="table">
<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
Attributes&nbsp;</div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
Explanation&nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
src &nbsp;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस attribute के द्वारा जो image आप show करना चाहते है उसका URL दिया जाता है। &nbsp;&nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
alt &nbsp;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस attribute की value text होती है। यदि किसी वजह से आप की image web page पर show नहीं होती है तो उसकी जगह ये text show होता है। एक तरह से ये image का alternative होता है। &nbsp;&nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
width &nbsp;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस attribute के द्वारा आप image की width set करते है।&nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
height &nbsp;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस attribute से आप image की height set करते है। &nbsp;&nbsp;</div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
style &nbsp;</div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
इस attribute के द्वारा आप images पर CSS rules apply कर सकते है। &nbsp;&nbsp;</div>
</td></tr></tbody></table>

</div>


### Including images in web page 

जैसा की मैने ऊपर बताया किसी भी web page में images include करने के लिए आप `<img>` tag का इस्तेमाल करते है। `<img>` tag के साथ src attribute यूज़ करना necessary होता है। बाकि सभी attributes optional होते है। इसका उदाहरण निचे दिया जा रहा है।
{% highlight html %}
<html>
<head>
<title>Web page with image</title>
</head>
<body>
<img src="image-url">
</body>
</html>
{% endhighlight %}


### Syntax

**Images** use the `<img>` element, which is a **self-closing** element (it only has an opening tag).

The `src` attribute defines the **location** of the image. As with links, you can either use _relative_ or _absolute_ URLs.

<ul class="files">
  <li>
    <i class="fa fa-folder-o"></i>
    my-first-website
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        home.html
      </li>
      <li>
        <i class="fa fa-image"></i>
        soyuz-spacecraft.jpg
      </li>
    </ul>
  </li>
</ul>

{% highlight html %}
<p>
  Look at this spacecraft landing!
  <br>
  <img src="soyuz-spacecraft.jpg">
</p>
{% endhighlight %}

<div class="result">
  <p>
    Look at this spacecraft landing!
    <br>
    <img src="https://codehubplatform.github.io/EnglishWebContent/images/soyuz-spacecraft.jpg">
  </p>
</div>            

### Setting alternative text with images 

यदि किसी वजह से image show नहीं होती है तो alternative text उस जगह पर show होता है। ये attribute search engines को ये बताने के लिए भी यूज़ किया जाता है की ये image किसके बारे में है। इसका उदाहरण निचे दिया जा रहा है।
{% highlight html %}
<html> 
<head>
<title>Image with alternative text</title>
</head>
<body>
<img src="image-url" alt="Photo of vipin sharma">
</body>
</html> 
{% endhighlight %}


#### Setting height and width of images 

Height और width set करने के लिए आप height और width attributes यूज़ करते है। इनकी values आप integers में देते है। 
{% highlight html %}
<html> 
<head>
<title>Image with alternative text</title>
</head>
<body>
<img src="image-url" height="200" width="200" >
</body>
</html> 
{% endhighlight %}


### Setting border of images 

आप image की border भी set कर सकते है इसके लिए आप border attribute यूज़ करते है। इस attribute की value border की size होती है।
{% highlight html %}
<html> 
<head>
<title>Image with alternative text</title>
</head>
<body>
<img src="image-url" border="5" >
</body>
</html> 
{% endhighlight %}

   
### Making image a link 

आप चाहे तो image को एक link भी बना सकते है। ऐसा करने से जब भी कोई image पर click करेगा तो एक नया web page open होगा। इसके लिए आप `<img>` tag को `<a>` tag में लिखते है। Anchor tag में text की जगह आप `<img>` tag को define करते है। इसका उदाहरण निचे दिया जा रहा है। 


{% highlight html %}
<html> 
<head>
<title>Image with alternative text</title>
</head>
<body>
<a href="www.besthinditutorials.com">
<img src="image-url"></a>
</body>
</html> 
{% endhighlight %}











