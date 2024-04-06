function my_Dictionary(){
    var movie = {
        Title:'The Avengers',
        Genre:"Action",
        Director:"Joss Whendon",
        Rating:"PG-13"
    }
    delete movie.Genre;//This removes the Genre KVP from the Dictonary
    document.getElementById("Dictionary").innerHTML = movie.Genre;
}