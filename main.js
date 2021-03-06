/**
 * ① const 定数 = document.getElementById(HTMLで指定したid)を使って
 *    HTMLの要素をJavaScriptに持ってこよう。
 */
 const BUTTON1 = document.getElementById("ques1");
 const BUTTON2 = document.getElementById("ques2");
 const BUTTON3 = document.getElementById("ques3");
 const BUTTON4 = document.getElementById("ques4");
 const FEEDBACK = document.getElementById("feedback");
 
 // 1個目のボタンをchoice1で宣言して取得しよう/* ==この行の下に記述== */
 BUTTON1.onclick = function () {
   FEEDBACK.textContent = "惜しいです!!!不正解です";
 };
 
 BUTTON2.onclick = function () {
   FEEDBACK.textContent = "正解です。";
 };
 
 BUTTON3.onclick = function () {
   FEEDBACK.textContent = "惜しい！！不正解です。";
 };
 
 BUTTON4.onclick = function () {
   FEEDBACK.textContent = "不正解です。";
 };
 
 // 2個目のボタンをchoice2で宣言して取得しよう
 /* ==この行の下に記述== */
 
 // 3個目のボタンをchocie3で宣言して取得しよう
 /* ==この行の下に記述== */
 
 // divタグをfeedbackで宣言して取得しよう
 /* ==この行の下に記述== */
 
 /**
  * ② onclickイベントを書こう!
  *    JavaScriptではfunction () {} と書けば、関数が宣言されます。
  *    関数の中で、タグ要素.textContentに新しい文を代入しよう!!
  *    (ex. feedback.textContent = "回答"
  *
 
 // choice1のonclickイベントの処理を書こう
 /* ==この行の下に記述== */
 
 // choice1と同じ様にchoice2のonclickイベントの処理を書こう
 /* ==この行の下に記述== */
 
 //choice1と同じ様にchoice3のonclickイベントの処理を書こう
 /* ==この行の下に記述== */
 