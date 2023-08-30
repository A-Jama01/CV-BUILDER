import React, { useState } from 'react';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';
import { v4 as uuidv4 } from 'uuid';

function Education () {
    const [educationList, setEducationList] = useState([{
        id: uuidv4(),
        editing: true,
        school: "Harvard",
        degree: "Computer Science",
        city: "Cambridge",
        country: "United States of America",
        startDate: "01/01/1989",
        endDate: "01/01/1993",
    },]);

    function addEducation (education) {
        setEducationList(prevEducation => [...prevEducation, education]);
    }

    function removeEducation (id) {
        setEducationList(prevEducation => prevEducation.filter(education => education.id != id));
    }

    function handleInput (id, updatedValue) {
        setEducationList(prevEducation => prevEducation.map(education =>
            education.id == id ? {...education, ...updatedValue } : education));
    }

    function onSubmit(id) {
        setEducationList(prevEducation => prevEducation.map(education =>
            education.id == id ? {...education, editing: !education.editing} : education));
    }

    function handleEdit(id) {
        setEducationList(prevEducation => prevEducation.map(education =>
            education.id == id ? {...education, editing: true} : education));
    }

    function newEducation () {
        const newEducation = {
            id: uuidv4(),
            editing: true,
            schoolName: "",
            degree: "",
            city: "",
            country: "",
            startDate: "",
            endDate: "",
        }
        addEducation(newEducation);
    }

    return (
        <>
            {educationList.map((education) => 
                education.editing ? (
                    <EducationForm key={education.id} education={education} onSubmit={onSubmit} onInput={handleInput} /> 
                ) : (
                    <div key={education.id}>
                        <div>Education</div>
                        <EducationDisplay education={education} onRemove={removeEducation} onEdit={onSubmit} />
                    </div>
                )
                )}
            <button className='add-button' onClick={newEducation}>Add</button>
        </>
    )
}

export default Education;