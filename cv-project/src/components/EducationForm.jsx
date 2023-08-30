import React from 'react'

function EducationForm ({ education, onSubmit, onInput }) {
    function handleSubmit (event) {
        event.preventDefault();
        onSubmit(education.id)
    }

    function handleInputChange(event, field) {
        const newValue = event.target.value;
        onInput(education.id, {[field]: newValue});
    }
    
    return (
        <div className='education-form-section'>
            <form className='education-form'>
                <label>School</label>
                <input type="text" value={education.schoolName} onChange={event => {handleInputChange(event, 'schoolName')}}></input>
                <label>Degree</label>
                <input type="text" value={education.degree} onChange={event => {handleInputChange(event, 'degree')}}></input>
                <label >City</label>
                <input type="text" value={education.city} onChange={event => {handleInputChange(event, 'city')}}></input>
                <label>Country</label>
                <input type="text" value={education.country} onChange={event => {handleInputChange(event, 'country')}}></input>
                <label>Start Date</label>
                <input type="text" value={education.startDate} onChange={event => {handleInputChange(event, 'startDate')}}></input>
                <label>End Date</label>
                <input type="text" value={education.endDate} onChange={event => {handleInputChange(event, 'endDate')}}></input>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default EducationForm;