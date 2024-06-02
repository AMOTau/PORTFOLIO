let type = new Typed('#changing-text', {
    strings : ['Front-end developer','Java developer','ICT Academic Mentor'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
})
document.getElementById('download-cv-button').addEventListener('click', function() {
    window.location.href = 'Tau A.M.O - CV.pdf';
});