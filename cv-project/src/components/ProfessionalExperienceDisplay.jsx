import React, { useState, useEffect } from "react";

function ProfessionalExperienceDisplay({ experience, onEdit, onRemove }) {
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

    function handleEdit() {
        onEdit(experience.id);
    }

    function handleRemove() {
        onRemove(experience.id);
    }

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div className="section-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="first-line">
                <div><b>{experience && experience.companyName ? experience.companyName.toUpperCase() : ""}</b></div>
                <div>{experience.city}, {experience.country}</div>
            </div>
            <div className="first-line">
                <div>{experience.position}</div>
                <div>{experience.startDate} - {experience.endDate}</div>
            </div>
            <div className="description-display">{experience.description}</div>
            {showButtons && (
                <div className="edit-remove-container">
                    <button className="experience-edit-button" onClick={handleEdit}>Edit</button>
                    <button className="remove-button" onClick={handleRemove}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default ProfessionalExperienceDisplay;