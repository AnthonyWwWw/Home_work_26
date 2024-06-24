import React, { useState, useEffect } from 'react';

function ListSmail({ src, count, onClick }) {
    const [localCount, setLocalCount] = useState(count);

    useEffect(() => {
        setLocalCount(count);
    }, [count]);

    const handleClick = () => {
        setLocalCount(localCount + 1);
        if (onClick) {
            onClick();
        }
    };

    return (
        <li className="smail-list_smail">
            <img src={src} alt="no img" onClick={handleClick} className='smail_img' />
            <span>{localCount}</span>
        </li>
    );
}

export default ListSmail;
