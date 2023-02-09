function randomColor() {
  let ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var range = ss.getActiveRange();
  var column = range.getColumn()
  var lineStart = range.getRow();
  var lineEnd = range.getLastRow();
  //optionnal if you want to verfify the range
  //Logger.log(column+" - "+lineStart+" - "+lineEnd);

  if (lineStart == lineEnd){
    var range = ss.getActiveCell();

    var m = m || 6; s = '', r = 'abcdef0123456789';
    for (var j=0; j < m; j++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    Logger.log(s);

    range.setBackground("#"+s);
  }
  else{
  for (i = lineStart ; i < lineEnd+1 ; i ++){
    Logger.log([i]+"-"+column);
    let cell = ss.getRange([i],column);

    var m = m || 6; s = '', r = 'abcdef0123456789';
    for (var j=0; j < m; j++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    Logger.log(s);

    cell.setBackground("#"+s);
    }
  }
}
