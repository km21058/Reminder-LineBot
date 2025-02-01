function notify() {

    //urlはbotが一方的に送ってくるようにしたいので最後はpushになります。(返信用ならreply)
    var url = 'https://api.line.me/v2/bot/message/push';
  
    //botのチャネルトークンに関しては自分の作成したbotの管理画面のMessagingAPIの下の方にあります
    var channelToken = '**************';
    const youbi = ["日","月","火","水","木","金","土"];
    var text = "";
  
    var to = "*************"
    //B,カレンダーから取得する時間の設定
    const today = new Date();
    const monthNum = (today.getMonth())+1; //月
    const dateNum = today.getDate(); //日
    const day1 = today.getDay(); //曜日
    const dayArray = ['日','月','火','水','木','金','土'];
    const thisDate = monthNum + "月" + dateNum + "日"; //当日の日付を文字列に変換
    text += "おはようございます。\n"+"今日は" + thisDate + "(" + dayArray[day1] + ")"+"です\n"; 
  
    
    var date = new Date();
    date.setDate(date.getDate());
    var dayIndex = date.getDay();
    var day = ["日", "月", "火", "水", "木", "金", "土"];
    Logger.log(date.getDate());
  
    if (day[dayIndex] == "月") {
      text += "--【日程】--\n（１〜２）英語ⅢA\n（３〜４）数学ⅢB\n（５〜６）体育Ⅲ\n------";
    }
  
    if (day[dayIndex] == "火") {
      text += "--【日程】--\n（１〜２）計算機システム\n（３〜４）回路理論Ⅰ\n（５〜６）数学ⅢA\n（７）HR\n------";
    }
  
    if (day[dayIndex] == "水" ) {
      text += "--【日程】--\n（１〜２）ソフトウェアデザイン演習Ⅰ\n（３〜４）創造工学Ⅲ\n（５〜６）政治経済\n（７〜８）物理Ⅱ\n------";
    }
  
    if (day[dayIndex] == "木" ) {
      text += "--【日程】--\n（１〜２）電気工学Ⅰ\n（３〜４）国語Ⅲ\n（５〜７）情報科学工学実験Ⅱ\n------";
    }
    
    if (day[dayIndex] == "金" ) {
      text += "--【日程】--\n（１〜２）数学ⅢA\n（３〜４）英語ⅢB\n（５〜６）プログラミングⅡ\n------";
    }  
    var messages = [{
      'type': 'text',
      'text': text,
    }];
  
    if ((day[dayIndex] == "月") || (day[dayIndex] == "火") || (day[dayIndex] == "水")|| (day[dayIndex] == "木")|| (day[dayIndex] == "金")){
  
      UrlFetchApp.fetch(url, {
        'headers': {
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + channelToken,
        },
        'method': 'post',
        'payload': JSON.stringify({
          "to" : to,
          'messages': messages,
        }),
      });
    }
  }
  
  