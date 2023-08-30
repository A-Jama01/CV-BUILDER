import React, { useState } from 'react';
import GeneralInfoDisplay from './GeneralInfoDisplay';
import GeneralInfoForm from './GeneralInfoForm';
import '../styles/GeneralInfo.css'

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({ name: "Richard Williams", email: "RichardWilliams@gmail.com",  phoneNumber: "(770)-625-9669" });
    const [editing, setEditing] = useState(false);
    
    function handleInput(input) {
        setGeneralInfo(input);
    }

    function handleEdit() {
        setEditing(!editing);
    }
    
    return (
        <>
            {editing ? (
                <GeneralInfoForm generalInfo={generalInfo} onInput={handleInput} onSubmit={handleEdit} />
            ) : (
                <GeneralInfoDisplay generalInfo={generalInfo} onEdit={handleEdit} />              
            )}
        </>
    )
}

export default GeneralInfo;