function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.class === "topnav") {
    x.class = "topnav responsive";
  } else {
    x.class = "topnav";
  }
}

export default myFunction;
