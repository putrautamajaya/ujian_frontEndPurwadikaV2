import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL_1 } from '../support/API_url';

class cinemaPage extends Component {
    state = { 
        transaction: [],
    }

    getTransactionData = () => {
        axios.get(API_URL_1 + '/transaction', { 
            params: {
                username: this.props.userLogin.username
            }

        })
        .then(user => {
            console.log(user)
            this.setState({transaction: user.data}) 
        });
    }

    componentWillMount() {
        this.getTransactionData();
    }


    onPayBillClick = () => {
        axios.get(API_URL_1 + '/transaction', { 
            params: {
                username: this.props.userLogin.username
            }

        }).then(user => {
            console.log(user)
            this.setState({transaction: user.data})
            let jumlahBookMorning = 0;
            let jumlahBookEvening = 0;

            for(let index in this.state.transaction)
            {
                if(user.data[index].movie == "avanger studio 2 morning" ||
                    user.data[index].movie == "batman v superman studio 3 morning"||
                    user.data[index].movie == "equalizer studio 1 morning") {
                    jumlahBookMorning += user.data[index].booking.length
                }

                else {
                    jumlahBookEvening += user.data[index].booking.length
                }
                
            }
            let totalMorning = 25000 * jumlahBookMorning;
            let totalEvening = 35000 * jumlahBookEvening;
            let total = totalMorning + totalEvening;
            let jumlahBook = jumlahBookEvening + jumlahBookMorning;
            alert('total: '+ jumlahBook + ' tiket = ' + total);
        });
    }

    renderTransaction = () => {
        return this.state.transaction.map((kursiYgDiBook) => kursiYgDiBook.booking.map((kursi) => <p>{kursi}{' '}{kursiYgDiBook.movie}</p>))
    }

    render() {
        
        return (
            <div className="container">
                <br/>
                <br/>
                <br/>
                <h3>Your Cart:</h3>

                {this.renderTransaction()}<br/>

                <input type="button" className="btn btn-warning" value="Pay Bill" onClick={this.onPayBillClick}/>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let userLogin = state.userLogin

    return { userLogin };
}

export default connect(mapStateToProps)(cinemaPage);