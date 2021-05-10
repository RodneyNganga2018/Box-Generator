import React, { useReducer } from 'react';
import styles from './Form.module.css';

const initialState = {
    color: ''
};

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    }
}

export default (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (state.color !== '') {
            props.newColor(state.color);
            dispatch({
                type: 'color',
                payload: ''
            })
        }
    }

    return (
        <div className={styles.formGroup}>
            <form onSubmit={handleForm}>
                <label className={styles.form}>Color</label>
                <input className={styles.form,styles.formInput} name="color" type="text" onChange={handleChange} value={state.color}/>
                <input className={styles.form} id="submit" type="submit" value="Add"/>
            </form>
        </div>
    )
}