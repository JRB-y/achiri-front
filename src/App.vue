<template>
  <div>
    <!-- Top navbar -->
    <navbar @showLoginModal="handleLoginModalChange" @showRegisterModal="handleRegisterModalChange"></navbar>
    <!--  Main section -->
    <router-view></router-view>

    <!-- Login Modal -->
    <Modal :show="showLoginModal" @closeModal="handleLoginModalChange">
      <LoginForm></LoginForm>
    </Modal>

    <!-- Register Modal -->
    <Modal :show="showRegisterModal" @closeModal="handleRegisterModalChange">
      <RegisterForm></RegisterForm>
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Global/Modal";
import Navbar from "./components/Global/Navbar";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";

export default {
  name: "app",
  components: { Navbar, LoginForm, RegisterForm, Modal },
  computed: {
    showLoginModal() {
      return this.$store.state.showLoginForm;
    },
    showRegisterModal() {
      return this.$store.state.showRegisterForm;
    }
  },
  methods: {
    handleLoginModalChange() {
      this.$store.commit("toggleLoginForm");
    },
    handleRegisterModalChange() {
      this.$store.commit("toggleRegisterForm");
    }
  }
};
</script>