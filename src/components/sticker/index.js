import React from "react";
import styles from './index.module.scss';

export default class Sticker extends React.Component {
    render() {
        return (<div className={styles.sticker} style={{backgroundImage: `url(${this.props.image})`, height: `${this.props.height}px`, backgroundPosition: this.props.align === 'right' ? '152px 0' : '0 0'}}>
            <h1>{this.props.title}</h1>
            <p style={this.props.align === 'left' ? {margin: '40px 0 100px 150px', textAlign: 'left'} : {margin: '40px 150px 100px 0', textAlign: 'right'}}>{this.props.text}</p>
        </div>);
    }
}
