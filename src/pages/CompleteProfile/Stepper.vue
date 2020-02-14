<template>
  <div class="steps">
    <div
      class="step-item"
      v-for="(val, index) in steps"
      v-bind:key="index"
      :class="{'is-completed': val, 'is-active': index == step}"
    >
      <div class="step-marker step-circle">
        <span class="icon">
          <i class="fa fa-check"></i>
        </span>
      </div>
      <div class="step-details">
        <p class="step-title">{{index + 1}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    steps: {
      type: Array,
      required: true
    },
    step: {
      type: Number,
      required: true
    }
  }
  // props: ["steps", "step"]
};
</script>
<style scoped>
.step-circle:hover {
  cursor: pointer;
  scale: 1.1;
  transition: 0.5s;
}
</style>