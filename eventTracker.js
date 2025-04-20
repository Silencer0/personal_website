const clickCounts = {
    aboutParagraph: 0,
    profileSection: 0,
    educationSection: 0,
    skillsSection: 0,
    cvLink: 0
};

function logEvent(event) {
    const timestamp = new Date().toISOString();
    const eventType = event.type;
    let objectType = 'unknown';

    // Determine object type
    if (event.target.tagName === 'IMG') {
        objectType = 'image';
    } else if (event.target.tagName === 'P' || event.target.classList.contains('textabm')) {
        objectType = 'text';
    } else if (event.target.tagName === 'BUTTON') {
        objectType = 'button';
    } else if (event.target.classList.contains('timeline-content')) {
        objectType = 'education-card';
    } else if (event.target.classList.contains('skill-category')) {
        objectType = 'skills-card';
    }

    // Log in required format
    console.log(`${timestamp}, ${eventType}, ${objectType}`);

    // Track specific section clicks
    if (event.type === 'click') {
        if (isInAboutSection(event.target)) {
            clickCounts.aboutParagraph++;
            console.log(`About paragraph clicks: ${clickCounts.aboutParagraph}`);
        }
        if (isInProfileSection(event.target)) {
            clickCounts.profileSection++;
            console.log(`Profile section clicks: ${clickCounts.profileSection}`);
        }
        if (isInEducationSection(event.target)) {
            clickCounts.educationSection++;
            console.log(`Education section clicks: ${clickCounts.educationSection}`);
        }
        if (isInSkillsSection(event.target)) {
            clickCounts.skillsSection++;
            console.log(`Skills section clicks: ${clickCounts.skillsSection}`);
        }
        if (isCVLink(event.target)) {
            clickCounts.cvLink++;
            console.log(`CV link clicks: ${clickCounts.cvLink}`);
        }
    }
    
    const eventDetails = {
        timestamp,
        type: eventType,
        element: `${event.target.tagName.toLowerCase()}${event.target.className ? '.' + event.target.className : ''}${event.target.id ? '#' + event.target.id : ''}`
    };
    
    console.log(`${eventDetails.timestamp}, ${eventDetails.type}, ${eventDetails.element}`);
}

function isInAboutSection(element) {
    return element.closest('.textabm') !== null;
}

function isInProfileSection(element) {
    return element.closest('.pfp') !== null || element.closest('.image-fan') !== null;
}

function isInEducationSection(element) {
    return element.closest('.timeline') !== null;
}

function isInSkillsSection(element) {
    return element.closest('.skills-grid') !== null;
}

function isCVLink(element) {
    return element.closest('button[onclick="handleCV()"]') !== null || 
           (element.tagName.toLowerCase() === 'a' && element.href.includes('cv.pdf'));
}

document.addEventListener('click', logEvent);
document.addEventListener('DOMContentLoaded', () => logEvent({ type: 'pageview', target: document.body }));
