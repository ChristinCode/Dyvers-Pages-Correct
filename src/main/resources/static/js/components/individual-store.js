import { fetchStore } from "../fetch-api.js"
import { clearElementChildren } from "./clearElementChildren.js";
import { renderHeader } from "../components/header.js"
import { renderFooter } from "../components/footer.js"
export { renderIndividualStore }


console.log("calling individual store js correctly");
const renderIndividualStore = (storeId) => {
    fetchStore(storeId).then(store => {
        const mainBody = document.querySelector(".main");
        mainBody.classList.add("individual-store__main");
        clearElementChildren(mainBody);
        console.log("inside render individual store")
        const h3 = document.createElement("h2");
        h3.classList.add("individual-store__title");
        mainBody.appendChild(h3);
        
        const h2 = document.querySelector(".individual-store__title");
        h2.innerHTML = store.name;
        const storeGridContainer = document.createElement("div");
        storeGridContainer.classList.add("individual-store__gridContainer");
        mainBody.appendChild(storeGridContainer);
        const storeImageListContainer = document.createElement("ul");
        storeGridContainer.appendChild(storeImageListContainer);
        const storeImageListItem = document.createElement("li");
        storeImageListItem.innerHTML = `
        <img class="individual-store__img" src=${store.image} alt="Company Photo ">
        <br>
        <br>
        <li>
         <div class="mapouter"><div class="gmap_canvas"><iframe width="343" height="343" id="gmap_canvas" src="${store.address}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.org">embed google map</a></div><style>.mapouter{position:relative;text-align:right;height:450px;width:450px;}.gmap_canvas {overflow:hidden;background:none!important;height:450px;width:450px;}</style></div>
        </li>
        </ul>
           `
        storeImageListContainer.appendChild(storeImageListItem);
        const gridContainerItem2 = document.createElement("div");
        gridContainerItem2.classList.add("individual-store__gridContainerItem2");
        gridContainerItem2.innerHTML = `
        <h3 class="individual-store__product-list">Product List:</h3>
        <ul class="individual-store__product_list_container">
            <li class="individual-store__item">${store.productList}</li>
        </ul>
        <ul class="individual-store__info-container">
            <li class= "individual-store__info-item bold-website" ><a href="${store.website}" target="_blank">Website</a></li>
            <li class="individual-store__info-item"><h3>Telephone</h3> ${store.phoneNumber}</li>
            <li class="individual-store__info-item"><h3>Hours:</h3> ${store.storeHours}</li>
        </ul>
            <h3 class="individual-store__about">About:</h3>
            <p class="individual-store__about-paragraph">${store.description}</p>
        `;
        storeGridContainer.appendChild(gridContainerItem2);
    })
}