var arr = [2, 3, 4, 5, 6];

function print(element) {
  console.log(element);
}

//1st method
for (var i = 0; i <= arr.length; i++) {
  //console.log(i);
  print(arr[i]);
}

//2nd for each method       
arr.forEach(print);
