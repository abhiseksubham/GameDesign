let selected = [];
let prices = 0;
let noOfSeats = 1;
let noOfselectedseats = 0;
let selectedCategory = null;
const alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i + 65));

createNRows(2, 'club');
createNRows(8, 'executive');

function dynamicEvent(e) {
  var status = $(event.currentTarget).attr('id');
  //select only from a single category
  if (noOfselectedseats >= 1 && !status.includes(selectedCategory)) {
    return;
  } else if (noOfselectedseats === noOfSeats) {
    selectNext(selected);
  }
  if (
    $(event.currentTarget).hasClass('available') &&
    noOfselectedseats < noOfSeats
  ) {
    if (noOfselectedseats === 0) {
      selectedCategory = status.includes('executive') ? 'executive' : 'club';
    }
    noOfselectedseats++;
    displayPayButton(noOfselectedseats, noOfSeats);
    selected.push(status);
    setPrices(status);
    this.className += ' active';
  }
}
