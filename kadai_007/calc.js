// 変数numが3の倍数の場合： “3の倍数です”
// 変数numが5の倍数の場合： “5の倍数です”
// 変数numが3と5の倍数の場合： “3と5の倍数です”
// それ以外の場合： 変数numの値を出力する
// 倍数の判定は、「%」を使用する

let num = 15;

switch (true){
  case num % 3 == 0 && num % 5 == 0:
    console.log("3と5の倍数です")
  break;
  case num % 3 == 0:
    console.log("3の倍数です")
  break;
  case num % 5 == 0:
    console.log("5の倍数です")
  break;
  default:
    console.log(num)
    break;
}