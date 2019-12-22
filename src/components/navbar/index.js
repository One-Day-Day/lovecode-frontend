import React from "react";
import style from './index.module.scss'

export default class Navbar extends React.Component {
    render() {
        return (<div className={style.navbar}>
            <ul className={style.links}>
                <li><a className={style.link} href='#'>登录</a></li>
                <li><a className={style.link} href='#'>注册</a></li>
                {/*<li><a className={style.link} href='#'>比赛</a></li>*/}
                <li><a className={style.link} href='#'>问题</a></li>
            </ul>
        </div>);
    }
}
