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

    <Drawer>
      <Menu></Menu>
    </Drawer>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import Menu from "./components/Global/Menu";
import Modal from "./components/Global/Modal";
import Navbar from "./components/Global/Navbar";
import Drawer from "./components/Global/Drawer";
import LoginForm from "./components/Auth/LoginForm";
import FooterComponent from "./components/Global/Footer";
import RegisterForm from "./components/Auth/RegisterForm";

export default {
  name: "app",
  components: {
    Navbar,
    LoginForm,
    RegisterForm,
    Modal,
    Drawer,
    FooterComponent,
    Menu
  },
  computed: {
    showLoginModal() {
      return this.$store.getters.showLoginForm;
    },
    showRegisterModal() {
      return this.$store.getters.showRegisterForm;
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
