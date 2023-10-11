import React from 'react'

export default function DataBox(title, data) {
    function showData(data) {
        console.log(`data ${data}`);
        const datafetched = data.map((d) => {
            < ul >
                <li>{d.name}</li>
                <li>{d.edad}</li>
            </ul >
        });
        return datafetched
    }
    return (
        <div className="principal">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="data">
                {showData(data)}
            </div>
        </div>
    )
}
