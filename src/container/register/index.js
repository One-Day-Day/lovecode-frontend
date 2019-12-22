import React from "react";
import Sticker from "../../components/sticker";
import logo from "../../assets/image/logo.png";
import loginImage from "../../assets/image/login-image-set.png";
import styles from "./index.module.scss";

export default class RegisterContainer extends React.Component {
    render() {
        return (<div className={styles.login}>
            <div className={styles.left}>
                <Sticker height='265' align='left' title='关于我们' text='abc efg ddd babalalalala'
                         image={loginImage}/>
                <Sticker height='265' align='left' title='超多问题'
                         text='lovecode系统中有8个大类别，共计超过1000个题目，题目分类能够帮助用户高效的针对某一项技能进行训练'
                         image={loginImage}/>
            </div>
            <div className={styles.center}>
                <img className={styles.logo} src={logo}/>
                <span className={styles.title}>账号注册</span>
                <div className={styles.formItem}>
                    <label>用户名</label>
                    <input/>
                </div>
                <div className={styles.formItem}>
                    <label>邮箱</label>
                    <input/>
                </div>
                <div className={styles.formItem}>
                    <label>密码</label>
                    <input/>
                </div>
                <div className={styles.formItem}>
                    <label>确认密码</label>
                    <input/>
                </div>
                <button>注册</button>
            </div>
            <div className={styles.right}>
                <Sticker height='265' align='right' title='关于我们' text='abc efg ddd babalalalala'
                         image={loginImage}/>
                <Sticker height='265' align='right' title='超多问题'
                         text='lovecode系统中有8个大类别，共计超过1000个题目，题目分类能够帮助用户高效的针对某一项技能进行训练'
                         image={loginImage}/>
            </div>
        </div>)
    }
}
