import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';

class homePage extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <Carousel />
                {/* <div className="col-sm-4">
                    <Link to="/equalizer">
                        <img style={{width: "200px", height: "300px"}} src="data:image/jpeg;base64,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" />
                        <h1>Eqaulizer II</h1>
                    </Link>
                </div>
                <div className="col-sm-4">
                    <Link to="/avanger">
                        <img style={{width: "200px", height: "300px"}} src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/ca/Avengers_Infinity_War_Imax_poster.jpg/revision/latest?cb=20180405170202" />  
                        <h3>Avanger Infinity War</h3>
                    </Link>
                </div>
                <div className="col-sm-4">
                    <Link to="/batmanvssuperman">
                        <img style={{width: "200px", height: "300px"}} src="http://t1.gstatic.com/images?q=tbn:ANd9GcS61fdKkVcQIKtObjNGAELqVwyzhwFoIfNGZVbC-rqta12xBfLa" />
                        <h3>Batman V Superman</h3>
                    </Link>
                </div> */}

            </div>
        );
    }
}

export default homePage;