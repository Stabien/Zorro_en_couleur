<template>
  <nav>
    <a href="/" id="nav-logo" class="container-side-nav-item">
      <img src="@/assets/logo_nav.png">
    </a>
    <div id="container-nav-menu">
      <ul>
        <li
          v-for="item in buttonsToDisplay"
          :key="item"
          :class="{ active: isCurrentRoute(item.path) }"
        >
          <a :href="item.path">
            {{ item.name }}
            <span></span>
          </a>
        </li>
      </ul>
    </div>
    <div id="nav-right" class="container-side-nav-item">
      <a href="#"><img src="@/assets/shopping-cart.png"></a>
      <a href="#">Nous contacter</a>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Navigation',
  data: () => ({
    buttonsToDisplay: [
      {
        name: 'Accueil',
        path: '/',
      },
      {
        name: 'La boutique',
        path: '/boutique',
      },
      {
        name: 'Notre atelier',
        path: '#'
      },
      {
        name: 'Gallerie des tissus',
        path: '/gallerie',
      },
      {
        name: 'Nos partenaires',
        path: '#'
      }
    ]
  }),
  methods: {
    isCurrentRoute(route) {
      if (useRoute().path == '/')
        return useRoute().path == route;
      return route.includes(useRoute().path.split('/')[1]);
    }
  }
}
</script>

<style>
nav {
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  background: #F6F9FC;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  padding: 5px;
  margin: 0;
}

nav ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
}

nav ul li {
  list-style: none;
  margin: 0;
}

nav ul a {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 0px;
}

nav ul a:hover {
  color: #3CAAB1;
}

nav ul a span {
  display: block;
  margin: 0 auto;
  width: 0%;
  border-bottom: 3px solid #3CAAB1;
  transition: 0.25s;
  margin-top: 8px;
}

nav ul a:hover span {
  width: 100%;
}

nav ul .active a {
  color: #3CAAB1;
}

nav ul .active a span {
  width: 100%;
}

#nav-logo {
  width: 20%;
}

#nav-logo img {
  margin: auto;
  margin-left: 20px
}

#container-nav-menu {
  flex: 3;
  display: block;
  margin: auto;
}

#nav-right {
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-right: 0px;
  justify-content: center;
  width: 20%;
}

#nav-right a:first-child {
  margin: auto 30px;
  width: 28px;
  height: 28px;
}

#nav-right a:first-child img {
  width: 32px;
  height: 32px;
}

#nav-right a:last-child {
  display: block;
  width: fit-content;
  height: fit-content;
  padding: 12px 16px;
  background: white;
  color: #3CAAB1;
  border-radius: 10px;
  transition: 0.25s;
}

#nav-right a:last-child:hover {
  background: #3CAAB1;
  color: white;
}
</style>
