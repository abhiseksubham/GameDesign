var children = [
  { num: 6, name: 'me', phone: 7 },
  { num: 8, name: 'him', phone: 9 },
];
let selected = [];
createNRows = count => {
  for (let i = 0; i < count; i++) {
    createNdivs(count, i, 'container');
  }
};
createNdivs = (count, start, parent) => {
  let a = document.createElement('div');
  a.className = 'parent';
  for (let i = 0; i < count; i++) {
    //console.log(i);
    divid = start * 5 + i + 1;
    let x = document.createElement('div');
    x.innerHTML = divid;
    x.className = 'initial';
    x.id = divid;
    x.onclick = dynamicEvent;
    a.appendChild(x);
    // htmlchunk += '<div class="initial">1</div>';
    document.getElementById(parent).appendChild(a);
  }
};
createNRows(5);
// createNdivs(8);
function handleClick(i) {
  console.log('inhandleclick', i);
}

function dynamicEvent(e) {
  var status = $(event.currentTarget).attr('id');
  console.log('inDynamicEvent', status);
  selected.push(status);
  //   this.classList += 'active';
  //   this.innerHTML = 'Dynamic event success.';
  this.className += ' active';
  console.log({ selected });

  createNdivs(selected.length, 0, 'final');
}
