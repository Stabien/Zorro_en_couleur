import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      cloths: [],
      categories: [],
      products: [],
      gallery: {
        clothsToDisplay: [],
        clothDetail: {
          id: 0,
          display: false
        }
      }
    }
  },
  getters: {
    getCloths(state) { return state.cloths; },
    getCategories(state) { return state.categories; },
    getProducts(state) { return state.products; },
    getClothsToDisplay(state) { return state.gallery.clothsToDisplay; },
    getClothDetailId(state) { return state.gallery.clothDetail.id; },
    getClothDetailVisibility(state) { return state.gallery.clothDetail.display; }
  },
  mutations: {
    fillCloths(state, cloths) {
      this.state.cloths = cloths;
      this.state.gallery.clothsToDisplay = cloths;
    },
    fillCategories(state, categories) {
      this.state.categories = categories;
    },
    fillProducts(state, products) {
      this.state.products = products;
    },
    updateProductsFilter(state, productsId) {
      // Clear the array
      this.state.gallery.clothsToDisplay = [];
      // Check if filters are activated
      if (productsId.length > 0) {
        let categoryId = [];
        for (let i = 1; i < 5; i++) {
          let currentCategory = this.state.categories.filter(item => item.id === i);
          for (let j = 0; j < productsId.length; j++) {
            if (currentCategory.find(item => item.productId == productsId[j]) === undefined)
              j = productsId.length;
            if (j == productsId.length - 1)
              categoryId.push(i);
          }
        }
        for (let i in categoryId) {
          for (let j in this.state.cloths) {
            if (this.state.cloths[j].categoryId == categoryId[i])
              this.state.gallery.clothsToDisplay.push(this.state.cloths[j]);
          }
        }
      }
      else {
        this.state.gallery.clothsToDisplay = this.state.cloths;
      }
    },
    updateClothDetail(state, update) {
      this.state.gallery.clothDetail.id = update.clothId;
      this.state.gallery.clothDetail.display = update.visibility;
    }
  }
});

export default store;
