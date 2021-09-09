<template>
  <header>
    <Navigation/>
    <div id="banner">
      <img src="@/assets/logo_banner.png">
      <h1>Baseline à trouver pour la marque</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#">Découvrir Zorro en Couleur</a>
    </div>
  </header>
  <main>
    <section id="news">
      <h2>Nos dernières actualités</h2>
      <div id="news-content-container">
        <Carousel/>
      </div>
    </section>
    <section id="our-values">
      <h2>Nos valeurs</h2>
      <div id="values-container">
        <div class="single-value">
          <img src="@/assets/logo_nav.png">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor</p>
        </div>
        <div class="single-value">
          <img src="@/assets/logo_nav.png">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor</p>
        </div>
        <div class="single-value">
          <img src="@/assets/logo_nav.png">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor</p>
        </div>
        <div class="single-value">
          <img src="@/assets/logo_nav.png">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor</p>
        </div>
      </div>
    </section>
    <section id="last-sells">
      <div id="last-sells-content">
        <h2>Nos dernières commandes</h2>
        <div id="sells-container">
          <LastItemsSold/>
        </div>
      </div>
    </section>
    <section id="team">
    </section>
    <section id="contact">
      <form v-on:submit.prevent="contactSubmit">
        <h2>Nous contacter ?</h2>
        <div id="names">
          <div id="last-name" class="names">
            <label for="last-name">Nom</label>
            <input
              :class="{ active: contactForm.errorToDisplay == 0 }"
              v-model="contactForm.lastNameField"
              id="last-name"
              type="text"
              name=""
            >
          </div>
          <div id="first-name" class="names">
            <label for="first-name">Prénom</label>
            <input
              :class="{ active: contactForm.errorToDisplay == 1 }"
              v-model="contactForm.firstNameField"
              id="first-name"
              type="text"
              name=""
            >
          </div>
        </div>
        <label for="email">Adresse email</label>
        <input
          :class="{ active: contactForm.errorToDisplay == 2 }"
          v-model="contactForm.emailField"
          id="email"
          type="text"
          name=""
        >
        <label for="message">Votre message</label>
        <textarea
          :class="{ active: contactForm.errorToDisplay == 3 }"
          v-model="contactForm.messageField"
          id="message"
          type="text"
          name=""
        >
        </textarea>
        <input type="submit" name="" value="Envoyer">
      </form>
    </section>
  </main>
  <footer>
    <img id="preview">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt</p>
    <ul>
      <li><a href="#">Nos produits</a></li>
      <li><a href="#">Nos tissus</a></li>
      <li><a href="#">Notre atelier</a></li>
      <li><a href="#">Nos partenaires</a></li>
      <li><a href="#">Nous contacter</a></li>
    </ul>
    <div id="social-networks">
      <a href="#"><img src="@/assets/linkedin.png"></a>
      <a href="#"><img src="@/assets/instagram.png"></a>
    </div>
    <span>Mentions légales</span>
  </footer>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Carousel from '../components/Carousel.vue'
import LastItemsSold from '../components/LastItemsSold.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Carousel,
    LastItemsSold
  },
  data: () => ({
    contactForm: {
      lastNameField: '',
      firstNameField: '',
      emailField: '',
      messageField: '',
      errorToDisplay: -1
    }
  }),
  methods: {
    contactSubmit() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // Check fields
      if (this.contactForm.lastNameField.length < 1) {
        this.contactForm.errorToDisplay = 0;
        return false;
      }
      if (this.contactForm.firstNameField.length < 1) {
        this.contactForm.errorToDisplay = 1;
        return false;
      }
      if (!emailRegex.test(this.contactForm.emailField)) {
        this.contactForm.errorToDisplay = 2;
        return false;
      }
      if (this.contactForm.messageField.length < 1) {
        this.contactForm.errorToDisplay = 3;
        return false;
      }
      // Clear fields
      this.contactForm.lastNameField = '';
      this.contactForm.firstNameField = '';
      this.contactForm.emailField = '';
      this.contactForm.messageField = '';
      this.contactForm.errorToDisplay = -1;
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body {
  background: white;
  padding: 0;
  margin: 0;
  font-family: 'Inter';
}

/*** Header style ***/

header {
  background: #F6E9CD;
  padding-bottom: 140px;
}

.container-side-nav-item {
  flex: 1;
  display: block;
  margin: auto;
}

/*** Banner style ***/

#banner img {
  display: block;
  margin: auto;
}

#banner h1, #banner p {
  display: block;
  text-align: center;
}

#banner h1 {
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 40px;
}

#banner p {
  width: 50%;
  margin: auto;
}

#banner a {
  display: block;
  width: fit-content;
  text-decoration: none;
  color: white;
  margin: 20px auto;
  margin-top: 30px;
  padding: 13px 26px;
  background: #323232;
}

/*** News section style ***/

#news {
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 70px;
  padding-bottom: 115px;
  margin: auto;
}

#news-content-container {
  position: relative;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  padding-bottom: 30px;
}

#news h2 {
  color: #323232;
  font-size: 30px;
  margin-bottom: 0;
}

/*** Our values style ***/

#our-values {
  background: #BDBB8F;
  padding-top: 70px;
  padding-bottom: 520px;
}

#our-values h2 {
  font-size: 32px;
  width: fit-content;
  margin: auto;
}

#values-container {
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: auto;
  margin-top: 30px;
}

.single-value {
  padding: 30px;
  margin: auto;
}

.single-value img {
  display: block;
  width: 100px;
  height: 100px;
  background: grey;
  margin: auto;
  border-radius: 60px;
  border: none;
  margin-bottom: 30px;
}

.single-value p {
  text-align: center;
}

/*** Last sells style ***/

#last-sells {
  width: 92%;
  margin: auto;
  margin-top: -480px;
  padding: 70px 50px;
  background: #323232;
  color: white;
}

#last-sells-content h2 {
  margin-left: 10px;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 30px;
}

#last-sells-content {
  display: block;
  margin: auto;
  width: fit-content;
  padding: 20px 80px;
  flex-wrap: wrap;
}

#sells-container {
  display: flex;
  flex-direction: row;
  margin: auto;
}

@media (max-width: 1700px) {
  #last-sells {
    padding: 70px 0;
    padding-bottom: 90px;
  }
  #last-sells-content {
    padding: 20px 0;
  }
  #last-sells-content {
    width: 80%;
  }
}

@media (max-width: 1420px) {
  #last-sells {
    width: 85%;
  }
  #sells-container {
    flex-wrap: wrap;
  }
  #last-sells-content {
    width: 70%;
  }
  .sell-item {
    margin-bottom: 60px;
  }
  .sell-item a {
    margin-top: 10px;
  }
}

@media (max-width: 1100px) {
  #our-values {
    padding-bottom: 50px;
  }
  #last-sells {
    margin-top: 0;
    width: 100%;
  }
  #last-sells-content {
    width: 85%;
  }
  #last-sells h2 {
    text-align: center;
  }
  #sells-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: fit-content;
  }
  .sell-item {
    width: 400px;
  }
  .sell-item img {
    height: 300px;
  }
}

@media (max-width: 700px) {
  .sell-item {
    width: 320px;
  }
  .sell-item img {
    height: 240px;
  }
}

@media (max-width: 420px) {
  .sell-item {
    width: 240px;
  }
  .sell-item img {
    height: 180px;
  }
}
/*** Team section style ***/

#team {
  background: grey;
  padding: 200px;
}

/*** Contact section ***/

#contact {
  padding-top: 50px;
  padding-bottom: 70px;
  display: flex;
  flex-direction: row;
}

#contact form {
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: auto;
}

#contact h2 {
  font-size: 32px;
}

#names {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.names {
  display: flex;
  flex-direction: column;
  width: 48%;
}

#contact form label {
  margin: 5px 0;
}

#contact form input,
#contact form textarea {
  padding: 0px 5px;
  margin-bottom: 10px;
  font-family: 'Inter';
  border: inset 1px solid black;
}

#contact form input[type="text"] {
  height: 35px;
  font-size: 16px;
}

#contact form textarea {
  resize: none;
  height: 150px;
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
}

#contact form input[type="submit"] {
  margin-top: 10px;
  width: fit-content;
  background: #323232;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
}

#contact form input.active,
#contact form textarea.active {
  border: 2px solid red;
}

/*** Footer style ***/

footer {
  background: #323232;
  color: white;
  padding-bottom: 30px;
  padding-top: 60px;
}

#preview, footer p, footer ul,
#social-networks, footer span {
  margin: auto;
  width: fit-content;
}

#preview {
  display: block;
  width: 85px;
  height: 85px;
  background: grey;
  border-radius: 60px;
  margin: auto;
  margin-bottom: 25px;
}

footer p {
  width: 25%;
  text-align: center;
  color: #AAAAAA;
}

footer ul {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin-top: 50px;
}

footer ul li {
  list-style: none;
  margin: 0px 15px;
  width: 140px;
  text-align: center;
}

footer ul li a {
  text-decoration: none;
  color: white;
}

#social-networks {
  margin-top: 50px;
}

#social-networks img {
  margin: 0px 5px;
}

footer span {
  display: block;
  margin: auto;
  margin-top: 10px;
  color: #AAAAAA;
  font-size: 15px;
}
</style>
