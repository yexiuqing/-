<template>
  <div id="app" class="wrapper">
    <v-nav></v-nav>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <v-header></v-header>

  </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-nav':Nav
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(15px);
  opacity: 0;
}

</style>
