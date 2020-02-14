<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">ACHIRI.tn</a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavbar"
        @click="showDrawer"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNavbar" class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-start">
        <!-- here we can put the menu -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- <a class="button is-primary" @click="showRegisterModal">
              <strong>Créer un compte</strong>
            </a>-->
            <a class="button is-primary" @click="showLoginModal">Connexion</a>
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
    showDrawer() {
      this.$store.dispatch("toggle_drawer");
    }
    // showRegisterModal() {
    //   this.$emit("showRegisterModal");
    // }
  }
};
</script>