import React, { useState, useContext } from 'react';
import { InputSeacrh, Table } from "../../components/ui/"
import { AuthContext } from "../../context/auth/auth_context";
import { Form } from 'rsuite';

const HomePage = () => {
    const [search, setSearch] = useState("");
    const authContext = useContext(AuthContext);
    const seatsLeft = authContext.limit - authContext.data.length;
    const column = [
        {
            dataKey: "id",
            name: "id"
        },
        {
            dataKey: "firstName",
            name: "First Name"
        },
        {
            dataKey: "lastName",
            name: "Last Name"
        },
        {
            dataKey: "phone",
            name: "Phone Number"
        }
    ]
    const onInput = (value) => {
        setSearch(value);
    };

    const dataSearch = authContext.data.filter((item) => {
        return item.firstName.toLowerCase().includes(search.toLowerCase()) ||
            item.lastName.toLowerCase().includes(search.toLowerCase()) ||
            item.phone.toLowerCase().includes(search.toLowerCase()
            );
    })

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <p className="text-3xl font-semibold text-[#1D4289] mb-5">Home</p>
                <p className="text-xl font-semibold text-[#1D4289] mb-5">{`Seats left : ${seatsLeft < 0 ? 0 : seatsLeft}`}</p>
            </div>
            <Form fluid className='mb-5'>
                <InputSeacrh size="lg"
                    name={"search"}
                    placeholder={"Search"}
                    value={search}
                    onChange={onInput} />
            </Form>
            <Table data={dataSearch} column={column} />
        </div>
    );
};


export default HomePage;
