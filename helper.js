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
    $('#' + selected[i]).removeClass('active');
    //noOfselectedseats--;
    prices = 0;
    $('.prices').text('Total:' + prices);
  }
  noOfselectedseats = 0;
  isSelectFew = false;
  selectedCategory = null;
  selected = [];
};
//remove previous single element
function selectNext() {
  if (selected.length === 0) {
    return;
  }
  let first = selected.shift();
  $('#' + first).removeClass('active');
  noOfselectedseats--;
  if (!isselectFew) return selectNext();
}

removeAllPrevious = () => {
  if (selected.length === 0) {
    return;
  }
  let first = selected.shift();
  $('#' + first).removeClass('active');
  noOfselectedseats--;
  return removeAllPrevious();
};

removeOnePrevious = () => {
  let first = selected.shift();
  $('#' + first).removeClass('active');
  noOfselectedseats--;
};
//always check only from selected
function setPrices(status) {
  if (selected.length !== noOfSeats) {
    return;
  }
  prices = 0;
  for (let i = 0; i < selected.length; i++) {
    if (selected[i].includes('executive')) {
      prices += 200;
    } else if (selected[i].includes('club')) {
      prices += 300;
    }
  }
  $('.prices').text('Total:' + prices);
  //   $('.paynow').show();
}

$(document).ready(function () {
  $('.paynow').hide();
});

function displayPayButton(selected, total) {
  if (selected === total) {
    $('.paynow').show();
  }
}
createNRows = (count, divname, col) => {
  for (let i = 0; i < count; i++) {
    createNdivs(col, i, divname);
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
    else if (Math.round(Math.random() * 10) % 2 == 0) {
      x.className = 'available';
    } else x.className = 'initial';
    x.id = parent + divid;
    x.onclick = dynamicEvent;
    a.appendChild(x);
    document.getElementById(parent).appendChild(a);
  }
};

clearreset = () => {
  $('.paynow').hide();
  for (let i = 0; i < selected.length; i++) {
    $('#' + selected[i]).removeClass('active');
    noOfselectedseats = 0;
    prices = 0;
    $('.prices').text('Total:' + prices);
  }
};
