<template>
  <article class="panel is-primary is-hidden-desktop">
    <p class="panel-heading has-text-centered">ACHIRI</p>

    <a class="panel-block is-active">
      <span class="panel-icon">
        <i class="material-icons">home</i>
      </span>
      Accueil
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fa fa-profile" aria-hidden="true"></i>
      </span>
      Comment Utiliser?
    </a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fa fa-profile" aria-hidden="true"></i>
      </span>
      Contact
    </a>

    <a class="panel-block has-text-primary" @click="showLoginForm">
      <span class="panel-icon">
        <i class="fa fa-book" aria-hidden="true"></i>
      </span>
      Connexion
    </a>
    <a class="panel-block has-text-primary" @click="showRegisterForm">
      <span class="panel-icon">
        <i class="fa fa-book" aria-hidden="true"></i>
      </span>
      Inscription
    </a>
  </article>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    showLoginForm() {
      this.$store.commit("toggle_drawer");
      this.$store.commit("toggleLoginForm");
    }
  }
};
</script>