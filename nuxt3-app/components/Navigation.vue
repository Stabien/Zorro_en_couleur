<template>
  <div class="invisible block lg:hidden p-4 flex flex-row justify-between md:relative">
    <NuxtLink to="/" id="nav-logo" class="width-auto lg:w-1/5 container-side-nav-item">
      <img src="@/assets/logo_nav.png" class="mx-auto lg:ml-5" />
    </NuxtLink>
    <div class="hidden lg:block" id="container-nav-menu">
      <ul class="flex flex row">
        <li v-for="item in routes" :key="item.name" :class="{ active: currentRoute === item.path }">
          <NuxtLink :to="item.path">
            {{ item.name }}
            <span></span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div id="nav-right" class="flex flex-row justify-center width-auto mr-5 lg:w-1/5">
      <div @click="toggleMenu" class="block ml-5 my-auto">
        <img src="@/assets/menu_burger.png" class="w-6 h-6 md:w-10 md:h-10 lg:hidden" />
      </div>
      <NuxtLink to="" class="hidden mx-2 my-auto lg:block"
        ><img class="w-6 h-6 md:w-10 md:h-10" src="@/assets/shopping-cart.png"
      /></NuxtLink>
      <NuxtLink class="hidden mx-2 lg:block" to="">Nous contacter</NuxtLink>
    </div>
  </div>
  <div class="fixed top-0 left-0 w-full lg:relative">
    <nav class="p-4 flex flex-row justify-between md:relative">
      <NuxtLink to="/" id="nav-logo" class="width-auto lg:w-1/5 container-side-nav-item">
        <img src="@/assets/logo_nav.png" class="mx-auto lg:ml-5" />
      </NuxtLink>
      <div class="hidden lg:block" id="container-nav-menu">
        <ul class="flex flex row">
          <li v-for="item in routes" :key="item.name" :class="{ active: currentRoute === item.path }">
            <NuxtLink :to="item.path">
              {{ item.name }}
              <span></span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div id="nav-right" class="flex flex-row justify-center width-auto mr-5 lg:w-1/5">
        <div @click="toggleMenu" class="block ml-5 my-auto">
          <img src="@/assets/menu_burger.png" class="w-6 h-6 md:w-10 md:h-10 lg:hidden" />
        </div>
        <NuxtLink to="" class="hidden mx-2 my-auto lg:block"
          ><img class="w-6 h-6 md:w-10 md:h-10" src="@/assets/shopping-cart.png"
        /></NuxtLink>
        <NuxtLink class="hidden mx-2 lg:block" to="">Nous contacter</NuxtLink>
      </div>
    </nav>
    <nav v-if="isMenuToggled">
      <ul class="flex flex-col">
        <li v-for="item in routes" :key="item.name" :class="{ active: currentRoute === item.path }">
          <NuxtLink :to="item.path">
            {{ item.name }}
            <span></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import routes from '../router'
const router = useRouter()
const currentRoute = ref(router.currentRoute.value.fullPath)
const isCurrentRoute = (route) => (route === currentRoute ? 'active' : '')
const isMenuToggled = ref(false)

const toggleMenu = () => (isMenuToggled.value = !isMenuToggled.value)
router.afterEach((to) => (currentRoute.value = to.fullPath))
</script>
<style scoped>
nav {
  background: #f6f9fc;
}

nav a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  padding: 5px;
}

nav ul {
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
  color: #3caab1;
}

nav ul a span {
  display: block;
  margin: 0 auto;
  width: 0%;
  border-bottom: 3px solid #3caab1;
  transition: 0.25s;
  margin-top: 8px;
}

nav ul a:hover span {
  width: 100%;
}

nav ul .active a {
  color: #3caab1;
}

nav ul .active a span {
  width: 100%;
}

#container-nav-menu {
  flex: 3;
  margin: auto;
}

#nav-right a:last-child {
  width: fit-content;
  height: fit-content;
  padding: 12px 16px;
  background: white;
  color: #3caab1;
  border-radius: 10px;
  transition: 0.25s;
  margin-top: auto;
  margin-bottom: auto;
}

#nav-right a:last-child:hover {
  background: #3caab1;
  color: white;
}
</style>
