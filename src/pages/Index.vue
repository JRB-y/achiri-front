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
              <button class="button is-danger" @click="handleModalChange">Femme</button>
            </p>

            <p class="control">
              <button class="button is-link" @click="handleModalChange">Homme</button>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Register Modal -->
    <Modal :show="showModal" @modal="handleModalChange">
      <RegisterForm></RegisterForm>
    </Modal>
  </div>
</template>
<script>
import Modal from "../components/Modal";
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Index",
  components: { Modal, RegisterForm },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    handleModalChange() {
      this.showModal = !this.showModal;
    }
  }
};
</script>