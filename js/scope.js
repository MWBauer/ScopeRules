var x = 1;
function start() {
  var x = 5;
  console.log("local x in start is " + x);
  functionA(); //functionA has local x
  functionB(); //functionB uses global variable x
  functionA(); //functionA reinitializes local x
  functionB(); //global variable x retains its value
  document.writeln("<p>local x in start is " + x + "</p>");
}
function functionA() {
  var x = 25;
  document.writeln("<p>local x in functionA is " + x + " after entering functionA");
  ++x;
  document.writeln("<br/>local x in functionA is " + x + " before exiting functionA" + "</p>")
}
function functionB() {
  document.writeln("<p>global variable x is " + x + " on entering functionB");
  x *= 10;
  document.writeln("<br/>global variable x is " + x + " on exiting functionB" + "</p>");
}