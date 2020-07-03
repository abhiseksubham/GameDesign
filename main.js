var children = [{num: 6, name: 'me', phone: 7},
                {num: 8, name: 'him', phone: 9}];

var gridsize = { width:15,  height:10 }
var rooms = [
    {width:4 , height :4, position : {x :2, y:2}, door : {x:3,y:3} }
    ,{width:4 , height :4, position : {x :10, y:5}, door : {x:0,y:0}}
]
Number.prototype.between = function(a, b) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return this > min && this < max;
  };

var table = document.createElement('table')

table.classList.add('tictacToe');

//create rows
for (let i =0;i<gridsize.height;i++){  
  var row = table.insertRow();

  for (let j =0; j< gridsize.width; j++){
    var cell = row.insertCell();
     if( checkifrooms(i,j) )
     {
        //check if first cell
        let rl = rooms.length;
        for(let k=0;k<rl;k++){
            if(i == rooms[k].position.x && j == rooms[k].position.y){
            cell.className = "active"
            cell.id = "start"
            }
        }
        cell.appendChild(document.createTextNode(''))
     }
     else if(checkifpaths(i,j)){
        cell.appendChild(document.createTextNode('&'));
     }
     else
     cell.appendChild(document.createTextNode('X'));
  } 
  document.getElementById('container').appendChild(table);
}

function checkifrooms(rowindex,colindex) {
    if(rowindex >=2 && rowindex <= 5 && colindex>=2 && colindex <=5)
    return true;
    else if(rowindex>=5 && rowindex <=8 && colindex>=10 && colindex<=13)
    return true;
    return false;
}


function checkifpaths(rowindex,colindex) {
    if(rowindex == 5 && colindex.between(5,10))
    return true;
    return false;
}

//handle clicks:

var start = document.getElementsByClassName("active")[0]
start.focus();
start.style.backgroundColor = 'green';
start.style.color = 'white';

document.onkeydown = checkKey;

function makemove(sibling) {
    if (sibling != null) {
        let rowidx = sibling.closest('tr').rowIndex;
        let colidx = sibling.cellIndex;
        console.log(sibling.closest('tr').rowIndex,sibling.cellIndex)
        if((colidx.between(1,6) && rowidx.between(1,6)) || ( colidx.between(5,10) && rowidx === 5) || (rowidx.between(4,9) && colidx.between(9,14)) )
        {
            start.focus();
            start.style.backgroundColor = '';
            start.style.color = '';
            start.className = ""
            sibling.focus();
            sibling.style.backgroundColor = 'green';
            sibling.style.color = 'white';
            start = sibling;
        }
    }
  }

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
    var idx = start.cellIndex;
    var nextrow = start.parentElement.previousElementSibling;
    if (nextrow != null) {
      var sibling = nextrow.cells[idx];
      makemove(sibling);
    }
  } else if (e.keyCode == '40') {
    // down arrow
    var idx = start.cellIndex;
    var nextrow = start.parentElement.nextElementSibling;
    if (nextrow != null) {
      var sibling = nextrow.cells[idx];
      makemove(sibling);
    }
  } else if (e.keyCode == '37') {
    // left arrow
    var sibling = start.previousElementSibling;
    makemove(sibling);
  } else if (e.keyCode == '39') {
    // right arrow
    var sibling = start.nextElementSibling;
    makemove(sibling);
  } else if (e.keyCode == '27'){
    var sibling = document.getElementById('start');
    makemove(sibling);
  }
}





