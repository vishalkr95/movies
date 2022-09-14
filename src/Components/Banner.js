import {movies} from './getMovies'

import React, { Component } from 'react'
import axios from 'axios';
export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            
            movie: ''
           
        }
    }
      
    async componentDidMount() {
        //Side effects 
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
        let data = res.data
        // console.log(data);
        this.setState({
            movie:data.results[0]
        })
        // let callbackfn = (entries) => {
        //     if (entries[0].isIntersecting) {
        //         this.loadMoreMovies();
        //     }
        // }
        // let loader = document.querySelector(".infinite-loader");
        // let observer = new IntersectionObserver(callbackfn, { threshold: 1.0 })
        // observer.observe(loader)
    }
  
    render() {
       
        //let movie = movies.results[0]
        // let movie=data[0]
        return (
            <>
            {   
                
                
                this.state.movie == ''?
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}`}   alt={this.state.movie.title} className="card-img-top banner-img" />
                {/* <div className="card-body"> */}
                    <h1 className="card-title banner-title">{this.state.movie.original_title}</h1>
                    <p className="card-text banner-text">{this.state.movie.overview}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
                </div>
            }
            </>
        )
    }
}