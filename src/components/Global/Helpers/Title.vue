<template>
  <div>
    <h1 class="title is-4 is-capitalized has-text-weight-light is-uppercase">{{ title}}</h1>
    <h2 class="subtitle is-6">{{subtitle}}</h2>
    <div class="m-5"></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
      default: "TITLE"
    },
    subtitle: {
      type: String,
      required: true,
      default: "SUBTITLE"
    }
  }
};
</script>
