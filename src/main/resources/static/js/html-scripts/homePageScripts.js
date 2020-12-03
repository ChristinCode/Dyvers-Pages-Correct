import { renderHeader } from '../components/header.js'
import { renderFooter } from '../components/footer.js'
renderHeader();
renderFooter();
import{renderSpotlightOne, renderCategoryCircle} from '../components/home-page.js'
import { fetchCat1 } from '../fetch-api.js'
renderSpotlightOne();
renderCategoryCircle();