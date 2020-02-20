<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="./../../assets/logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showDrawer"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Accueil</a>

        <a class="navbar-item">Qui somme nous?</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Trouver l'amour</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" @click="showRegisterModal">
              <strong>Inscription</strong>
            </a>
            <a class="button is-light" @click="showLoginModal">Connexion</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    showLoginModal() {
      this.$emit("showLoginModal");
    },
    showRegisterModal() {
      this.$emit("showRegisterModal");
    },
    showDrawer() {
      this.$store.dispatch("drawer/toggle_drawer");
    }
    // showRegisterModal() {
    //   this.$emit("showRegisterModal");
    // }
  }
};
</script>