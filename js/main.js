function counterPlus() {
  var $counter = document.getElementById("counter").value++;
  if ($counter > 15) {
    alertCount($counter);
  }
}

function counterMinus() {
  var $counter = document.getElementById("counter").value--;
}
function counterZero() {
  var $counter = (document.getElementById("counter").value = 0);
}

function alertCount($number) {
  alert("Counter : " + $number);
}
function changeBg() {
  var $color = document.getElementById("colorBg").value;
  document.getElementById("color").style.backgroundColor = $color;
}
function clearColor() {
  document.getElementById("colorBg").value = "#FFFFFF";
  changeBg();
}
function insertInTable() {
  var table = document.getElementById("table");
  var row = table.insertRow(1);
  var name = row.insertCell(0);
  var age = row.insertCell(1);
  const names = ["Andreas", "Marios", "Ilias", "Minas"];

  name.innerHTML = names[Math.floor(Math.random() * names.length)];

  age.innerHTML = Math.floor(Math.random() * 100);
}
