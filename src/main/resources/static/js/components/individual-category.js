import { fetchCategory } from "../fetch-api.js";
import { renderHeader } from "../components/header.js"
import { renderFooter } from "../components/footer.js"
import { clearElementChildren } from "../components/clearElementChildren.js";
import{renderIndividualStore} from "../components/individual-store.js"

export { renderCategory };
console.log("calling individual category js file");

const renderCategory = (categoryId) => {
  fetchCategory(categoryId).then((category) => {
    const mainBody = document.querySelector(".main");
    console.log(mainBody);
    clearElementChildren(mainBody);
    const section = document.createElement("section");
    section.classList.add(".category__business");
    mainBody.appendChild(section);
    const div = document.createElement("div");
    div.classList.add("category__business--container");
    section.appendChild(div);
    const h2 = document.createElement("h2");
    h2.classList.add("category__business--title");
    h2.innerHTML = category.name;
    div.appendChild(h2);
    const ul = document.createElement("ul");
    ul.classList.add("category__business--container-list");
    console.log("inside render category line 12");
    category.store.forEach((store) => {
      const li = document.createElement("li");
      li.classList.add("category__business--list-item");
      li.innerHTML = `
            <a> 
                <img class="category__business--img" src="${store.image}" alt="${store.name} Photo">
                <div class="category__business--company-name">${store.name}</div>
            </a>
        `;
        li.addEventListener("click", () => {
          renderIndividualStore(store.id);
          });
      ul.appendChild(li);
    });
    // const h2 = document.querySelector('.category__business--title');
    h2.appendChild(ul);
  });
};
