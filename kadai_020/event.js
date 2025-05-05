// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // textを消す
  //text.style.display = 'none';
  text.textContent = 'ボタンをクリックしました';
  // li要素を新しく作成する
   //const childList = document.createElement('li');
  // 作成したli要素に「ボタンをクリックしました」というテキストを追加する
  //childList.textContent = 'ボタンをクリックしました';
  // 作成したli要素をtextの子要素として末尾に追加する
  //text.appendChild(childList);

});






