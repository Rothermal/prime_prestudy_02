avengersMovie = {
	name : "Avengers",
	runtime : "143 mins",
	releaseYear : 2012,
	Director : "Joss Whedon"
};
console.log(avengersMovie);

assemble = function (){
  
  return document.getElementById("avengersAssemble").innerHTML = avengersMovie.name + " is a movie directed by"+avengersMovie.Director +". It was released in " +avengersMovie.releaseYear+" and it has a runtime of "+avengersMovie.runtime ;
};
assemble();
