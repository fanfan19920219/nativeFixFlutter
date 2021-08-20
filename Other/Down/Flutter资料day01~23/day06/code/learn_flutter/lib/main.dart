import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:learn_flutter/day03/02_%E6%96%87%E6%9C%AC%E7%9A%84Widget.dart';
import 'day02/02_statefullWidget综合练习.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HYHomePage(),
    );
  }
}

class HYHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("基础Widget"),
      ),
      body: HYHomeContent(),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () => print("FloatingActionButton Click"),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}


class HYHomeContent extends StatefulWidget {
  @override
  _HYHomeContentState createState() => _HYHomeContentState();
}

class _HYHomeContentState extends State<HYHomeContent> {
  final imageURL = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583340863953&di=46c8127502fa80464eb9b65396f61f97&imgtype=0&src=http%3A%2F%2Fwww.mux5.com%2Fpicture%2F3881ad96ba228dcd6c05acf0b2af5ef9.jpg";

  @override
  Widget build(BuildContext context) {
    return Image.asset("assets/images/juren.jpeg");
//    return Image(
//      // 1.在Flutter项目中创建一个文件夹,存储图片
//      // 2.在pubspec.yaml进行配置
//      // 3.使用图片
//      image: AssetImage("assets/images/juren.jpeg"),
//    );
  }
}

class ImageDemo01 extends StatelessWidget {
  const ImageDemo01({
    Key key,
    @required this.imageURL,
  }) : super(key: key);

  final String imageURL;

  @override
  Widget build(BuildContext context) {
    // Image.network(imageURL)
    return Image(
      color: Colors.green,
      colorBlendMode: BlendMode.colorDodge,
      image: NetworkImage(imageURL),
      width: 200,
      height: 200,
      fit: BoxFit.contain,
      repeat: ImageRepeat.repeatY,
//      alignment: Alignment.bottomCenter,
//    范围: -1 1
      alignment: Alignment(0, 0),
    );
  }
}


