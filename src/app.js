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
