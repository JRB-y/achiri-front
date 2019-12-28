<template>
  <div class="modal" :class="{'is-active': show}">
    <div class="modal-background" @click="openAndCloseModal"></div>
    <div class="modal-content">
      <div class="box">
        <!-- <register-form></register-form> -->
        <!-- SLOT -->
        <slot></slot>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="openAndCloseModal"></button>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: ["show"],
  methods: {
    openAndCloseModal() {
      this.$emit("modal");
    }
  }
};
</script>