import { Form } from 'rsuite';
import { InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

export const Input = (props) => {
    const { name, label, accepter, required, ...rest } = props;

    return (
        <Form.Group controlId={`${name}-3`}>
            <div className='flex flex-row'>
                <Form.ControlLabel>{label}  </Form.ControlLabel>{required && <p className='text-red-500'>{"*"}</p>}
            </div>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
};


export const InputSeacrh = (props) => {
    const { name, accepter, required, ...rest } = props;
   
    return (
        <Form.Group controlId={`${name}-3`}>
            <InputGroup inside>
                <Form.Control
                    name={name} accepter={accepter} {...rest}
                />
                <InputGroup.Addon>
                    <SearchIcon />
                </InputGroup.Addon>
            </InputGroup>
        </Form.Group>
    );
};
