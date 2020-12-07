import React from 'react'

export let Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo right">Logo</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="/">Реєстрація</a></li>
                    <li><a href="/">Ціни</a></li>
                    <li><a href="/">Контакти</a></li>
                </ul>
            </div>
        </nav>
    )
}