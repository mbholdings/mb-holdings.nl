document.getElementById('sendEmail').addEventListener('click', (e) => {
    e.preventDefault();
    const mailAdress = 'incoming@mb-holdings.nl';
    const subject = 'Ik wil investeren';

    const mailToLink = 'mailto:' + mailAdress + '?subject=' + encodeURIComponent(subject);

    window.location.href = mailToLink;
})