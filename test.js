let selected = [];
let prices = 0;
let noOfSeats = 1;
let noOfselectedseats = 0;
let selectedCategory = null;
let isSelectFew = false;
const alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i + 65));

createNRows(2, 'club');
createNRows(8, 'executive');

function dynamicEvent(e) {
  console.log(selectedCategory);
  let status = $(event.currentTarget).attr('id');
  //same button click --> ignore it
  if (selected.includes(status)) {
    return;
  }
  //select only from a single category
  if (noOfselectedseats >= 1 && !status.includes(selectedCategory)) {
    return;
  } else if (noOfselectedseats === noOfSeats) {
    //check if only one or more
    selectNext(selected);
  }
  if (
    $(event.currentTarget).hasClass('available') &&
    noOfselectedseats < noOfSeats
  ) {
    if (noOfselectedseats === 0) {
      selectedCategory = status.includes('executive') ? 'executive' : 'club';
    }
    if (isSelectFew) {
      selectFew($('#' + status));
    } else selectTogther(status);
  }
}
selectTogther = status => {
  clearreset();
  let element = $('#' + status);
  console.log(
    '!status.includes(selectedCategory',
    !status.includes(selectedCategory),
  );
  if (!selectedCategory) {
    selectedCategory = status.includes('executive') ? 'executive' : 'club';
  } //select only from a single category
  else if (!status.includes(selectedCategory)) {
    return;
  }
  console.log(checkifNSiblingsExistTog(element));
  if (checkifNSiblingsExistTog(element) && noOfSeats > 1) {
    for (let i = 0; i < noOfSeats && element.next(); i++) {
      element.addClass('active');
      noOfselectedseats++;
      selected.push(element[0].id);
      setPrices(element[0].id);
      element = element.next();
    }
    displayPayButton(noOfselectedseats, noOfSeats);
    return true;
  }
  //select current and few
  else {
    selectFew(element);
  }
};

function selectFew(element) {
  isSelectFew = true;
  console.log('selectFew', element);

  //terminating cases for recursion
  if (element.length === 0 || element.hasClass('initial')) {
    displayPayButton(noOfselectedseats, noOfSeats);
    return;
  } else if (noOfselectedseats === noOfSeats) {
    displayPayButton(noOfselectedseats, noOfSeats);
    return;
  }
  //if its not terminated , then
  else {
    element.addClass('active');
    noOfselectedseats++;
    if (element[0]) {
      selected.push(element[0].id);
      setPrices(element[0].id);
    }
    return selectFew(element.next());
  }
}
//also check if its avaialable
function checkifNSiblingsExistTog(el) {
  let result = true;
  for (let i = 0; i < noOfSeats; i++) {
    if (el.length === 0 || el.hasClass('initial')) {
      console.log('false');
      result = false;
      return;
    }
    el = el.next();
    console.log('checkifNSiblingsExistTog', el);
  }
  return result;
}
