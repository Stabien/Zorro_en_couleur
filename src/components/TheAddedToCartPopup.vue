<template>
  <div id="background">
    <div id="popup">
      <div id="container-text">
        <h2>PRODUIT AJOUTÉ AU PANIER !</h2>
        <p>Super ! ton produit personnalisé vient d'être ajouté au panier.</p>
      </div>
      <div id="buttons">
        <button id="close" @click="hidePopup()">
          Attend, j'en veux plus
        </button>
        <button id="go-to-cart" @click="hidePopup()">
          Voir mon panier
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheAddedToCartPopup',
  methods: {
    hidePopup() {
      this.$emit('hide');
    }
  }
}
</script>
<style>
#background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;
}

#popup {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background: white;
  border-radius: 15px;
  padding: 40px 60px;
}

#container-text {
  width: 85%;
  margin: auto;
}

#popup h2 {
  margin-top: 0;
  font-weight: 400;
  color: #3CAAB1;
}

#popup h2,
#popup p {
  text-align: center;
}

#popup p {
  margin: 30px 0;
}

#buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#buttons button {
  width: 40%;
  padding: 10px 0;
  border-radius: 50px;
  cursor: pointer;
  margin: auto 10px;
  border: 2px solid #3CAAB1;
}

#close {
  color: #3CAAB1;
  background: white;
}

#go-to-cart {
  background: #3CAAB1;
  color: white;
}
</style>
