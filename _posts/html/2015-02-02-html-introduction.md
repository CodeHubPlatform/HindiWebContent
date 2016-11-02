---
layout: post
title: "<strong>एचटीएमएल<strong> का परिचय"
subtitle: "HTML is like <strong>Word</strong> but for the <strong>Web</strong>"
section: html
---


### Introduction to HTML 


HTML एक Hyper Text Markup Language है। इसे web pages create करने के लिए यूज़ किया जाता है। HTML Berners lee के द्वारा 1991 में create की गयी थी। आइये सबसे पहले HTML का मतलब समझने का प्रयास करते है। HTML की full form Hyper Text Markup Language होती है। इनमें से हर word को निचे detail से समझाया जा रहा है।

**HTML** stands for **H**yper**T**ext **M**arkup **L**anguage:

* **HyperText** means that it uses the HTTP part of the Internet
* **Markup** means the code you write is annotated with keywords
* **Language** means it can be read by both a human and a computer


### Hyper

Hyper का मतलब होता है की HTML sequence में नहीं काम करती है। जैसा की किसी programming language में होता है, एक statement के बाद अगला statement execute होगा। यदि कोई HTML file में link है और यूज़र उस पर press करता है तो वो execute हो जाती है। इससे कोई फर्क नहीं पड़ता है की उससे पहले कितने elements और या वो सभी load हुए है या नहीं। ये भी जरुरी नहीं की किसी एक HTML file से पहले दूसरी HTML file execute नहीं हो सकती है। सभी HTML files independent होती है।  



### Text


HTML text को format करके webpages के रूप में represent करने के लिए यूज़ की जाती है।  

### Markup

Markup का मतलब text formatting होता है। आप text को tags के द्वारा mark करते है। जैसे text को tags के द्वारा mark किया जाता है वैसे ही text web page में show होता है। जैसे की यदि आप किसी text को <h1 > tag में लिखेंगे तो webpage page पर वह text बड़ा और bold दिखाई देगा।     


### Language


HTML एक language है जो web development के लिए यूज़ की जाती है।  


### HTML versions 


अब तक HTML के बहुत से version industry में आ चुके है इनके बारे में निचे दिया जा रहा है।

### HTML 1.0  

ये HTML का पहला version था। उस समय बहुत कम लोग इस language के बारे में जानते थे। और HTML भी बहुत limited थी। 

### HTML 2.0 

इस version में HTML 1.0 के सभी features थे। इस version के साथ ही HTML website develop करने का बुनियादी माध्यम बन चुकी थी।

### HTML 3.0

इस version के आने तक HTML बहुत popular हो चुकी थी। इस version में browsers के साथ compatibility problem होने की वजह से इस version को रोक दिया गया था। 

### HTML 3.2 

इस version में पिछले version के बाद कुछ नए tags add किये गए। ये वो time था जब W3C ने website development के लिए HTML को standard घोषित किया था।  

### HTML 4.01

इस version में कुछ नए tags के साथ ही cascading style sheet को भी introduce किया गया था। इस समय HTML पूरी तरह modern language बन चुकी थी|

#### HTML 5.0

ये HTML का latest version है। इसमें multimedia support के लिए कुछ नए tags provide किये गए है।  
XHTML

ये version HTML 4.01 के बाद आया था। इसमें HTML के साथ XML को add किया गया था।    

### HTML tags 

एक HTML file tags और text का combination होती है। यदि आपको tags का concept समझ आ जाये तो आप HTML आसानी से समझ सकते है। Basically tag ये बताते है की text के साथ क्या करना है। एक tag एक specific purpose define करता है। हर task के लिए अलग अलग tags बनाये गए है। किसी भी tag के 2 part होते है। Opening tag शुरुआत में लगाया जाता है। इससे interpreter को ये पता चल जाता है की आप क्या करने वाले है। Opening tag के बाद वो text लिखा जाता है जिस पर ये tag apply हो रहा है। इसके बाद closing tag लिखा जाता है। Closing tag से interpreter को पता चलता है की इस tag का उपयोग यंही तक था। Closing tag को opening tag से differentiate करने के लिए closing tag में forward slash लगाया जाता है।Tags का basic structure निचे दिया जा रहा है।

{% highlight html %}
<tagName>   text   </tagName>
{% endhighlight %}

example <p> tag

{% highlight html %}
<p>If Tetris has taught me anything it's that errors pile up and accomplishments disappear.</p>
{% endhighlight %}


### Some basic tags 

निचे आपको HTML के कुछ basic tags दिए जा रहे है। ये वो tags है जो आप हर HTML file में commonly यूज़ करेंगे।   

<div class="table" style="border:0 none #666">

<table class="MsoTableGrid"><tbody style="border:0 none silver"><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Tag &nbsp;</o:p></div>
</td><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">Explanation &nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&lt;html&gt; &lt;/html&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">किसी भी HTML file की शुरुआत इसी tag से की जाती है। ये tag दर्शाता है की ये file एक HTML file है। बाकि सभी tags इस tag के अंदर आते है। ये tag program में सबसे आखिर में close किया जाता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;&lt;head&gt;&lt;/head&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">इस tag में document के बारे में information होती है। साथ ही यदि आपका web page कोई script apply करता है तो वो भी इसी tag के अंदर define की जाती है। ये tag हमेशा HTML tag के अंदर&nbsp;आता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;&lt;title&gt;&lt;/title&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">इस tag के द्वारा web page का title display किया जाता है। ये tag हमेशा head tag के अंदर आता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr><tr style="border:0 none silver"><td style="border:1px solid silver"><div class="MsoNormal">
<o:p style="border:0 none #666">&nbsp;&lt;body&gt;&lt;/body&gt;</o:p></div>
</td><td style="border-color:silver;border-bottom-width:1px;border-bottom-style:solid;border-right-width:1px;border-right-style:solid"><div class="MsoNormal">
<o:p style="border:0 none #666">जो भी text body tag में होती है, program के interpret होने के बाद&nbsp;वही display की जाती है। ये tag head&nbsp;tag के close होने के&nbsp;बाद में आता है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td></tr></tbody></table>
</div>



### A simple HTML program

{% highlight html %}
<html>
<head>
<title>My Page</title>
</head>
<body>
<h1>
My First Web Page
</h1>
</body>
</html>
{% endhighlight %}

### <!DOCTYPE> tag

कई बार HTML tag से पहले इस tag का इस्तेमाल किया जाता है। ये tag बताता है की आप कौनसा HTML version यूज़ कर रहे है। कुछ browsers security purpose से HTML के पुराने versions को support नहीं करते है। इसलिए ये tag HTML version के बारे में browser को information देता है। जिससे browsers appropriate action ले सके। 


### Executing HTML program 

* HTML program को execute करना बहुत ही आसान है। सबसे पहले आप अपने program को किसी text editor में लिख लीजिये। जैसे की notepad आदि। 

* इसके बाद उस program को .html extension के साथ save कीजिये।      

* इसके बाद आप उस save की गयी file को open करते है।

* इसके बाद आपका webpage browser में automatically open हो जाता है।