import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Navbar } from '../Navbar/Navbar'
import classes from './AuthPage.module.css'

export let AuthPage = () => {
    let {loading, request} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changedHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (error) {
            
        }
    }

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
                                    onChange={changedHandler}
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
                                    onChange={changedHandler}
                                    />
                                    <label htmlFor="password">Войти</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button 
                            className={`${classes.margin} btn yellow darken-4`}
                            onClick={registerHandler}
                            disabled={loading}
                            >Войти</button>
                            <button 
                            onClick={registerHandler}
                            disabled={loading}
                            className="btn grey lighten-1 black-text">Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default AuthPage