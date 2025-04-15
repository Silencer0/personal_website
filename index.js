function handleCV() {
    // Open PDF in new tab first
    window.open('images/cv.pdf', '_blank');
    
    // Then trigger download
    const link = document.createElement('a');
    link.href = 'images/cv.pdf';
    link.download = 'Anivarth_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});
