import React, { useState } from 'react';
import '../styles/GeneralInfoForm.css'

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
        const newGeneralInfo = { ...generalInfo, phoneNumber: input };
        onInput(newGeneralInfo);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <div className="general-info-form-section">
            <div className="form-title">General Information</div>
            <form className="general-info-form">
                <label>
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={generalInfo.name}
                    onChange={(event) => handleNameInput(event.target.value)}
                />
                <label>
                    Email
                </label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={generalInfo.email}
                    onChange={(event) => handleEmailInput(event.target.value)}
                />
                <label>
                    Phone Number
                </label>
                <input
                    type="text"
                    placeholder="Enter your number"
                    value={generalInfo.phoneNumber}
                    onChange={(event) => handlePhoneInput(event.target.value)}
                />
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default GeneralInfoForm;