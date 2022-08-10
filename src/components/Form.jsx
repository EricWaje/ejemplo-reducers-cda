import React, { useState } from 'react';
import { useReducer } from 'react';
import { SEND } from '../actions/formActions';
import { formReducer, initialState } from '../reducers/formReducer';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '1px 1px 1px #000',
    },
    input: {
        width: '100%',
        height: '30px',
        borderRadius: '5px',
        border: 'none',
        marginBottom: '10px',
        padding: '0 10px',
    },
};

const Form = () => {
    // const [dataForm, setDataForm] = useState({
    //     nombre: '',
    //     email: '',
    //     password: '',
    // });
    const [dataForm, dispatchDataForm] = useReducer(formReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataForm);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatchDataForm({
            type: SEND,
            field: name,
            payload: value,
        });
    };
    return (
        <div className="container">
            <div style={{ width: '30%' }}>
                <h1>Form</h1>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <input
                        style={styles.input}
                        type="text"
                        name="nombre"
                        placeholder="Name"
                        value={dataForm.nombre}
                        onChange={handleChange}
                    />
                    <input
                        style={styles.input}
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={dataForm.email}
                        onChange={handleChange}
                    />
                    <input
                        style={styles.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={dataForm.password}
                        onChange={handleChange}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
