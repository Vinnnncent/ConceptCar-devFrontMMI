var downParallax = document.getElementsByClassName("downParallax");
var upParallax = document.getElementsByClassName("upParallax");
var leftParallax = document.getElementsByClassName("leftParallax");
var rightParallax = document.getElementsByClassName("rightParallax");

var overflowRight = document.getElementsByClassName("overflowRight");
var overflowdown = document.getElementsByClassName("overflowDown");

new simpleParallax(downParallax, {
  scale: 2
});
new simpleParallax(leftParallax, {
  orientation: "left"
});
new simpleParallax(rightParallax, {
  orientation: "right",
  scale: 3
});
new simpleParallax(overflowRight, {
  overflow: true,
  orientation: "right",
  scale: 4
});
new simpleParallax(overflowDown, {
  overflow: true,
  orientation: "down",
  scale: 4
});

var img1 = new Waypoint({
  element: document.getElementById("img1"),
  handler: function(direction) {
    this.element.classList.add("imgLastForward");
    console.log(direction);
  },
  offset: "75%"
});

var img2 = new Waypoint({
  element: document.getElementById("img2"),
  handler: function(direction) {
    this.element.classList.add("imgLastBackward");
    console.log(direction);
  },
  offset: "75%"
});

var img3 = new Waypoint({
  element: document.getElementById("img3"),
  handler: function(direction) {
    this.element.classList.add("imgLastForward");
    console.log(direction);
  },
  offset: "75%"
});

var img4 = new Waypoint({
  element: document.getElementById("img4"),
  handler: function(direction) {
    this.element.classList.add("imgLastBackward");
    console.log(direction);
  },
  offset: "75%"
});
