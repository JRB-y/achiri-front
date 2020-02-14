<template>
  <div class="steps">
    <div
      class="step-item"
      v-for="(val, index) in steps"
      v-bind:key="index"
      :class="{'is-completed': val, 'is-active': index == step}"
    >
      <div class="step-marker">
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
  name: "Steper",
  props: ["steps", "step"]
};
</script>