<template>
  <div
    class="notification is-light"
    :class="{'is-danger': type === 'danger', 'is-success': type === 'success'}"
  >
    <button class="delete"></button>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "success"
    }
  }
};
</script>

<style>
</style>