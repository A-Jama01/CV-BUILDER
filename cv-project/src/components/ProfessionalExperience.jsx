import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ProfessionalExperienceDisplay from './ProfessionalExperienceDisplay';
import ProfessionalExperienceForm from './ProfessionalExperienceForm';

function ProfessionalExperience() {
    const [isHovered, setIsHovered] = useState(false);
    const [experienceList, setExperienceList] = useState([{
        id: uuidv4(),
        editing: false,
        companyName: 'Wells Fargo Advisors',
        position: 'Senior Financial Advisor',
        city: 'Houston',
        country: 'United States of America',
        startDate: '09/09/2001',
        endDate: '05/05/2005',
        description: `Deliver financial Advice to  clients proposing  strategies to achieve short- and long-term objectives
                      for investment, insurance, business, and estate, planning with minimal risk.
                      Develop, review and optimize investment portfolios for 300+ high value clients with $190 million AUM.`
    },{
        id: uuidv4(),
        editing: false,
        companyName: 'Suntrust Investment Services Inc',
        position: 'Financial Advisor',
        city: 'New Orleans',
        country: 'United States of America',
        startDate: '07/19/2010',
        endDate: '12/03/2017',
        description: `Served as knowledgeable financial advisor to clients, managing over $20.75M invesment of 90+ individual
                    and corporate clients. Devised and applied  a new training and accountability program that increased
                    productivity from #10 to #3 in the region in less than 2 year period.`
    },])

    function addExperience(experience) {
        setExperienceList([...experienceList, experience]);
    }

    function removeExperience(id) {
        setExperienceList(experienceList.filter(experience => experience.id != id));
    }

    function onInput(id, newValue) {
        setExperienceList(experienceList.map(experience =>
            experience.id == id ? {...experience, ...newValue} : experience));
    }

    function onSubmit(id) {
        setExperienceList(experienceList.map(experience => 
            experience.id == id ? {...experience, editing: !experience.editing} : experience));
    }

    function newExperience() {
        const newExperience = {
            id: uuidv4(),
            editing: true,
            companyName: '',
            position: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
            description: ""
        }
        addExperience(newExperience);
    }

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="experience-section-container">
            <div className="section-title">Professional Experience</div>
            {experienceList.map(experience => 
                experience.editing ? (
                    <ProfessionalExperienceForm key={experience.id} experience={experience} onInput={onInput} onSubmit={onSubmit} />
                ) : (
                    <ProfessionalExperienceDisplay key={experience.id} experience={experience} onEdit={onSubmit} onRemove={removeExperience}  />
                )
            )}
            {isHovered && <button className="add-button" onClick={newExperience}>Add</button>}
        </div>
    )
}

export default ProfessionalExperience