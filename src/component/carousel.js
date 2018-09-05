import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import { API_URL_1 } from '../support/API_url';
import { Link } from 'react-router-dom';


class carouselProject extends Component {
    state = { movies: [] }

    componentWillMount() {
        axios.get( API_URL_1 + "/movies" )
            .then( movie => {
                console.log(movie);
                this.setState({ movies: movie.data });
            });
    }

    renderMovieList = () => {
        return this.state.movies.map( movie => 
            
            <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                <Link to={movie.link}>
                    <img style={{ width: "100%"}} src={movie.url} />
                </Link>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            
        );
    }

    render(){
        return(
        <div>
            <br/>

        <div className="row">
            <div className="col-sm-12">
                <Carousel prevIcon={false} nextIcon={false} className="container">
                    {this.renderMovieList()}
                    {/* <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                        <img style={{ width: "100%"}} src={this.state.movies.} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                        <img style={{ width: "100%"}} src="https://www.adidas.co.uk/dis/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-GB-Library/en/dwa17d4964/brand/images/2018/01/originals-ss18-eqt-bb-hp-mh-d_233727.jpg?sw=1366&sh=830&sm=fit&cx=0&cy=0&cw=1366&ch=831&sfrm=jpg" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "500px", overflow: "hidden"}}>
                        <img style={{ width: "100%"}} src="https://www.mensjournal.com/wp-content/uploads/mf/rock-under-armor-4-1280.jpg" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>

        </div>
        </div>
            
        );
    }
}

export default carouselProject;