import { Form, Input, Label } from './ContactForm.styled';
import { useState } from 'react';


export function ContactForm({ onSubmit,
    // isSuccess
}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => { 
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number);
        resetInput();
     };

    const resetInput = () => {
        setName('');
        setNumber('');
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    name="name"                   
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required                    
                    placeholder='Adrian Smith'
                    />
            </Label>
            <Label>
                Number
                <Input
                    value={number}
                    onChange={handleChange}
                    type="tel"
                    name="phone"
                    placeholder="0501111111"                    
                    
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required

                />    
            </Label>
            <button type="submit" className="contact-form__btn"
                // disabled={!isSuccess}
            >
            Add contact
        </button>
        </Form>
    );
}