import { fetchSpotlight, fetchAllCategories } from "../fetch-api.js";
import{renderCategory} from "./individual-category.js"
import { renderHeader } from "./header.js";
import { renderFooter } from "./footer.js";
import { renderIndividualStore } from "./individual-store.js";
export { renderSpotlightOne, renderCategoryCircle };


const renderSpotlightOne = () => {
  for(let i = 0; i<6; i++){
    fetchSpotlight().then((store) => {
      const spotlightOne = document.createElement("li");
      spotlightOne.classList.add("index__spot-light--list-item");
      spotlightOne.innerHTML = `
          <img class="index__spot-light--img" src="${store.image}" alt="Company Name Here Photo">
          <div class="index__spot-light--company-name">${store.name}</div>
          `;
      const ul = document.querySelector(".index__spot-light--container-list");
      ul.appendChild(spotlightOne);
      spotlightOne.addEventListener("click", () => {
        renderIndividualStore(store.id);
      });
    });
  }};
  
  const renderCategoryCircle = () => {
    console.log("render categorycircle");
    fetchAllCategories().then((category)=>{
      const indexCategory = document.querySelector(".index__category");
      const indexCircleContainer = document.createElement("div");
      indexCircleContainer.classList.add("index__circle_container");
      let degree = 0;
      for (let i = 0; i < category.length; i++) {
        const categoryClick = document.createElement('a');
        categoryClick.classList.add(`deg${degree}`);
        const categoryimage = document.createElement('img');
        categoryimage.src =category[i].image;
        categoryimage.addEventListener("click", () => {
          console.log(category[i].name)
          renderCategory(category[i].id);
        });
        categoryClick.appendChild(categoryimage);
        const singleCatName = document.createElement('h4');
        singleCatName.classList.add('index__single-category--name');
        singleCatName.innerHTML= `${category[i].name}`;
        categoryClick.appendChild(singleCatName);
        degree += 45;
   


        
        indexCircleContainer.appendChild(categoryClick);
      }
        indexCategory.appendChild(indexCircleContainer);
    })
  }