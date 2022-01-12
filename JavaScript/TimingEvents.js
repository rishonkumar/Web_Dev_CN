function sayHello() {
  console.log("After" + sec);
  sec++;
  if (sec == 6) {
    //stop
    clearInterval(id);
  }
}

var id = setInterval(sayHello, 1000); // it will repeat

setTimeout(sayHello, 1000); //will execute once
