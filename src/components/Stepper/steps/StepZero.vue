<template>
  <div class="m-50">
    <p class="title is-2">
      Bienvenu sur
      <span class="has-text-primary">ACHIRI.tn</span>
    </p>
    <p class="subtitle is-4">Configuration de votre profil</p>
    <h1></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam optio eius tempora voluptatem, vero enim necessitatibus repellendus exercitationem cumque praesentium eum maiores fugit aut laboriosam perspiciatis odio vel commodi!</p>

    <button class="button is-fullwidth is-primary m-20" @click="start">Commencer</button>
  </div>
</template>

<script>
export default {
  name: "StepZero",
  methods: {
    start() {
      this.$emit("start");
    }
  }
};
</script>