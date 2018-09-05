import React, { Component } from 'react';
import { MenuItem, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BatmanVSupermanShift1 from './batmanVSuperShift1';
import BatmanVSupermanShift2 from './batmanVsSupermanShift2';

class homePage extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <div className="col-sm-4"> 
                    <img style={{width: "200px", height: "300px"}} src="http://t1.gstatic.com/images?q=tbn:ANd9GcS61fdKkVcQIKtObjNGAELqVwyzhwFoIfNGZVbC-rqta12xBfLa" />   
                </div>

                <div className="col-sm-8">
                    <h1>Batman Vs Superman</h1>
                        
                    <a href="https://www.imdb.com/title/tt2975590/" target="_blank">
                        <input className="btn btn-default" type="button" value="IMDB"/>
                    </a>

                    <DropdownButton title="Schedule" >
                        <MenuItem eventKey="1">
                            <Link to="/batmanvssuperman/">Morning</Link>
                        </MenuItem>
                        <MenuItem eventKey="2">
                            <Link to="/batmanvssuperman/shift2">Evening</Link>
                        </MenuItem>
                    </DropdownButton>
                </div>

                <div className="col-sm-12 text-center">
                    <div>
                        <Route exact path="/batmanvssuperman/" component={ BatmanVSupermanShift1 }/>
                        <Route exact path="/batmanvssuperman/shift2" component={ BatmanVSupermanShift2 }/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default homePage;