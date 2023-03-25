const familylist =[
    {value2:'300万円',view2:'300万円'},
    {value2:'325万円',view2:'325万円'},
    {value2:'350万円',view2:'350万円'},
    {value2:'375万円',view2:'375万円'},
    {value2:'400万円',view2:'400万円'},
    {value2:'425万円',view2:'425万円'},
    {value2:'450万円',view2:'450万円'},
    {value2:'475万円',view2:'475万円'},
    {value2:'500万円',view2:'500万円'},
    {value2:'525万円',view2:'525万円'},
    {value2:'550万円',view2:'550万円'},
    {value2:'575万円',view2:'575万円'},
    {value2:'600万円',view2:'600万円'},
    {value2:'625万円',view2:'625万円'},
    {value2:'650万円',view2:'650万円'},
    {value2:'675万円',view2:'675万円'},
    {value2:'700万円',view2:'700万円'},
    {value2:'725万円',view2:'725万円'},
    {value2:'750万円',view2:'750万円'},
    {value2:'775万円',view2:'775万円'},
    {value2:'800万円',view2:'800万円'},
    {value2:'825万円',view2:'825万円'},
    {value2:'850万円',view2:'850万円'},
    {value2:'875万円',view2:'875万円'},
    {value2:'900万円',view2:'900万円'},
    {value2:'925万円',view2:'925万円'},
    {value2:'950万円',view2:'950万円'},
    {value2:'975万円',view2:'975万円'},
    {value2:'1000万円',view2:'1000万円'},
    {value2:'1100万円',view2:'1100万円'},
    {value2:'1200万円',view2:'1200万円'},
    {value2:'1300万円',view2:'1300万円'},
    {value2:'1400万円',view2:'1400万円'},
    {value2:'1500万円',view2:'1500万円'},
    {value2:'1600万円',view2:'1600万円'},
    {value2:'1700万円',view2:'1700万円'},
    {value2:'1800万円',view2:'1800万円'},
    {value2:'1900万円',view2:'1900万円'},
    {value2:'2000万円',view2:'2000万円'},
    {value2:'2100万円',view2:'2100万円'},
    {value2:'2200万円',view2:'2200万円'},
    {value2:'2300万円',view2:'2300万円'},
    {value2:'2400万円',view2:'2400万円'},
    {value2:'2500万円',view2:'2500万円'}
];



// select要素を参照
const selectElement = document.querySelector('#family');

// option要素の初期表示を作成
let optionString = '<option value="">選択ください</option>';
// option要素を配列から作成
familylist.forEach((item) => {
  // 都道府県ごとにvalueとnameを反映
  optionString +=
    `<option value="${item.value2}">${item.view2}</option>`;
});
// option要素をselect要素内に追加
selectElement.innerHTML = optionString;

// 変更時のイベント
selectElement.addEventListener('change', (event) => {
  // 現在の値を取得
  const value = event.target.value2;

  // メッセージを作成
  const message = value === '' ? '選択されていません' : `選択されているのは ${value} です`;

  // 画面に表示
  document.querySelector('.log2').innerHTML = message;
});