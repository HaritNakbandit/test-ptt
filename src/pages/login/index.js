import React, { useRef, useState, useContext } from 'react';
import { Input, Button } from "../../components/ui/"
import HeaderBar from "../../components/layout/HeaderBar"
import { onInput } from "../../shared/utils/manage-form"
import { AuthContext } from "../../context/auth/auth_context";
import { loginSuccess } from "../../context/auth/auth_action"
import { Form, Schema, ButtonToolbar } from 'rsuite';

const LoginPage = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ 'firstName': "", 'lastName': "", 'phone': "" });
    const authContext = useContext(AuthContext);
    const { dispatchAuth } = authContext;
    const { StringType } = Schema.Types;
    const seatsLeft = authContext.limit - authContext.data.length;


    const onSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        loginSuccess(dispatchAuth, form);
    }

    const model = Schema.Model({
        firstName: StringType().isRequired('This field is required.'),
        lastName: StringType()
            .isRequired('This field is required.'),
        phone: StringType()
            .isRequired('This field is required.')
    });

    return (
        <div className="h-screen w-screen bg-[#E8EEFA]" >
            <HeaderBar />
            <div className={`h-[calc(100%_-_60px)] w-full flex flex-col justify-center items-center`} >
                <div className="lg:w-1/4 md:w-1/2 flex flex-col items-center bg-white p-[40px] rounded-[24px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]" >
                    <p className="text-3xl font-semibold text-[#1D4289] mb-3">{"Register"}</p>
                    <p className="text-xl font-semibold text-[#1D4289] mb-1">{`Seats left : ${seatsLeft < 0 ? 0 : seatsLeft}`}</p>
                    <Form
                        model={model}
                        ref={formRef}
                    >
                        <Input
                            name="firstName"
                            label="First Name"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={onInput('firstName', setForm)} />
                        <Input
                            name="lastName"
                            label="Last Name"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={onInput('lastName', setForm)} />
                        <Input
                            name="phone"
                            label="Phone Number"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={onInput('phone', setForm)} />
                        <ButtonToolbar>
                            <Button
                                onClick={onSubmit}
                                bgColor="#1D4289"
                                type="submit"
                                block
                                disabled={authContext.data.length >= authContext.limit}>Sign In</Button>
                        </ButtonToolbar>
                    </Form>
                </div>
            </div>
        </div>
    );
};


export default LoginPage;
