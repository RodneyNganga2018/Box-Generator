import React from 'react';
import styles from './Block.module.css';

const Block = (props) => {
    console.log(props.color);
    return (
        <>
            <div className={styles.box} style={{backgroundColor: props.color }}></div>
        </>
    )
}

export default Block;