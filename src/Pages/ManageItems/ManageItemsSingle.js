import React from 'react';

const ManageItemsSingle = ({ p }) => {
    const { name, quantity, supplier, sold } = p;
    let count = 1;
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{sold}</td>
            <td>{supplier}</td>
            <td style={{ cursor: "pointer" }} className="tooltip">Hover over me
                <span class="tooltiptext">Tooltip text</span>A</td>
            <td style={{ cursor: "pointer" }} >X</td>

        </tr>
    );
};

export default ManageItemsSingle;