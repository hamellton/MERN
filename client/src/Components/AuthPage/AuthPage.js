import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import classes from './AuthPage.module.css'

export let AuthPage = () => {
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>Certiport</h1>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Авторизация</span>
                            <div>
                                <div className="input-field">
                                    <input 
                                    placeholder="email" 
                                    id="email" 
                                    type="text" 
                                    className="validate" 
                                    name="email"
                                    className="yellow-input"
                                    />
                                    <label htmlFor="first_name">Email</label>
                                </div>
                                <div className="input-field">
                                    <input 
                                    placeholder="password" 
                                    id="password" 
                                    type="password" 
                                    name="password"
                                    className="yellow-input"
                                    />
                                    <label htmlFor="password">Пароль</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button className={`${classes.margin} btn yellow darken-4`}>Войти</button>
                            <button className="btn grey lighten-1 black-text">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default AuthPage