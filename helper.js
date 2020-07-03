function setSeats() {
  if (seats.value > 10) {
    $('#seats').val(10);
    return;
  }
  noOfSeats = Number(seats.value);
  //reset to intial
  reset();
}
reset = () => {
  $('.paynow').hide();
  for (let i = 0; i < selected.length; i++) {
    console.log(selected[i]);
    $('#' + selected[i]).removeClass('active');
    noOfselectedseats--;
    prices = 0;
    $('.prices').text('Total:' + prices);
  }
};

function selectNext() {
  console.log({ selected });
  let first = selected.shift();
  $('#' + first).removeClass('active');
  noOfselectedseats--;
}

function setPrices(status) {
  if (status.includes('executive')) {
    prices += 200;
  } else if (status.includes('club')) {
    prices += 300;
  }
  $('.prices').text('Total:' + prices);
}

$(document).ready(function () {
  $('.paynow').hide();
});

function displayPayButton(selected, total) {
  if (selected === total) {
    $('.paynow').show();
  }
}
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
