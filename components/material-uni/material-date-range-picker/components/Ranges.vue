<template>
  <div class="ranges">
    <ul>
      <li
        v-for="(item, index) in presets_"
        :key="index"
        :class="{'active': item.label === chosenLabel}"
        @click="$emit('clickPreset',item)"
      >
        {{ item.label }}
      </li>
    </ul>
    <!-- feature #49 -->
    <div class="action-buttons" v-if="!picker.autoApply">
      <button
        class="btn btn-sm btn-success"
        :disabled="canSelect"
        type="button"
        @click="$emit('clickApply')"
      >
        Apply
      </button>
      <button
        class="btn btn-sm btn-default"
        type="button"
        @click="$emit('clickCancel')"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: ['canSelect', 'presets'],
  inject: ['picker'],
  computed: {
    chosenLabel () {
      let chosenLabel = '';
      let customRange = true;
      const picker = this.picker;
      const ftm = 'YYYY-MM-DD';
      if (picker.start_ === null || picker.end_  === null) return chosenLabel;
      for (const preset of this.presets) {
        const [start, end] = preset.range;
        // ignore times when comparing dates if time picker is not enabled
        if (picker.start_.format(ftm) === start.format(ftm) && picker.end_.format(ftm) === end.format(ftm)) {
          customRange = false;
          chosenLabel = preset.label;
          break;
        }
      }

      if (customRange) {
        if (this.picker.showCustomRangeLabel) {
          chosenLabel = this.picker.locale.customRangeLabel;
        } else {
          chosenLabel = null;
        }
      }
      return chosenLabel;
    },
    presets_ () {
      if (this.picker.showCustomRangeLabel) {
        return [
          ...this.presets,
          {
            label: this.picker.locale.customRangeLabel,
            range: '',
          },
        ];
      }
      return this.presets;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/components/range';
</style>

