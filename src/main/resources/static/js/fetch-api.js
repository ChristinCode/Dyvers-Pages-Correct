export { fetchCategory, fetchStore, fetchTeam, fetchSpotlight, fetchAllCategories, fetchCat1, addNewStore, updateStore };
const fetchCategory = async (id) => {
  return (
    fetch(`/api/category/${id}/`).then((response) => response.json())
  );
};
const fetchStore = async (id) => {
  return fetch(`/api/stores/${id}`).then((response) =>
    response.json()
  );
};
const fetchTeam = async (id) => {
  return fetch(`/api/team/${id}`).then((response) =>
    response.json()
  );
};
const fetchSpotlight = async () => {
  return fetch("/api/stores/random/").then((response) =>
    response.json()
  );
};
const fetchAllCategories = async () => {
  return fetch(`/api/index/`).then((response) =>
    response.json()
  );
};
const fetchCat1 = async () => {
  return (
  fetch(`/api/category/1/`).then((response) => response.json())
  );
};

const addNewStore = async (store, categoryId) => {
  return fetch(`/api/category/${categoryId}/addStore/`, 
  {
    method: "POST",
    headers: { "Content-Type": "application/json",
  },
  body: JSON.stringify(store),
  }).then(response => response.json());
};

const updateStore = async (storeId, store) => {
  console.log(store);
  return fetch(`/api/stores/${storeId}/update-store/`, 
  {
    method: "PATCH",
    headers: { "Content-Type": "application/json",
  },
  body: JSON.stringify(store),
  }).then(response => response.json());
};