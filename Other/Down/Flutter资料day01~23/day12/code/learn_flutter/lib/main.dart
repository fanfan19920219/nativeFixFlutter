import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:learn_flutter/service/http_request.dart';

void main() => runApp(MyApp());

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
      body: HYHomeContent(),
    );
  }
}

class HYHomeContent extends StatefulWidget {
  @override
  _HYHomeContentState createState() => _HYHomeContentState();
}

class _HYHomeContentState extends State<HYHomeContent> {
  @override
  void initState() {
    super.initState();

    // 发送网络请求
    // 1.创建Dio对象
//    final dio = Dio();

    // 2.发送网络请求
//    dio.get("https://httpbin.org/get").then((res) {
//      print(res);
//    });
//
//    dio.post("https://httpbin.org/post").then((res) {
//      print(res);
//    });

    HttpRequest.request("/get",
            params: {"name": "why"})
        .then((res) {
      print(res);
    }).catchError((err) {});

    runCalc();
  }

  void runCalc() async {
    var result = await compute(calc, 100);
    print("---------: $result");
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}

int calc(int count) {
  int total = 0;
  print(count);
  for (int i = 0; i < count; i++) {
    total += i;
  }
  return total;
}
