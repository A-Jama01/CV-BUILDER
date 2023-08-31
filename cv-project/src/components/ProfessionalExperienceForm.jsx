import React from "react";

function ProfessionalExperienceForm({ experience, onInput, onSubmit }) {
    function handleInput(field, input) {
        const newValue = { [field]: input };
        onInput(experience.id, newValue);
    }

    function handleSubmit(event) {
        onSubmit(experience.id);
    }

    return (
        <div>
            <form className="experience-form">
                <label>Company</label>
                <input value={experience.companyName} onChange={event => {handleInput('companyName', event.target.value)}}></input>
                <label>Position</label>
                <input value={experience.position} onChange={event => {handleInput('position', event.target.value)}}></input>
                <label>City</label>
                <input value={experience.city} onChange={event => {handleInput('city', event.target.value)}}></input>
                <label>Country</label>
                <input value={experience.country} onChange={event => {handleInput('country', event.target.value)}}></input>
                <label>Start Date</label>
                <input value={experience.startDate} onChange={event => {handleInput('startDate', event.target.value)}}></input>
                <label>End Date</label>
                <input value={experience.endDate} onChange={event => {handleInput('endDate', event.target.value)}}></input>
                <label>Description</label>
                <textarea className="description-area" value={experience.description} onChange={event => {handleInput('description', event.target.value)}}></textarea>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ProfessionalExperienceForm;