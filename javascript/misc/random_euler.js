// To use, go to https://projecteuler.net/archives
// then open the developer console and paste the contents of this file
// This will automatically direct to a random problem.

function getTotalProbs(){
  var p = document.querySelector( "p" ).textContent;
  var total = "";
  for ( var i = 0; i < p.length; i++ ) {
    if ( p[i] === "1" ){
      for ( var j = i + 5; p[j] != "."; j++ ) {
        total += p[j];
      }
      return Number( total );
    }
  }
}

window.location.href = "https://projecteuler.net/problem="
                      + Math.floor( Math.random() * getTotalProbs() );
