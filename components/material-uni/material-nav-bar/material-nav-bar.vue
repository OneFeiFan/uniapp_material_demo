<template>
  <touch-ripple :color="color" :opacity="opacity" :duration="duration" :transition="transition" :backgroundColor="backgroundColor">
    <status-bar :background-color="backgroundColor"/>
    <view class="nav-bar-container">
      <slot></slot>
    </view>
  </touch-ripple>
</template>
<script>
import TouchRipple from "../ripple/component.vue";
import StatusBar from "../status-bar/status-bar.vue";
import {DEFAULT_RIPPLE_PROPS} from "@/components/material-uni/ripple/config";

export default {
  name: "material-nav-bar",
  components: {StatusBar, TouchRipple},
  props: {...DEFAULT_RIPPLE_PROPS},

  // data() {
  //   return {
  //     backgroundColor: this.backgroundColor
  //   }
  // }
}
</script>
<style scoped lang="scss">
.nav-bar-container {
  width: 100%;
  background-color: #ffffff00;
  height: sx(10);
}
</style>