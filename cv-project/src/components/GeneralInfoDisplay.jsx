import React from 'react';

function GeneralInfoDisplay({ generalInfo, onEdit }) {
    if (!generalInfo) {
        return <div>No information submitted yet.</div>;
    }

    function handleEdit() {
        onEdit();
    }

    return (
        <>
            <div className="general-info-display">
                <p>{generalInfo.name}</p> 
                <p>{generalInfo.email}</p>
                <p>{generalInfo.phoneNumber}</p>   
                <button className="edit-button" onClick={handleEdit}>Edit</button>
            </div>
        </>
    )
}
export default GeneralInfoDisplay;