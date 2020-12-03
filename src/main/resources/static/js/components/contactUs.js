const renderContactUs = () => {
    const contactMain = document.querySelector(".contact__main");
    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("contact__title");
    contactMain.appendChild(contactTitle);
    const contactContainer = document.createElement("ul");
    contactContainer.classList.add("contact__container");
    contactContainer.innerHTML = `
        <li class="contact__item"><a href="http://www.linkedin.com" target="_blank"><img src="../images/contactIcons/linkedin.png" alt="Visit the LinkedIn page for Dyvrs Pages"></a></li>
        <li class="contact__item"><div id="email-icon"><a href="mailto:"><img src="../images/contactIcons/email.png" alt="Send an email to Dyvrs Pages"></a></div></li>
        <li class="contact__item"><a href="http://www.instagram.com" target="_blank"><img src="../images/contactIcons/instagram.png" alt="Visit the Facebook page for Dyvrs Pages"></a></li>
    `;
    contactMain.appendChild(contactContainer);
}
export {renderContactUs}