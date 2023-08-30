import React from 'react';
import '../styles/GeneralInfoDisplay.css';

function GeneralInfoDisplay({ generalInfo, onEdit }) {
    if (!generalInfo) {
        return <div>No information submitted yet.</div>;
    }

    function handleEdit() {
        onEdit();
    }

    return (
        <div className="general-info-display">
            <div className='name'>{generalInfo.name}</div> 
            <div className='email'>{generalInfo.email}</div>
            <div className='phone-number'>{generalInfo.phoneNumber}</div>  
            <div className="edit-button">
                <button onClick={handleEdit}>Edit</button>
            </div> 
        </div>
    )
}
export default GeneralInfoDisplay;