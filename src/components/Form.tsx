import React, { useState, useReducer } from 'react';
import { Sub } from '../types';
import useNewSubFormReducer from '../hooks/useNewSubFormReducer';


interface FormProps {
    onNewSub: (newSub: Sub) => void;
}

const INITIAL_STATE = {
    nick: '',
    subMonth: 0,
    avatar: '',
    description: '',
}

const Form = ({ onNewSub }: FormProps) => {
//    const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);

   const [inputValues, dispatch] = useNewSubFormReducer();

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues);
        dispatch({ type: 'clear' });
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({
            type: 'change_value',
            payload: {
                inputName: e.target.name,
                inputValue: e.target.value,
            }
        });
    }

    const handleClear = () => {
        dispatch({ type: 'clear' });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='nick' name='nick' value={inputValues.nick} onChange={handleChange}  />
                <input type='text' placeholder='subMonths' name='subMonths' value={inputValues.subMonth} onChange={handleChange} />
                <input type='text' placeholder='avatar' name='avatar' value={inputValues.avatar} onChange={handleChange} />
                <textarea placeholder='description' name='description' value={inputValues.description} onChange={handleChange} />
                <button type='button' onClick={handleClear}>Clear</button>
                <button type='submit' >Save new sub! </button>
            </form>
        </div>
    );
};

export default Form;