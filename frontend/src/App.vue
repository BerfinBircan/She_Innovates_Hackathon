<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/union">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Styling for the navigation bar */
nav {
  background-color: #323cae;; /* University of Pittsburgh blue */
  color: #fff;
  margin:0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
