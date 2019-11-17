import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { title, 
                backdrop_path, 
                poster_path, 
                vote_average, 
                original_language, 
                genres } = this.props;

        return (
            <div className='Header-container'>
                <div className='Bg-pic'>
                    <img src= {`http://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={`${backdrop_path} backdrop`}/>
                </div>
                <div className='info-container'>
                    <img className='Poster-pic' src={`http://image.tmdb.org/t/p/w154/${poster_path}`} alt={`${title} poster`}/>
                    <div className='info'>
                        <div className='info-left'>
                            <h1> {title} </h1>
                            <p id='rate'> {vote_average} </p>
                            <p>Released | <span> {original_language} </span></p>
                            <div> {genres[0].name} | </div>
                        </div>
                        <div className='info-right'>
                            <i className="fas fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;