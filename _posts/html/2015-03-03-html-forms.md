---
layout: post
title: "एचटीएमएल <strong>Forms</strong>"
subtitle: "To make a page <strong>interactive</strong>"
section: html
---

### Introduction to HTML forms 

किसी भी webpage पर यदि आप यूज़र से कोई information लेना चाहते है तो इसके लिए आप forms का इस्तेमाल करते है। उदाहरण के लिए जब भी आप कोई नयी email id create करते है तो सबसे पहले sign up form भरते है। ऐसा करके आप अपनी information webpage के द्वारा provide करते है। Forms यूज़र से input प्राप्त करने का सबसे common तरीका होता है। कोई भी form यूज़र से input लेता है और जब यूज़र उस form को submit करता है तो ये सारी information किसी database में store कर ली जाती है। User से information input करवाने के लिए आप कई प्रकार के form elements यूज़ कर सकते है। जैसे की text-box, radio button, drop-down list आदि। 

किसी भी webpage में forms create करने के लिए आप `<form>` tag यूज़ करते है। ये container tag होता है जो की पुरे form की beginning और ending define करता है। इस tag के अंदर अलग अलग form elements define किये जाते है। `<form>` tag के कुछ attributes के बारे में निचे दिया जा रहा है।


<div class ="table">

<table border="1" cellpadding="0" cellspacing="0" class="MsoTableGrid" style="border-collapse: collapse; border: none; mso-border-alt: solid windowtext .5pt; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt; mso-yfti-tbllook: 1184;">
 <tbody>
<tr>
  <td style="border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 104.65pt;" valign="top" width="140"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>&nbsp;Attribute&nbsp;</o:p></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 357.45pt;" valign="top" width="477"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>Explanation &nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 104.65pt;" valign="top" width="140"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>action &nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 357.45pt;" valign="top" width="477"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>इस attribute से आप define करते है की form submit होने पर क्या करना है। जैसे की यूज़र के form submit करते ही आप कोई दूसरे webpage में thank you message शो कर सकते है या कोई php script execute करवा सकते है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 104.65pt;" valign="top" width="140"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>method &nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 357.45pt;" valign="top" width="477"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>इस attribute से आप data को store करने का&nbsp;method define करते है। इस attribute की केवल&nbsp;2 values GET या&nbsp;POST&nbsp;हो सकती है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 104.65pt;" valign="top" width="140"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>target&nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 357.45pt;" valign="top" width="477"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>इससे आप form submission के बाद जो window show होगी वह define करते है।&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
</tbody></table>

</div>


Form elements आप `<input>` tag के द्वारा define करते है। इस tag के कुछ attributes होते है जो आप elements को configure करने के लिए यूज़ करते है। इनके बारे में निचे दिया जा रहा है। 


<div class="table">
<table border="1" cellpadding="0" cellspacing="0" class="MsoTableGrid" style="border-collapse: collapse; border: none; mso-border-alt: solid windowtext .5pt; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt; mso-yfti-tbllook: 1184;">
 <tbody>
<tr>
  <td style="border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 90.45pt;" valign="top" width="121"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>&nbsp;Attribute&nbsp;</o:p></div>
</td>
  <td style="border-left: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 371.65pt;" valign="top" width="496"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>Explanation &nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 90.45pt;" valign="top" width="121"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>name &nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 371.65pt;" valign="top" width="496"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>इस attribute से particular form element का नाम define किया जाता है। बाद में यही नाम server value को store करने के लिए यूज़ करता है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 90.45pt;" valign="top" width="121"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>type &nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 371.65pt;" valign="top" width="496"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>ये element का type show करता है। इससे ये भी पता चलता है की किस तरह की value input की जा सकती है। जैसे text-boxes के लिए type text होता है।&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 90.45pt;" valign="top" width="121"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>size&nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 371.65pt;" valign="top" width="496"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>इससे से आप किसी form element की size width में define करते है। जैसे की आप किसी text-box अपने according width दे सकते है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
<tr>
  <td style="border-top: none; border: solid windowtext 1.0pt; mso-border-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 90.45pt;" valign="top" width="121"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>value&nbsp;</o:p></div>
</td>
  <td style="border-bottom: solid windowtext 1.0pt; border-left: none; border-right: solid windowtext 1.0pt; border-top: none; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt; mso-border-top-alt: solid windowtext .5pt; padding: 0cm 5.4pt 0cm 5.4pt; width: 371.65pt;" valign="top" width="496"><div class="MsoNormal" style="margin-bottom: 0.0001pt;">
<o:p>ये किसी element की default value हो सकती है। जैसे की आप किसी text box के अंदर first name लिखा हुआ देखते है।&nbsp;&nbsp;&nbsp;&nbsp;</o:p></div>
</td>
 </tr>
</tbody></table>

</div>


आइये अब देखते है की इन tags और attributes को यूज़ करते हुए आप कैसे एक complete form create कर सकते है।





### Creating text boxes

HTML में forms के लिए text-boxes क्रिएट करना बहुत ही easy है। इसके लिए आप `<input>` tag के type attribute में text value define करते है। कोई भी default value देने के लिए जो text-box के अंदर show होगी आप value attribute यूज़ कर सकते है। यदि आप password input करने  के लिए text-box बना रहे है तो type password देना होगा। इसका उदाहरण निचे दिया जा रहा है।   
{% highlight html %}
<html>
<head>
<title>Text box demo</title>
</head>
<body>
<form>
Enter your email :<input type="text" value="Email..." name="email" size=" 20"> <br><br>
Enter your password :<input type="password" value="Password..." name="pass" size="20">
</form>
</body>
</html> 
{% endhighlight %}


### Creating buttons     

HTML में आप 4 तरह से buttons क्रिएट कर सकते है। इन्हे आप type attribute के द्वारा define करते है।इनके बारे में निचे दिया जा रहा है।    
Submit - ये button form submit करने के लिए यूज़ किया जाता है। ये button पुरे form के सभी elements की values को एक साथ server पर send कर देता है। आप type attribute में submit value define करके इस तरह का button क्रिएट कर सकते है।   
Reset - इस button से पुरे form के fields की values को reset करने के लिए यूज़ किया जाता है। Reset button create करने के लिए आप type attribute में reset value define करते है। 
Normal button - ये एक normal button होता है जिस पर click होते ही आप कोई भी action ले सकते है। इस तरह का button क्रिएट करने लिए आप type attribute के value button देते है। 
Image button - इस तरह के button में आप button के background में कोई image दे सकते है। इस तरह का button create करने के लिए आप type attribute की value image देते है। 

{% highlight html %}
<html>
<head>
<title>Button demo</title>
</head>
<body>
<form>
<input type="submit">
<input type="reset">
<input type="button" value="Click here">
<input type="image" value="image-file-path-here">
</form>
</body>
</html> 
{% endhighlight %}

### Creating radio buttons

Radio buttons के द्वारा यूज़र बिना keyboard के webpage को information provide करता है। Radio button एक गोल box होता है जिसे choose करके user अपनी choice बताता है। जैसे की यदि आप user के gender के बारे में जानना चाहते है तो आप 2 radio buttons create करके उनके नाम male और female दे सकते है। यूजर इनमे से कोई भी choose करके अपना gender बता सकता है। आप 2 या 2 से अधिक radio buttons को name attribute के द्वारा connect कर देते है ताकि user एक समय पर केवल एक ही radio button select सके। जिन radio buttons को आप आपस में connect करना चाहते उनके आप name same देते है। 
Radio button क्रिएट करने के लिए आप `<input>` tag के type attribute की value radio देते है। Name attribute में radio button का नाम दिया जाता है। जैसा की मैने ऊपर बताया यदि आप Radio buttons का group बनाना चाहते है ताकि user एक बार में सिर्फ एक ही radio button select कर सके तो ऐसी situation में आप सभी radio buttons को एक ही नाम देते है। इसका उदाहरण निचे दिया जा रहा है।
{% highlight html %}
<html>
<head>
<title>Radio Button Demo </title>
</head>
<body>
<form>
Select you Gender: <br>
 <input type="radio" name="gender"> Male 
<input type="radio" name="gender"> Female
</form>
</body>
</html> 
{% endhighlight %}

### Example

{% highlight html %}
<label>Marital status</label>
<label>
  <input type="radio" name="status">
  Single
</label>
<label>
  <input type="radio" name="status">
  Married
</label>
<label>
  <input type="radio" name="status">
  Divorced
</label>
<label>
  <input type="radio" name="status">
  Widowed
</label>
{% endhighlight %}

<div class="result">
  <label>Marital status</label>
  <br>
  <label>
    <input type="radio" name="status">
    Single
  </label>
  <br>
  <label>
    <input type="radio" name="status">
    Married
  </label>
  <br>
  <label>
    <input type="radio" name="status">
    Divorced
  </label>
  <br>
  <label>
    <input type="radio" name="status">
    Widowed
  </label>
</div>

Because all radio buttons use the same _value_ for their `name` attribute (in this case the value `"status"`), selecting one option will unselect all other ones. Radio buttons are said to be **mutually exclusive**.

#### Difference between radio buttons and checkboxes

While a checkbox exists **on its own**, radio buttons can only appear as a **list** (which means having at least _2_ options).

Also, clicking a checkbox is **optional** while choosing one of the radio buttons is **mandatory**. That's why it is impossible to uncheck a radio button unless choosing a sibling option. But in the end, one of the radio buttons is always selected.


### Creating drop down list 

Drop down list create करने के लिए आप `<select>` tag इस्तेमाल करते है। इस tag को form tag के अंदर define किया जाता है। ये tag drop down list का structure क्रिएट करता है। Drop down list की values define करने के लिए `<option>` tag को define किया जाता है। आप जितने list item add करना चाहते है उतने ही `<option>` tag define करते है। `<option>` tag को `<select>` tag में define किया जाता है। इसका उदाहरण निचे दिया गया है।    
{% highlight html %}
<html>
<head>
<title>Drop down list demo </title>
</head>
<body>
<form>
<select>
<option>Select</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
</select>
</form>
</body>
</html> 
{% endhighlight %}

### Example

{% highlight html %}
<select>
  <option>January</option>
  <option>February</option>
  <option>March</option>
  <option>April</option>
  <option>May</option>
  <option>June</option>
  <option>July</option>
  <option>August</option>
  <option>September</option>
  <option>October</option>
  <option>November</option>
  <option>December</option>
</select>
{% endhighlight %}

<div class="result">
  <select>
    <option>January</option>
    <option>February</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
    <option>December</option>
  </select>
</div>

### Creating check boxes 

Check boxes के द्वारा किसी भी user को multiple options को choose करने के facility दी जाती है। जैसे की यदि आप चाहते है की user multiple courses choose करे तो आप check boxes create कर सकते है और user उन्हें select कर सकता है।  
Check boxes क्रिएट करना बहुत ही आसान होता है। इसके लिए आप `<input>` tag के type attribute में check box value देते है और Name attribute में check-box का नाम देते है। Value attribute की value भी आप दे सकते है। इसका उदाहरण निचे दिया गया है।
{% highlight html %}
<html>
<head>
<title>Check box demo </title>
</head>
<body>
<form>
<input type="checkbox" name="MCA" > MCA 
<input type="checkbox" name="BTECH"> Btech 
<input type="checkbox" name="BCA">BCA
<input type="checkbox" name="BCA">M. tech
</form>
</body>
</html> 
{% endhighlight %}

### Example 

{% highlight html %}
<input type="checkbox"> Remember me
{% endhighlight %}

<div class="result">
  <input type="checkbox"> Remember me
</div>


### Text inputs

Almost all forms require **textual** input from users, in order for them to enter their name, email, password, address... Text form controls come in different variations:

<div class="table">
  <table>
    <tr>
      <th>Text</th>
      <td><code>&lt;input type="text"&gt;</code></td>
      <td><input type="text"></td>
      <td>Allows any type of character</td>
    </tr>
    <tr>
      <th>Email</th>
      <td><code>&lt;input type="email"&gt;</code></td>
      <td><input type="email"></td>
      <td>Might display a warning if an invalid email is entered</td>
    </tr>
    <tr>
      <th>Password</th>
      <td><code>&lt;input type="password"&gt;</code></td>
      <td><input type="password"></td>
      <td>Shows dots as characters</td>
    </tr>
    <tr>
      <th>Number</th>
      <td><code>&lt;input type="number"&gt;</code></td>
      <td><input type="number"></td>
      <td>Up/Down keyboard keys can be used</td>
    </tr>
    <tr>
      <th>Telephone</th>
      <td><code>&lt;input type="tel"&gt;</code></td>
      <td><input type="text"></td>
      <td>Can trigger an autofill</td>
    </tr>
    <tr>
      <th>Multiple line text</th>
      <td><code>&lt;textarea&gt;&lt;/textarea&gt;</code></td>
      <td><textarea></textarea></td>
      <td>Can be resized</td>
    </tr>
  </table>
</div>

### Example: a complete signup form

{% highlight html %}
<form action="/signup" method="POST">
  <p>
    <label>Title</label>
    <label>
      <input type="radio" name="title" value="mr">
      Mr
    </label>
    <label>
      <input type="radio" name="title" value="mrs">
      Mrs
    </label>
    <label>
      <input type="radio" name="title" value="miss">
      Miss
    </label>
  </p>
  <p>
    <label>First name</label>
    <input type="text" value="first_name">
  </p>
  <p>
    <label>Last name</label>
    <input type="text" value="last_name">
  </p>
  <p>
    <label>Email</label>
    <input type="email" value="email">
  </p>
  <p>
    <label>Phone number</label>
    <input type="tel" value="phone">
  </p>
  <p>
    <label>Password</label>
    <input type="password" value="password">
  </p>
  <p>
    <label>Confirm your password</label>
    <input type="password" value="password_confirm">
  </p>
  <p>
    <label>Country</label>
    <select>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
      <option>Italy</option>
      <option>Japan</option>
      <option>Russia</option>
      <option>United Kingdom</option>
      <option>United States</option>
    </select>
  </p>
  <p>
    <label>
      <input type="checkbox" value="terms">
      I agree to the <a href="/terms">terms and conditions</a>
    </label>
  </p>
  <p>
    <button>
      Sign up
    </button>
  </p>
</form>
{% endhighlight %}

<div class="result">
  <form action="/signup" method="POST">
    <p>
      <label>Title</label>
      <label>
        <input type="radio" name="title" value="mr">
        Mr
      </label>
      <label>
        <input type="radio" name="title" value="mrs">
        Mrs
      </label>
      <label>
        <input type="radio" name="title" value="miss">
        Miss
      </label>
    </p>
    <p>
      <label>First name</label>
      <input type="text">
    </p>
    <p>
      <label>Last name</label>
      <input type="text">
    </p>
    <p>
      <label>Email</label>
      <input type="email">
    </p>
    <p>
      <label>Phone number</label>
      <input type="tel">
    </p>
    <p>
      <label>Password</label>
      <input type="password">
    </p>
    <p>
      <label>Confirm your password</label>
      <input type="password">
    </p>
    <p>
      <label>Country</label>
      <select>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
        <option>Italy</option>
        <option>Japan</option>
        <option>Russia</option>
        <option>United Kingdom</option>
        <option>United States</option>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox">
        I agree to the <a href="/terms">terms and conditions</a>
      </label>
    </p>
    <p>
      <button>
        Sign up
      </button>
    </p>
  </form>
</div>


