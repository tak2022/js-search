const familylist =[
    {value:'300万円',view:'300万円'},
    {value:'325万円',view:'325万円'},
    {value:'350万円',view:'350万円'},
    {value:'375万円',view:'375万円'},
    {value:'400万円',view:'400万円'},
    {value:'425万円',view:'425万円'},
    {value:'450万円',view:'450万円'},
    {value:'475万円',view:'475万円'},
    {value:'500万円',view:'500万円'},
    {value:'525万円',view:'525万円'},
    {value:'550万円',view:'550万円'},
    {value:'575万円',view:'575万円'},
    {value:'600万円',view:'600万円'},
    {value:'625万円',view:'625万円'},
    {value:'650万円',view:'650万円'},
    {value:'675万円',view:'675万円'},
    {value:'700万円',view:'700万円'},
    {value:'725万円',view:'725万円'},
    {value:'750万円',view:'750万円'},
    {value:'775万円',view:'775万円'},
    {value:'800万円',view:'800万円'},
    {value:'825万円',view:'825万円'},
    {value:'850万円',view:'850万円'},
    {value:'875万円',view:'875万円'},
    {value:'900万円',view:'900万円'},
    {value:'925万円',view:'925万円'},
    {value:'950万円',view:'950万円'},
    {value:'975万円',view:'975万円'},
    {value:'1000万円',view:'1000万円'},
    {value:'1100万円',view:'1100万円'},
    {value:'1200万円',view:'1200万円'},
    {value:'1300万円',view:'1300万円'},
    {value:'1400万円',view:'1400万円'},
    {value:'1500万円',view:'1500万円'},
    {value:'1600万円',view:'1600万円'},
    {value:'1700万円',view:'1700万円'},
    {value:'1800万円',view:'1800万円'},
    {value:'1900万円',view:'1900万円'},
    {value:'2000万円',view:'2000万円'},
    {value:'2100万円',view:'2100万円'},
    {value:'2200万円',view:'2200万円'},
    {value:'2300万円',view:'2300万円'},
    {value:'2400万円',view:'2400万円'},
    {value:'2500万円',view:'2500万円'},
];



// select要素を参照
const selectElement = document.querySelector('#family');

// option要素の初期表示を作成
let optionString = '<option value="">選択ください</option>';
// option要素を配列から作成
familylist.forEach((item) => {
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
  document.querySelector('.log2').innerHTML = message;
});