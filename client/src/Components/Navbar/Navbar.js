import React from 'react'
import classes from './Navbar.module.css'

export let Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper  light-blue darken-3">
                <a href="#" className="brand-logo right"><h6 className={classes.margin_top}>Тел: +38 (050) 435 32 91. E-mail: certiport@dinternal.com.ua </h6></a>
                <ul id="nav-mobile" className="left">
                    <li><a href="/">Реєстрація</a></li>
                    <li><a href="/">Ціни</a></li>
                    <li><a href="/">Контакти</a></li>
                </ul>
            </div>
        </nav>
    )
}