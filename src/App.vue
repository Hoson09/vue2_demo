<template>
  <div id="app">
    <div style="text-align: center">
      <h1>Vue2Demo</h1>
      <router-link to="/tableComponent">tableComponent</router-link> |
      <router-link to="/vueI18n">Vue i18n</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
