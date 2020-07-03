let selected = [];
let prices = 0;
let noOfSeats = 1;
let noOfselectedseats = 0;
const alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i + 65));
createNRows = (count, divname) => {
  for (let i = 0; i < count; i++) {
    createNdivs(15, i, divname);
  }
};
createNdivs = (count, start, parent) => {
  let a = document.createElement('div');
  a.className = 'parent';
  let chardiv = document.createElement('div');
  chardiv.innerHTML = alphabet[start];
  chardiv.className = 'alphabets';
  a.appendChild(chardiv);
  for (let i = 0; i < count; i++) {
    //console.log(i);
    divid = start * count + i + 1;
    let x = document.createElement('div');
    x.innerHTML = i + 1;
    if (start === 1 || start > 5) x.className = 'available';
    else x.className = 'initial';
    x.id = parent + divid;
    x.onclick = dynamicEvent;
    a.appendChild(x);
    document.getElementById(parent).appendChild(a);
  }
};
createNRows(2, 'club');
createNRows(8, 'executive');
// createNdivs(8);
function handleClick(i) {
  console.log('inhandleclick', i);
}

function dynamicEvent(e) {
  var status = $(event.currentTarget).attr('id');
  console.log('37', $(event.currentTarget).hasClass('available'));
  if (
    $(event.currentTarget).hasClass('available') &&
    noOfselectedseats < noOfSeats
  ) {
    noOfselectedseats++;
    console.log('inDynamicEvent', status);
    selected.push(status);
    //   this.classList += 'active';
    //   this.innerHTML = 'Dynamic event success.';
    this.className += ' active';
    console.log({ selected });

    //createNdivs(selected.length, 0, 'final');
    if (status.includes('executive')) {
      prices += 200;
    } else if (status.includes('club')) {
      prices += 300;
    }
    $('.prices').text('Total:' + prices);
  }
}

function setSeats() {
  console.log(seats.value);
  if (seats.value > 10) {
    $('#seats').val(10);
    return;
  }
  noOfSeats = seats.value;
}
