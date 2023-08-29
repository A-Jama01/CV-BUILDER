import React, { useState } from 'react';
import GeneralInfoDisplay from './GeneralInfoDisplay';
import GeneralInfoForm from './GeneralInfoForm';

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({ name: "", email: "",  phoneNumber: "" });
    const [editing, setEditing] = useState(false);
    
    function handleInput(input) {
        setGeneralInfo(input);
    }

    function handleEdit() {
        setEditing(!editing);
    }
    
    return (
        <>
            <h3>General Info</h3>
            {editing ? (
                <GeneralInfoDisplay generalInfo={generalInfo} onEdit={handleEdit} />
            ) : (
                <GeneralInfoForm generalInfo={generalInfo} onInput={handleInput} onSubmit={handleEdit} />
            )}
        </>
    )
}

export default GeneralInfo;