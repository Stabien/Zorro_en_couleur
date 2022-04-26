import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state() {
    return {
      cloths: [],
      categories: [],
      products: [],
      gallery: {
        clothsToDisplay: [],
        clothDetail: {
          id: 0,
          display: false,
        },
      },
    };
  },
  actions: {
    fillCloths(cloths) {
      this.cloths = cloths;
      this.gallery.clothsToDisplay = cloths;
    },
    fillCategories(categories) {
      this.categories = categories;
    },
    fillProducts(products) {
      this.products = products;
    },
    updateProductsFilter(productsId) {
      // Clear the array
      this.gallery.clothsToDisplay = [];
      // Check if filters are activated
      if (productsId.length > 0) {
        let categoryId = [];
        for (let i = 1; i < 5; i++) {
          let currentCategory = this.categories.filter((item) => item.id === i);
          for (let j = 0; j < productsId.length; j++) {
            if (
              currentCategory.find(
                (item) => item.productId == productsId[j]
              ) === undefined
            )
              j = productsId.length;
            if (j == productsId.length - 1) categoryId.push(i);
          }
        }
        for (let i in categoryId) {
          for (let j in this.cloths) {
            if (this.cloths[j].categoryId == categoryId[i])
              this.gallery.clothsToDisplay.push(this.cloths[j]);
          }
        }
      } else {
        this.gallery.clothsToDisplay = this.cloths;
      }
    },
    updateClothDetail(update) {
      this.gallery.clothDetail.id = update.clothId;
      this.gallery.clothDetail.display = update.visibility;
    },
  },
  getters: {
    getCloths(state) {
      return state.cloths;
    },
    getCategories(state) {
      return state.categories;
    },
    getProducts(state) {
      return state.products;
    },
    getClothsToDisplay(state) {
      return state.gallery.clothsToDisplay;
    },
    getClothDetailId(state) {
      return state.gallery.clothDetail.id;
    },
    getClothDetailVisibility(state) {
      return state.gallery.clothDetail.display;
    },
    getOneClothById(state) {
      return (clothId) => {
        for (const cloth of state.cloths)
          if (cloth.id === clothId) return cloth;
        return {};
      };
    },
  },
});
