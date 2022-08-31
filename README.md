![Flutter Forms](https://user-images.githubusercontent.com/55774240/187694979-387e0bd3-b1de-4d3f-88ef-96618fa104d0.png)
# Forms in Flutter

### See the code for this blog in action on ZAPP ! [click here](https://zapp.run/edit/flutterformsproject-z08064p0906?file=lib/main.dart)
> Zapp! is a free online sandbox environment for building & sharing Flutter applications, supporting all pub.dev packages, static analysis,
embedding, previewing and much more.

### Source Code [github](https://github.com/Lakhankumawat/FlutterForms)

## All you need to know

**In** this README i'll will be showing you guys the easiest way to create forms in flutter / dart and how to use them.<br>
The steps will be followed as :-

✔1. Creating a **Form Modal** <br>
✔2. Adding **elements**<br>
✔3. **Validating** Form <br>
✔4.  **Saving** Form Data

<img align="center" alt="intro" width="50%" 
src="https://user-images.githubusercontent.com/55774240/187693888-e1090788-64d6-42ca-bddb-8376aa772702.png">


# **1. Creating a** Form Modal

**As** you can see I have a main.dart file and in it I have a stateful widget because why not let's have one it's free ! just kidding 😅, we are using stateful widget cause we will be changing the state of our main screen by changing the form fields .So we're having a Scaffold inside it appbar as usual and a card with some styling and child **Form** inside it we have bunch of childrens **TextFormFields** These are simple TextFields but more conveniently designed for forms . It has a bunch of features which will be discussed as we proceed further.
<br>
We will be having three fields inside our form userEmail , userName and password respectively so three respective variables hold their values and update them.

```
import 'package:flutter/material.dart';

void main() {
 runApp(MyApp());
}

class MyApp extends StatefulWidget {
 @override
 _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
 String userEmail='';
 String userName='';
 String password='';
 @override
 Widget build(BuildContext context) {
   return MaterialApp(
     home: Scaffold(
       appBar: AppBar(
         title: Text('Flutter Forms'),
       ),
       body: Center(
         child: Card(
           shape: RoundedRectangleBorder(
             borderRadius: BorderRadius.all(
               Radius.circular(20),
             ),
           ),
           margin: EdgeInsets.all(30),
           child: Padding(
             padding: EdgeInsets.all(20),
             child: Form(
               child: Column(
                 mainAxisSize: MainAxisSize.min,
                 children: [
                   TextFormField(),
                   TextFormField(),
                   TextFormField(),
                 ],
               ),
             ),
           ),
         ),
       ),
     ),
   );
 }
}

```
# Output :

<img align="center" alt="intro" width="50%" 
src="https://user-images.githubusercontent.com/55774240/187693886-50cfa436-6244-48be-9648-5c80967ae15c.png">

# **2. Adding** elements

Lets go ahead and add something in these empty Text Form Fields
- Adding some decoration which is of type InputDecoration to add some label texts as hints for the user.
- In email address let's have keyboardtype of email address so it's easy for users to get  `@` `gmail` `.com` and other keywords
- We also have a **key** in each of our text fields ,these keys are used to identify a value of its particular type and have advantages when we have to uniquely identify a particular field.

```
child: Column(
                 mainAxisSize: MainAxisSize.min,
                 children: [
                   TextFormField(
                     key: ValueKey('email'),
                     keyboardType: TextInputType.emailAddress,
                     decoration: InputDecoration(
                       labelText: 'UserEmail',
                     ),
                   ),
                   TextFormField(
                     key: ValueKey('username'),
                     decoration: InputDecoration(
                       labelText: 'UserName',
                     ),
                   ),
                   TextFormField(
                     key: ValueKey('password'),
                     decoration: InputDecoration(
                       labelText: 'UserPassword',
                     ),
                     obscureText: true,
                   ),
                 ],
               ),

```
# Output :
<img align="center" alt="intro" width="50%" 
src="https://user-images.githubusercontent.com/55774240/187693841-62d33a1f-e48a-4e14-85ac-59409726678d.png">


# 3. **Validating** Form

So below we have added a **validator** In our form which checks whether the information the user has provided is valid , it is a void callback which takes the value which we type in textfield and checks whether the value typed in is null or doesn't match certain criteria. If so? we go ahead and return a message instead telling the user to match those conditions otherwise returning null value from the validator.

We have **onSaved** property in TextFormField which has a value as parameter and saves/copies this value in our variables which we made earlier , if our text fields have correct inputs.

We are also having a button which will submit the form and check whether the user has followed criteria in text fields , so let's go ahead and implement this .

```
child: Column(
                 mainAxisSize: MainAxisSize.min,
                 children: [
                   TextFormField(
                     validator: (value) {
                       if (value == null || !value.contains('@')) {
                         return 'Please enter a valid email address';
                       }
                       return null;
                     },
                     key: ValueKey('email'),
                     keyboardType: TextInputType.emailAddress,
                     decoration: InputDecoration(
                       labelText: 'UserEmail',
                     ),
                     onSaved: (value) {
                       userEmail = value as String;
                     },
                   ),
                   TextFormField(
                     validator: (value) {
                       if (value == null || value.length < 3) {
                         return 'Please enter a valid username';
                       }
                       return null;
                     },
                     key: ValueKey('username'),
                     decoration: InputDecoration(
                       labelText: 'UserName',
                     ),
                     onSaved: (value) {
                       userName = value as String;
                     },
                   ),
                   TextFormField(
                     validator: (value) {
                       if (value == null || value.length < 6) {
                         return 'Password must be at least 7 characters';
                       }
                       return null;
                     },
                     key: ValueKey('password'),
                     decoration: InputDecoration(
                       labelText: 'UserPassword',
                     ),
                     obscureText: true,
                     onSaved: (value) {
                       password = value as String;
                     },
                   ),
                   SizedBox(
                     height: 20,
                   ),
                   ElevatedButton(
                     onPressed: () {},
                     child: Text('Submit Form'),
                   ),
                 ],
               ),

```



To uniquely keep track of each input field and and validate it using a void function **_submitForm** as shown below we need to provide a **Global Key** . It uniquely identifies the Form, and allows validation.

Now our **GlobalKey** is of type **FormState** because we are dealing with forms and it will manage the state of the same.

From **_formKey** variable we can easily get access of **key** of each textfield and check whether it is validated or not just by using current state property and validating it which returns us a boolean variable i.e. whether form is validated or not.

If the form is valid then we go ahead and save it.


```
class _MyAppState extends State<MyApp> {
 // Create a global key that uniquely identifies the Form widget
 // and allows validation of the form.
 //
 // Note: This is a `GlobalKey<FormState>`,
 final _formKey = GlobalKey<FormState>();

 void _trySubmit() {
   bool _isValid = _formKey.currentState!.validate();
 
 }

```

**Note **: Mention this key inside **Form** widget like this ,
```
child: Form(
               key: _formKey,
```
# Output :
<img align="center" alt="intro" width="50%" 
src="https://user-images.githubusercontent.com/55774240/187693864-f6730d5f-9d28-473e-95e0-ce234b5f1b43.png">


# 4. **Saving** Form Data

👀 Can't wait to see the final results , me too !
So this is the final and easiest step. We call save property on our current state of form if it's validated and save our form values in our variables named `userName` `userEmail` and `password` respectively .
```
void _trySubmit() {
   bool _isValid = _formKey.currentState!.validate();
 
   if (_isValid) {
     _formKey.currentState!.save();
   }
 }

```
also last but not the least don't forget to call `_trySubmit` function in onPressed property of Elevated Button

```
ElevatedButton(
                     onPressed:_trySubmit,
                     child: Text('Submit Form'),
                   ),
```

# Output :
<img align="center" alt="intro" width="50%" 
src="https://user-images.githubusercontent.com/55774240/187693870-ecc88e12-5104-46e1-bb4f-185eda5e9725.png">

<hr>
<hr>

Please do Star 💛 and Contribute ✨ Repo if you wish to .

## 👋 Got Something to Tell Me?
I’m easily a click away on WhatsApp. But lemme pretend like I’m busy and give you my social media handles. Here!

[LinkedIn](https://www.linkedin.com/in/lakhan-kumawat-7414391a2/?)
[Twitter](https://twitter.com/KNKUMWT1)

<br>
<hr>
<h6 align="center">LakhanKumawat @2022 FlutterForms</h6>



