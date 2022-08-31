import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final _formKey = GlobalKey<FormState>();
  String userEmail = '';
  String userName = '';
  String password = '';

  void _trySubmit() {
    bool _isValid = _formKey.currentState!.validate();
    FocusScope.of(context).unfocus();
    if (_isValid) {
      _formKey.currentState!.save();
    }
    print(userEmail);
    print(userName);
    print(password);
  }

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
                key: _formKey,
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
                          return 'Password must be atleast 7 characters';
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
                      onPressed: _trySubmit,
                      child: Text('Submit Form'),
                    ),
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
