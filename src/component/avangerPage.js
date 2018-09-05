import React, { Component } from 'react';
import { NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AvangerShift1 from './avangerShift1';
import AvangerShift2 from './avangerShift2';

class homePage extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <div className="col-sm-4"> 
                    <img style={{width: "200px", height: "300px"}} src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/ca/Avengers_Infinity_War_Imax_poster.jpg/revision/latest?cb=20180405170202" />   
                </div>

                <div className="col-sm-8"> 
                        <h1>Avenger Infinity War</h1>
                        
                        <a href="https://www.imdb.com/title/tt4154756/" target="_blank">
                            <input className="btn btn-default" type="button" value="IMDB"/>
                        </a>

                        <DropdownButton title="Schedule" >
                            <MenuItem eventKey="1">
                                <Link to="/avanger/">Morning</Link>
                            </MenuItem>
                            <MenuItem eventKey="2">
                                <Link to="/avanger/shift2">Evening</Link>
                            </MenuItem>
                        </DropdownButton>
                </div>
            
                <div className="col-sm-12 text-center">
                    <div>
                        <Route exact path="/avanger/" component={ AvangerShift1 }/>
                        <Route exact path="/avanger/shift2" component={ AvangerShift2 }/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default homePage;