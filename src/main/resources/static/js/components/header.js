export {
    renderHeader
}
console.log('hello first');
const renderHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <h1 class="header__logo">  
            <a href="./index.html">
            <img class="logo" src="../../static/images/book.jpg" alt="logo" />
            </a>
        </h1>
            <nav class="header__nav">
                <ul class= "header__container">
                    <li class="header__list-item"><a href="./businessOwnerPage.html">Owner Portal</a></li>
                    <li class="header__list-item"><a href="./about.html">Mission</a> </li>
                </ul>
            </nav>
    `;
    console.log('hello inside');
    const body = document.querySelector('body');
    body.prepend(header);
}