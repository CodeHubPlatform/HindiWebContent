---
layout: post
title: "एचटीएमएल <strong>Tables</strong>"
subtitle: "For <strong>multi-dimensional</strong> data"
section: html
---


### Introduction to HTML tables 

किसी भी data को structured form में represent करने के लिये आप tables युज करते है। अपने webpage में tables include करके आप उसे ओर भी structured ओर attractive बना सकते है। HTML मे tables create करने के लिये आप `<table>` tag युज करते है। इस tag का एक sub tag होता है जिसे `<tr>` table row tag कहते है। <tr> tag का भी एक sub tag होता है जिसे `<td>` table data tag कहते है।

### Creating tables in HTML 

कोई भी table row ओर columns से मिलकर बनी होती है। इसलिये `<table>` tag के बाद row create करने के लिये आप `<tr>` tag युज करते है। आप जितनी rows create करना चाहते है उतने ही `<tr>` tag define करते है। Rows create करने के बाद आप rows मे columns create करते है। Columns create करने के लिये `<td>` tag का इस्तेमाल किया जाता है। आप जितने columns create करना चाहते है उतने ही `<td>` tags define करते है।

इसका उदाहरण नीचे दिया जा रहा है।
{% highlight html %}
<html>
<head>
<title> Table web page</title>
</head>
<body>
<table border="1"> 
<tr> 
<td>First row first column</td>
<td> First row second coloumn</td>
</tr>  
<tr>   
<td>Second row first column</td>
<td>Second row second column</td>
</tr> 
</table>
</body>
</html>
{% endhighlight %}

Table create करने के लिए आपको tags का order हमेशा ध्यान रखना चाहिए। सबसे पहले `<table>` tag आता है। इसके बाद `<tr>` tag आता है।  फिर उसके बाद `<th>`  और `<td>` tags आते है। `<th>` और `<td>` tags हमेशा `<tr>` tags के अंदर ही आएंगे।

एक बात आपको और ध्यान रखनी चाहिए की जब तक आप border attribute के द्वारा table की border define नहीं करते है तब तक table की border show नहीं होती है।




### Creating table headings

आप चाहे तो tables कि first row मे headings भी create कर सकते है। Heading text table के बाकी text से मोटा ओर बडा होता है। यदि आप कोई table create कर रहे है जो employees कि information store करती है तो आप Names ओर addresses आदि headings create कर सकते है। Heading create करने के लिये `<th>` tag युज किया जाता है। इसे table heading tag कहते है। इस tag मे आप जो text युज करते है वह webpage मे heading कि तरह show होती है। इस tag को `<tr>` tag के अंदर युज किया जाता है। इसका उदाहरण नीचे दिया जा रहा है। 
{% highlight html %}
<html>
<head>
<title>Table Heading Page</title>
</head>
<body>
<table border="1">
<tr>
<th> Names</th>
<th>Addresse</th> 
</tr> 
<tr> 
<td>Ram</td>
<td>Ayodhya</td>
</tr>
<tr>
<td>Krishn</td>
<td>Vrindavan</td>
</tr>
</table>
</body>
</html> 
{% endhighlight %}

### COLSPAN attribute  

आप चाहे तो किसी एक row के column को एक से ज्यादा columns मे भी divide कर सकते है। इसके लिये आप उससे पहले वाले column मे colspan attribute define करते है। जिस column मे आप colspan define करते है वो एक column उतने ही columns की जगह घेरता है। इसका उदाहरण नीचे दिया जा रहा है।      
{% highlight html %}
<html>
<head>
<title>Colspan WebPage </title>
</head>
<body>
<table border="1">
<tr>
<th>Names</th>
<th colspan ="2">Mobile No.</th>   
</tr> 
<tr>
<td>Ram</td> 
<td>4856456465486</td>
<td>1235713</td>
</tr>
<tr>
<td>Shyam</td> 
<td colspan ="2">12683124598</td>
</tr>
</table>
</body>
</html>  

{% endhighlight %}
ऊपर दिए गए उदाहरण को देखिये राम के pass 2 mobile numbers है। लेकिन श्याम के pass एक ही mobile number है। यदि आप normally table create करेंगे तो श्याम वाली row में एक column की जगह खाली बच जाएगी। ऐसे में table बिलकुल भी अच्छी नहीं लगेगी।  यदि आप चाहते है की श्याम वाली row का एक column ऊपर वाली row के दो columns को cover करे तो आप उस column में colspan attribute यूज़ करते है और जितने columns आप इस एक column से cover करना चाहते है उतनी ही integer values देते है। जैसे की मैने ऊपर दिए हुए example श्याम वाली row के एक column से राम वाली row के 2 columns cover किये है।


### ROWSPAN attribute 

ROWSPAN attribute भी colspan की तरह ही होता है। इसे आप `<tr>` tag में define करते है। इस attribute की आप जितनी values देते है वह एक row उतने ही columns की जगह घेरती है। इसका उदाहरण निचे दिया जा रहा है। 
{% highlight html %}
<html>
<head>
<title> Rowspan Webpage </title>
</head>
<body>
<table border="1">
<tr>
<th rowspan="2">Mens</th>
<td>Ram</td>
</tr>
<tr>
<td>Shyam</td>
</tr>
<tr>
<th rowspan="2">Womens</th>
<td>Sita</td>
</tr>
<tr>
<td>Gita</td>
</tr>
</table>
</html>
{% endhighlight %}


### Naming the table 

आप चाहे तो table का कोई नाम दे सकते है जिसे caption भी बोलते है। इसके लिए आप `<caption>` tag यूज़ करते है। इसे `<table>` tag के बाद define किया जाता है। इसका उदाहरण निचे दिया गया है। 
{% highlight html %}
<html>
<head>
<title>Naming the tables</title>
</head>
<body>
<table border="2">
<caption> MyTable</caption>
<tr>
<td> Vipin Sharma</td>
<td>India</td>
</tr>
</table>
</body>
</html>
{% endhighlight %}