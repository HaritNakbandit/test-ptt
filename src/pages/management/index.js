import React, { useState, useContext, useRef } from 'react';
import { Input, Button } from "../../components/ui/"
import { AuthContext } from "../../context/auth/auth_context";
import { Form, Schema, ButtonToolbar } from 'rsuite';
import { changeLimitUser } from "../../context/auth/auth_action"
import { Message, toaster } from 'rsuite';

const ManagementPage = () => {
    const formRef = useRef();
    const authContext = useContext(AuthContext);
    const { dispatchAuth } = authContext;
    const [limit, setLimit] = useState("");

    const { NumberType } = Schema.Types;

    const onSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        changeLimitUser(dispatchAuth, parseInt(limit));
        toaster.push(message, {
            placement: 'topCenter'
        });
    }
    const model = Schema.Model({
        limit: NumberType('Please enter a valid number.').isRequired('This field is required.'),
    });

    const onInput = (value) => {
        setLimit(value);
    };

    const message = (
        <Message showIcon type={"success"} >
            Edit Seats limit success.
        </Message>
    );
    
    return (
        <div>
            <p className="text-3xl font-semibold text-[#1D4289] mb-5">Management</p>
            <div className={`h-[calc(100%_-_60px)] w-full flex flex-col justify-center items-center`} >
                <div className="lg:w-1/2 md:w-1/2 flex flex-col items-center bg-white p-[40px] rounded-[24px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]" >
                    <p className="text-3xl font-semibold text-[#1D4289] mb-[20px]">{"Management Seats limit"}</p>
                    <Form
                        model={model}
                        ref={formRef}
                    >
                        <Input
                            name="limit"
                            label="Seats limit"
                            placeholder="Seats limit"
                            value={limit}
                            onChange={onInput} />
                        <ButtonToolbar>
                            <Button
                                onClick={onSubmit}
                                bgColor="#1D4289"
                                type="submit"
                                block
                            >Submit</Button>
                        </ButtonToolbar>
                    </Form>
                </div>
            </div>
        </div>
    );
};


export default ManagementPage;
