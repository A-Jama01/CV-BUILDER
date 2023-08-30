import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function EducationDisplay ({ education, onRemove, onEdit }) {
    function removeEducation () {
        onRemove(education.id);
    }

    function handleEdit() {
        onEdit(education.id);
    }

    return (
        <div>
            <div>{education.schoolName}</div>
            <div>{education.degree}</div>
            <div>{education.city}</div>
            <div>{education.country}</div>
            <div>{education.startDate}</div>
            <div>{education.endDate}</div>
            <button className='education-edit-button' onClick={handleEdit}>Edit</button>
            <button className='remove-button' onClick={removeEducation}>Remove</button>
        </div>
    )
}

export default EducationDisplay;