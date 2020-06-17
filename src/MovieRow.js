import React from 'react'

class MovieRow extends React.Component{
viewMovie(){
    //console.log("Trying to view the movie")
    //console.log(this.props.movie.title)
const url="https://www.themoviedb.org/movie/" +this.props.movie.id
window.location.href=url

}

  render(){
      return <table classname="tableInfo" key={this.props.movie.id} >
      <tbody>
        <tr width="50">
         <td >
      <img alt="posver" width ="200" src={this.props.movie.poster_src}/>
          </td>
          <td >
        
      <h3><b>{this.props.movie.title}</b></h3>
      <p>{this.props.movie.overview}</p>
      <p>{this.props.movie.type}</p>
      <input type="button" onClick={this.viewMovie.bind(this)} class="btn btn-info" value="info"/><br></br>
          </td>
         
        </tr>
      </tbody>
      
        </table>
  }  
}
export default MovieRow