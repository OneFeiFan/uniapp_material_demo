<template>
  <view :style="[theme,SXData]">

    <material-tab-bar/>
  </view>
</template>

<script>
import MaterialTabBar from "@/components/material-uni/material-tab-bar/material-tab-bar.vue";
import {SXData} from "@/components/material-uni/sx";
import {global_theme} from "@/components/material-uni/colors";
import MaterialButton from "@/components/material-uni/material-button/material-button.vue";
export default {
  computed: {
    SXData() {
      return SXData
    },
    theme() {
      return global_theme
    }
  },
  components: {MaterialButton, MaterialTabBar},
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
