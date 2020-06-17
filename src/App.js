

import React, { Component} from 'react';

import './App.css';
import $ from 'jquery'
import MovieRow from './MovieRow.js'

class App extends Component{
constructor(props){
super(props)
this.state={}
//console.log("This is my initializer")
//const movies=[
  //{id:0, poster_src:"", title:"Avenger: Infinity War", ovewrview:"asdfghjkhhgfdsadfghjkhgfdsa"},
  //{id:1, poster_src:"",title:"Avenger", ovewrview:"asdfghjkhhgfdsadfghjkhgfdsa"}
//]




//var movieRows =[]
//movies.forEach((movie)=>{
  //console.log(movie.title)
  //const movieRow=<MovieRow movie={movie}/>
  
//movieRows.push(movieRow)
//})
//this.state={rows: movieRows}

this.performSearch("avengers")

}
performSearch(searchTerm){
  console.log("perform search using db")
const urlString="https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +searchTerm

$.ajax({
url: urlString,
success: (searchResults)=>{
  console.log("Success")
  //console.log(searchResults)
  const results=searchResults.results
  //console.log(results[0])
var movieRows =[]

 results.forEach((movie)=>{
   movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
//console.log(movie.poster_path)
const movieRow=<MovieRow key={movie.id}movie={movie}/>
movieRows.push(movieRow)
 })
this.setState({rows: movieRows})
},
error: (xhr, status, err ) => {
console.error("failure")

}
})

}

searchChangeHandler(event){
  console.log(event.target.value)
  const boundObject=this
  const searchTerm=event.target.value
  boundObject.performSearch(searchTerm)

}

render() {
  return (
    
   <div>
<div id="container" >


</div>

  
<div className="websiteBody">
<input style={{
  fontSize:15,
  position:  "relative",
  width:"80%",
  paddingTop:0,
  paddingBottom:1,
  margin:80,
  
  justifyContent:'right',
  paddingLeft:5
}} onChange= {this.searchChangeHandler.bind(this)} placeholder="      search a movie . . .  "></input>
    <p>{this.state.rows}  </p>

     </div>
     </div> 
    
   

  );
}
}
export default App;


