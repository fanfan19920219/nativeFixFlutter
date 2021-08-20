import 'package:flutter/material.dart';
import 'package:provider/provider.dart';


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          primarySwatch: Colors.blue, splashColor: Colors.transparent),
      home: HYHomePage(),
    );
  }
}

class HYHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("列表测试"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            HYShowData01(),
            HYShowData02()
          ],
        ),
      ),
    );
  }
}

class HYShowData01 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blue,
      child: Text("当前计数: 100", style: TextStyle(fontSize: 30),),
    );
  }
}

class HYShowData02 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      child: Text("当前计数: 100", style: TextStyle(fontSize: 30),),
    );
  }
}