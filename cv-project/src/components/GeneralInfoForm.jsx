import React, { useState } from 'react';

function GeneralInfoForm({ generalInfo, onInput, onSubmit }) {

    function handleNameInput(input) {
        const newGeneralInfo = { ...generalInfo, name: input };
        onInput(newGeneralInfo);
    }

    function handleEmailInput(input) {
        const newGeneralInfo = { ...generalInfo, email: input };
        onInput(newGeneralInfo);
    }

    function handlePhoneInput(input) {
        const newGeneralInfo = { ...generalInfo, phoneNumber: parseInt(input) };
        onInput(newGeneralInfo);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <>
            <form className="general-info-form">
                <label>
                    Name:
                </label>
                <input
                    type="text"
                    value={generalInfo.name}
                    onChange={(event) => handleNameInput(event.target.value)}
                />
                <label>
                    Email:
                </label>
                <input
                    type="text"
                    value={generalInfo.email}
                    onChange={(event) => handleEmailInput(event.target.value)}
                />
                <label>
                    Phone Number:
                </label>
                <input
                    type="number"
                    value={generalInfo.phoneNumber}
                    onChange={(event) => handlePhoneInput(event.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default GeneralInfoForm;