import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../support/API_url';

class cinemaPage extends Component {
    state = { 
        kursiData: [],
        kursiBooked: [],
        movie: "equalizer studio 1 morning"
    }

    getKursiData = () => {
        axios.get( API_URL_1 + "/movieOneShift1" )
        .then( dataBaseKursi => {
            console.log(dataBaseKursi);
            this.setState({ kursiData: dataBaseKursi.data });
        });
    }

    componentWillMount() {
        this.getKursiData();
    }

    renderKursi = () => {
        return this.state.kursiData.map( (kursi) =>
            this.bookCheck(kursi)
        );  
    }

    bookCheck = (kursi) => {
        if(kursi.status == "free") {
            return (
                <label><input ref={kursi.id} type="checkbox" value="free" onClick={() => this.onCheckBoxClick(kursi.id)} />{kursi.id}</label>
            );
        }
        else {
            return (           
                <label><input ref={kursi.id} type="checkbox" value="booked" onClick={() => this.onCheckBoxClick(kursi.id)} checked={true} disabled/>{kursi.id}</label>
            );
        }
    }

    onCheckBoxClick = (id) => {
        console.log(id)
        console.log(this.state.kursiBooked)

        for(let item in this.state.kursiBooked){
            if(this.state.kursiBooked[item] == id) {
                console.log('masuk ke splice')
                this.state.kursiBooked.splice(item, 1); 
                return this.setState({ })
            }
        } 

        if ( this.state.kursiBooked.length == 0){
            this.setState({kursiBooked: this.state.kursiBooked.concat([id])})
            console.log('masuk ke sini 1')
        }

        else {
            console.log('masuk ke splice 2')
            this.setState({kursiBooked: this.state.kursiBooked.concat([id])})
        }
        
    }

    updateUserBookDetail = () => {
        axios.post(API_URL_1 + '/transaction', {
            username: this.props.userLogin.username,
            booking: this.state.kursiBooked,
            movie: this.state.movie
        })
    }

    onCheckOutClick = () => {
        

        if(this.props.userLogin.username != "") {
            this.updateUserBookDetail();

            return this.state.kursiBooked.map((kursiYgDiBook) => 
            axios.put(API_URL_1 + "/movieOneShift1/" + kursiYgDiBook, {
                status: "booked" 
            })
            .then( (kursi) => {
                console.log(kursi)
                alert("Book " + kursi.data.id +  " Success!");
                this.getKursiData();
                this.setState({kursiBooked: []})
            }))
        }

        else {
            alert('Please Login First to CheckOut')
        }
    }

    renderkursiBooked = () => {
        return this.state.kursiBooked.map((kursiYgDiBook) => <p>{kursiYgDiBook}</p>)
    }

    render() {
        console.log(this.state.kursiBooked)
        console.log(this.props.userLogin)
        
        return (
            <div className="container text-center" style={{width:"500px"}}>
                <h3>Equalizer 2 morning</h3>
                <h3 style={{backgroundColor:"green"}}>Layar</h3>

                <h4 className="container text-center" style={{width:"330px"}}>
                    {this.renderKursi()}
                </h4>


                <br/>You Have Booked:<br/>

                {this.renderkursiBooked()}

                <input type="button" className="btn btn-success" value="Check Out" onClick={this.onCheckOutClick}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let userLogin = state.userLogin

    return { userLogin };
}

export default connect(mapStateToProps)(cinemaPage);