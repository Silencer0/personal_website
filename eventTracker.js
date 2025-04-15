function logEvent(event) {
    const timestamp = new Date().toISOString();
    const eventType = event.type;
    const elementType = event.target.tagName.toLowerCase();
    const elementClass = event.target.className;
    const elementId = event.target.id;
    
    const eventDetails = {
        timestamp,
        type: eventType,
        element: `${elementType}${elementClass ? '.' + elementClass : ''}${elementId ? '#' + elementId : ''}`
    };
    
    console.log(`${eventDetails.timestamp}, ${eventDetails.type}, ${eventDetails.element}`);
}

document.addEventListener('click', logEvent);
document.addEventListener('DOMContentLoaded', () => logEvent({ type: 'pageview', target: document.body }));
