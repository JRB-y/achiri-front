<template>
  <div>
    <section class="hero is-light is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <h1>
            Bienvenu sur
            <span class="has-text-primary">Achiri.tn</span>
          </h1>
          <h2 class="subtitle">Vous êtes</h2>
          <!-- button F ou H -->
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-danger" @click="handleRegisterModalChange">Femme</button>
            </p>

            <p class="control">
              <button class="button is-link" @click="handleRegisterModalChange">Homme</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Index",
  methods: {
    handleRegisterModalChange() {
      this.$store.commit("toggleRegisterForm");
    }
  }
};
</script>