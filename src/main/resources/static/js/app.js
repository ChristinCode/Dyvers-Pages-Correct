import {renderBusinessOwnerPage, updateOwnerPageFunction} from '../components/businessOwnerPage.js'
import { renderContactUs } from '../components/contactUs.js'
import{renderSpotlightOne, renderCategoryCircle} from '../components/home-page.js'
import { fetchCat1 } from '../fetch-api.js'
import {renderCategory} from '../components/individual-category.js'
import { renderIndividualStore  } from '../components/individual-store.js'
renderIndividualStore(25);
renderCategory(4);
renderSpotlightOne();
renderCategoryCircle();
renderContactUs();
renderBusinessOwnerPage();
const id1 = document.querySelector(`.id1`);
console.log(id1);
id1.addEventListener("click", ()=> {
     fetchCat1();
})
