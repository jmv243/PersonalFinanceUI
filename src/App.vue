<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="w3-content view-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#view-body{
  position: relative;
  margin-top: 15%;
}
</style>
