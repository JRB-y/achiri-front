<template>
  <div class="modal" :class="{'is-active': show}">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <div class="box">
        <!-- SLOT -->
        <slot></slot>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="close"></button>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("closeModal");
    }
  }
};
</script>