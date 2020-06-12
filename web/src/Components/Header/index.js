import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import './style.css'

import {getToken} from '../../services/token'

function Header () {
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault()
        getToken() ? history.push('/user/create-point') : history.push('/signin')
    }

    function signup(e) {
        e.preventDefault();
        history.push('/signup');
    }

    function signin(e) {
        e.preventDefault();
        history.push('/signin');
    }
    return (
        <header className="header">
            <div className="dropdown">
                <button className="dropbtn">Cadastros</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <Link to="/signin" onClick={handleClick}>
                        <span>
                          <FiLogIn/>
                        </span>
                        <strong>Cadastrar um ponto de doação</strong>
                    </Link>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Faturamento</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Financeiro</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Boletos</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Caixa</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Config</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Relatórios</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn" onClick={signup}>Sign-up</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn" onClick={signin}>Sign-in</button>
            </div>

        </header>
    )
}

export default Header;
