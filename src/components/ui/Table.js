import React, { useState } from 'react';
import { Table as Rtable } from 'rsuite';

const Table = (props) => {
    const { data, column } = props
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [loading, setLoading] = useState(false);

    const newData = data.map((item, index) => {
        return {
            ...item,
            id: index + 1,
        };
    });

    const getData = () => {
        if (sortColumn && sortType) {
            return newData.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];

                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return newData;
    }
    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    return (
        <Rtable
            height={420}
            data={getData()}
            sortColumn={sortColumn}
            sortType={sortType}
            onSortColumn={handleSortColumn}
            loading={loading}
            onRowClick={data => {
                // console.log(data);
            }}
        >
            {column.map((item, index) => (
                <Rtable.Column key={index} flexGrow={1} sortable>
                    <Rtable.HeaderCell>{item.name}</Rtable.HeaderCell>
                    <Rtable.Cell dataKey={item.dataKey} />
                </Rtable.Column>
            ))}
            {/* <Rtable.Column width={70} align="center" fixed sortable>
                <Rtable.HeaderCell>Id</Rtable.HeaderCell>
                <Rtable.Cell dataKey="id" />
            </Rtable.Column> */}
        </Rtable>
    );
};


export default Table;
