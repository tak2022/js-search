const familylist =[
    {value:'独身又は共働き',view:'独身又は共働き'},
    {value:'夫婦',view:'夫婦'},
    {value:'共働き＋子１人（高校生）',view:'共働き＋子１人（高校生）'},
    {value:'共働き＋子１人（大学生）',view:'共働き＋子１人（大学生）'},
    {value:'夫婦＋子１人（高校生）',view:'夫婦＋子１人（高校生）'},
    {value:'共働き＋子２人（大学生と高校生）',view:'共働き＋子２人（大学生と高校生）'},
    {value:'夫婦＋子２人（大学生と高校生）',view:'夫婦＋子２人（大学生と高校生）'}
];


// select要素を参照
const selectElement2 = document.querySelector('#family');

// option要素の初期表示を作成
let optionString2 = '<option value="">選択ください</option>';
// option要素を配列から作成
familylist.forEach((item) => {
  // 都道府県ごとにvalueとnameを反映
  optionString2 +=
    `<option value="${item.value}">${item.view}</option>`;
});
// option要素をselect要素内に追加
selectElement2.innerHTML = optionString2;

// 変更時のイベント
selectElement2.addEventListener('change', (event) => {
  // 現在の値を取得
  const value2 = event.target.value;

  // メッセージを作成
  const message2 = value2 === '' ? '選択されていません' : `選択されているのは ${value2} です`;

  // 画面に表示
  document.querySelector('.log2').innerHTML = message2;
});