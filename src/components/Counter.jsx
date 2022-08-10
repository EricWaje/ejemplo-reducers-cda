import React, { useReducer, useState } from 'react';

const styles = {
    button: {
        margin: '10px',
        backgroundColor: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '1px 1px 1px #000',
    },
    containerCounter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const initialState = {
    count: 0,
};

// ACCIONES -> SUMAR, RESTAR
const SUMAR = 'SUMAR';
const RESTAR = 'RESTAR';

// action
// -> action.type = SUMAR
// -> action.payload = informacion

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUMAR:
            return {
                count: state.count + 1,
            };
        case RESTAR:
            return {
                count: state.count - 1,
            };

        default:
            return state;
    }
};

const Counter = () => {
    //const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(countReducer, initialState);

    const sumar = () => {
        dispatch({
            type: 'SUMAR',
        });
    };

    //    console.log(state);

    const restar = () => {
        dispatch({
            type: 'RESTAR',
        });
    };

    return (
        <div className="container">
            <div>
                <h1>Counter</h1>
                <div style={styles.containerCounter}>
                    <button style={styles.button} onClick={sumar}>
                        +
                    </button>
                    <h3>{state.count}</h3>
                    <button style={styles.button} onClick={restar}>
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
