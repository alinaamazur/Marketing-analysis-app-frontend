import React, { useState } from 'react';
import addIcon from '../Icons/addIcon.png';
import '../Components/ComponentsCss/AddAccounts.css';

const AddAccounts = ({ accounts, setAccounts, setData, openModal }) => {
    const removeAccount = (index) => {
        setAccounts(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className='Sidebar-icons'>
            {accounts.map((acc, i) => (
                <img
                    key={i}
                    src={acc.profile_picture_url}
                    alt=''
                    className='Sidebar-profile-icon'
                    onClick={() => setData(acc)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        removeAccount(i);
                    }}
                />
            ))}

            {accounts.length < 2 && (
                <img
                    src={addIcon}
                    alt=''
                    className='Add-icon'
                    onClick={openModal}
                />
            )}
        </div>
    );
};

export default AddAccounts;
