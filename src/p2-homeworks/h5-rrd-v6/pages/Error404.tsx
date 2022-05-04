import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrap}>
            <div className={s.logo}>
                <h1>404</h1>
                <p> Sorry - File not Found!</p>
                <div className={s.sub}>
                    <p><a href="#">Вернуться на главную</a></p>
                </div>
            </div>
        </div>
    )
}

export default Error404
