import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    let isActiv
    const onClickHandler = (sa: string) => {
        console.log(sa)
        isActiv = s.activ
    }
    return (
        <div className={s.wrapper}>
            <div className={s.navBox}>
                {/*// add NavLinks*/}
                <NavLink to={'/pre-junior'} className={({isActive})=> isActive ? `${s.navLinck} ${s.activ}` : s.navLinck}>pre-junior</NavLink>
                <NavLink to={'/junior'} className={({isActive})=> isActive ? `${s.navLinck} ${s.activ}` : s.navLinck }>junior</NavLink>
                <NavLink to={'/junior+'} className={({isActive})=> isActive ? `${s.navLinck} ${s.activ}` : s.navLinck}>junior+</NavLink>
                <div className={s.navLinckBtn}>&rsaquo;</div>
            </div>
        </div>
    )
}

export default Header
