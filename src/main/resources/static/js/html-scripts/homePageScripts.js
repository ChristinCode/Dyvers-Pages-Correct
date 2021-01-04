import{renderCategory} from "../components/individual-category.js"
import{renderSpotlightOne, renderCategoryCircle} from '../components/home-page.js'
import { fetchCat1 } from '../fetch-api.js'
renderSpotlightOne();

// Renders category circle OR current category
const renderCategorySection = () => {
  // check URL for a category
  // if found, render that category
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('categoryId');
  if (categoryId) {
    renderCategory(categoryId);
  }
  else {
    renderCategoryCircle();
  }
}

window.addEventListener('popstate', function(){
  renderCategorySection();
});

renderCategorySection();
