import React, {useState} from "react";
import "./table.css";

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

const Table = ({items}) => {
    const [data, setData] = useState(items);
    let totalOfTotal = 0;

    const handleBlurInput = (event, idx) => {
        const div = document.createElement('div');
        div.addEventListener('click', (e) => {
            handleClickInput(e, idx)
        })
        idx.value = event.target.value;
        setData([...data]);
        event.target.replaceWith(div)
        div.textContent = event.target.value;
    }

    const handleClickInput = (e, idx) => {
        const input = document.createElement('input');
        e.target.replaceWith(input)
        input.addEventListener('blur', (event) => {
            handleBlurInput(event, idx)
        })
        input.focus();
        input.value = e.target.textContent;
    };

    const totalSumFunc = (item) => {
        let total = 0;
        for (let elem of item) {
            total += +elem.value;
        }
        totalOfTotal += total;
        return total;
    };

    const totalOfMonth = (item) => {
        let total = 0;
        items.reduce((_, curr) => {
            total += +curr.months.filter((monthName) => monthName.name === item)[0].value;
        }, 0);
        totalOfTotal += total;
        return total;
    };

    return (
        <table border="1">
            {data.map((item) => (
                <tr key={item.store.id}>
                    <th>{item.store.name}</th>
                    {item.months.map((idx) => (
                        <td key={idx.id}>
                            <div style={{width: '100px', height: '20px'}}
                                 onClick={(e) => handleClickInput(e, idx)}></div>
                        </td>
                    ))}
                    <th style={{width: "100"}}>TOTAL: {totalSumFunc(item.months)}</th>
                </tr>
            ))}
            <tr>
                <th>Total</th>
                {months.map((item, index) => (
                    <td key={index}>
                        {totalOfMonth(item)}
                    </td>
                ))}
                <th style={{width: '200px'}}>TOTAL OF TOTALS: {totalOfTotal}</th>
            </tr>
        </table>
    );
};

export default Table;