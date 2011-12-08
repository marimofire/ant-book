var prac = function (IN, k) {
  var result = false;

  var rec = function ( input, sum ) {
    var n = input.length;
    if ( sum == k ) result = true;

    for ( var i = 0; i < n; i++ ) {
      var new_input = new Array();
      for ( var j = 0; j < n; j++ ) {
        if ( j != i ) new_input.push(input[j]);
      }
      rec( new_input, sum + input[i] );
    }
  }

  rec(IN, 0);
  return result;
};

var input = [1, 2, 4, 7];
console.log(prac(input, 13)); // true
console.log(prac(input, 15)); // false
