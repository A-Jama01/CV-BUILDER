import React, { useState } from 'react';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';
import { v4 as uuidv4 } from 'uuid';

function Education () {
    const [isHovered, setIsHovered] = useState(false);
    const [educationList, setEducationList] = useState([{
        id: uuidv4(),
        editing: false,
        schoolName: "Harvard College",
        degree: "Bachelor of Science in Computer Science",
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

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
            <div className="section-title">EDUCATION</div>
            {educationList.map((education) => 
                education.editing ? (
                    <EducationForm key={education.id} education={education} onSubmit={onSubmit} onInput={handleInput} /> 
                ) : (
                    <EducationDisplay key={education.id} education={education} onRemove={removeEducation} onEdit={onSubmit} />
                )
            )}
            {isHovered && <button className='add-button' onClick={newEducation}>Add</button>}
        </div>
    )
}

export default Education;