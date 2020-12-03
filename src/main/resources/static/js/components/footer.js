export {
    renderFooter
}
const renderFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `
        <nav class="footer__nav">
            <ul class="footer__container">
                <li class="footer__list-item"><a href="./team.html">Team</a></li>
                <li class="footer__list-item"><a href="./suggestion .html">Suggestions</a></li>
                <li class="contact__item footer__list-item"><a href="http://www.linkedin.com" target="_blank"><img src="../images/contactIcons/linkedin.png" alt="Visit the LinkedIn page for Dyvrs Pages"></a></li>
                <li class="contact__item footer__list-item"><div id="email-icon"><a href="mailto:"><img src="../images/contactIcons/email.png" alt="Send an email to Dyvrs Pages"></a></div></li>
                <li class="contact__item footer__list-item"><a href="http://www.instagram.com" target="_blank"><img src="../images/contactIcons/instagram.png" alt="Visit the Facebook page for Dyvrs Pages"></a></li>
            </ul>
        </nav>
        <div class="footer__copyright">&copy;Dyvrs Pages</div>
    `;
    console.log('hello inside');
    const body = document.querySelector('body');
    body.appendChild(footer);
}