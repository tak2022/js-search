const moneylist =[
    {value:300,view:'300万円'}
];

// select要素を参照
const selectElement = document.querySelector('#money');

// option要素の初期表示を作成
let optionString = '<option value="">選択ください</option>';
// option要素を配列から作成
PREF_LIST.forEach((item) => {
  // 都道府県ごとにvalueとnameを反映
  optionString +=
    `<option value="${item.value}">${item.view}</option>`;
});
// option要素をselect要素内に追加
selectElement.innerHTML = optionString;

// 変更時のイベント
selectElement.addEventListener('change', (event) => {
  // 現在の値を取得
  const value = event.target.value;

  // メッセージを作成
  const message = value === '' ? '選択されていません' : `選択されているのは ${value} です`;

  // 画面に表示
  document.querySelector('.log').innerHTML = message;
});