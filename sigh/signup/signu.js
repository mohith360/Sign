function myFunction() {
    var x1 = document.getElementById("pw");
    var x2 = document.getElementById("pwc");
    if (x1.type === "password") {
      x1.type = "text";
    } else {
      x1.type = "password";
    }
    if (x2.type === "password") {
      x2.type = "text";
    } else {
      x2.type = "password";
    }
  }