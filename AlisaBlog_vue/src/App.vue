<template>
  <div id="app">
    <v-header></v-header>
    <transition name="slide-fade">
    <router-view></router-view>
    </transition>
    <v-nav></v-nav>
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
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
