import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EducationDisplay ({ education, onRemove, onEdit }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        let timeout;

        if (isHovered) {
            setShowButtons(true);
        } else {
            timeout = setTimeout(() => {
                setShowButtons(false);
            }, 500);
        }
        return () => clearTimeout(timeout);
    }, [isHovered]);

    function removeEducation () {
        onRemove(education.id);
    }

    function handleEdit() {
        onEdit(education.id);
    }

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div className='section-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='first-line'>
                <div>{education && education.schoolName ? education.schoolName.toUpperCase() : ""}</div>
                <div>{education.city}, {education.country}</div>
            </div>
            <div className='first-line'>
                <div>{education.degree}</div>
                <div>{education.startDate} - {education.endDate}</div>
            </div>
            {showButtons && (
                <div className='edit-remove-container'>
                    <button className='education-edit-button' onClick={handleEdit}>Edit</button>
                    <button className='remove-button' onClick={removeEducation}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default EducationDisplay;