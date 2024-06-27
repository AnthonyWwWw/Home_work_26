import React from 'react';

function ListSmail({ src, count, updateCount }) {

    function handleClick() {
        updateCount(src);
    }

    return (
        <li className="smail-list_smail">
            <img src={src} alt="no img" onClick={handleClick} className='smail_img' />
            <span>{count}</span>
        </li>
    );
}

export default ListSmail;
