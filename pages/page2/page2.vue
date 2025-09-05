<template>
  <div :style="[getTheme(),SXData]">
    <h3>线性进度条</h3>
    <material-card :height="mx(40)">
      <material-progress type="linear" :model-value="progress"/>
      <material-progress
          type="linear"
          indeterminate
          color="#00c853"
          secondary-color="#64dd17"
          :stroke-width="6"
      />
      <material-progress
          type="circular"
          :model-value="progress"
          show-value
          color="#2196f3"
          :size="60"
          :stroke-width="5"
      />
      <material-progress
          type="circular"
          indeterminate
          color="#ff5722"
          :size="40"
      />
    </material-card>
    <material-progress type="linear" :model-value="progress"/>
    <material-progress
        type="linear"
        indeterminate
        color="#00c853"
        secondary-color="#64dd17"
        :stroke-width="6"
    />

    <h3>圆形进度条</h3>
    <material-progress
        type="circular"
        :model-value="progress"
        show-value
        color="#2196f3"
        :size="60"
        :stroke-width="10"
    />
    <material-progress
        type="circular"
        indeterminate
        color="#ff5722"
        :size="40"
    />

    <div>
      <button @click="progress = 0">重置</button>
      <button @click="progress += 10" :disabled="progress >= 100">增加</button>
    </div>
  </div>
</template>

<script>
import MaterialProgress from '@/components/material-uni/material-progress/material-progress.vue';
import MaterialCard from "@/components/material-uni/material-card/material-card.vue";
import {mx, SXData} from "@/components/material-uni/sx";
import {getTheme} from "@/components/material-uni/colors";

export default {
  computed: {
    SXData() {
      return SXData
    }
  },
  methods: {getTheme, mx},
  components: {
    MaterialCard,
    MaterialProgress
  },
  data() {
    return {
      progress: 30
    }
  }
}
</script>