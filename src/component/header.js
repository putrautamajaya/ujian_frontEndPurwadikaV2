import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut, keepLogin, cookieCheck } from '../actionCreator';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class header extends Component {
    componentWillMount(){
        const cookieDiBrowser = cookies.get('userLogin');
        
        if(cookieDiBrowser !== undefined) {
            this.props.keepLogin(cookieDiBrowser);
            console.log('masuk ke keeplogin');
        }
        else if (cookieDiBrowser === undefined) {
            this.props.cookieCheck();
            console.log('masuk ke cookieCheck');
        }
    }

    onLogOutClick = () => {
        this.props.onLogOut();
        cookies.remove('userLogin')
        this.props.cookieCheck();
    }

    headerProject = () => {
        console.log(this.props.userLogin)
        if(this.props.userLogin.username === "") {
            return(
                <Navbar fixedTop={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
    
                    <Navbar.Collapse>
    
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <Link to="/loginPage">Login</Link>
                            </NavItem>
    
                            <NavItem eventKey={2} href="#">
                                <Link to="/registerPage">Register</Link>
                            </NavItem>
                        </Nav>
    
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        
        else {
            return(
                <Navbar fixedTop={true} inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Home</Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                        <Link to="/cart">Cart</Link>
                        </Navbar.Brand>
                        
                        <Navbar.Toggle />
                    </Navbar.Header>
    
                    <Navbar.Collapse>
    
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <p style={{margin: "0"}}>Hello, {this.props.userLogin.username}</p>
                            </NavItem>
    
                            <NavItem eventKey={2} href="#">
                            <p style={{margin: "0"}} onClick={this.onLogOutClick}>
                                <Link to="/">Log Out</Link>
                            </p>
                            </NavItem>
                        </Nav>
    
                    </Navbar.Collapse>
                </Navbar>
            );
        }   
    }

    renderAfterCookieCheck = () => {
        if (this.props.userLogin.cookieCheck === true) {
            return this.headerProject();
        }
        return <div></div>;
    }

    render() {
        return(
            this.renderAfterCookieCheck()
        );
    }
}

const mapStateToProps = (state) => {
    let userLogin = state.userLogin

    return { userLogin };
}

export default connect(mapStateToProps,{ onLogOut, keepLogin, cookieCheck })(header);
