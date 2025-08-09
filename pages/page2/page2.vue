<template>
  <view :style="[getTheme(),SXData]">

    <material-tab-bar/>
  </view>
</template>

<script>
import MaterialTabBar from "@/components/material-uni/material-tab-bar/material-tab-bar.vue";
import {SXData} from "@/components/material-uni/sx";
import {getTheme} from "@/components/material-uni/colors";
import MaterialButton from "@/components/material-uni/material-button/material-button.vue";
export default {
  computed: {
    SXData() {
      return SXData
    }
  },
  components: {MaterialButton, MaterialTabBar},
  data() {
    return {

    }
  },
  methods: {
    getTheme

  }
}
</script>

<style scoped>

</style>
