<template>
  <div id="register-form" class="panel">
    <div class="panel-heading">Connexion</div>
    <div class="section">
      <Alert v-if="error" :type="'danger'">
        <ul>
          <li v-if="email_error">{{email_error}}</li>
          <li v-if="password_error">{{password_error}}</li>
        </ul>
      </Alert>
      <form v-on:submit.prevent="login">
        <!-- Email -->
        <div class="field">
          <label class="label">Votre Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Email"
              v-model="user.email"
              :class="{'is-danger': email_error}"
              @keydown="retry"
            />
          </div>
        </div>
        <!-- Mot de pass  -->
        <div class="field">
          <label class="label">Votre Mot de passe</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Mot de passe"
              v-model="user.password"
              :class="{'is-danger': password_error}"
              @keydown="retry"
            />
          </div>
        </div>
        <!-- Btn connexion -->
        <div class="panel-block">
          <button
            type="submit"
            @click="login"
            class="button is-primary is-outlined is-fullwidth"
            :class="{'is-loading': loading}"
          >Connexion</button>
        </div>
        <!-- <hr /> -->
      </form>
      <br />
      <!-- Button Facebook -->
      <div class="field">
        <button class="button is-fullwidth is-facebook is-small">Facebook</button>
      </div>
      <!-- Button Google -->
      <div class="field">
        <button class="button is-fullwidth is-google is-small">Google</button>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from "../Alert/Alert";

export default {
  name: "LoginForm",
  components: { Alert },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },

      loading: false,

      error: false,
      email_error: false,
      password_error: false,
      errors: ["Err1", "Err2"]
    };
  },
  methods: {
    login() {
      this.loading = true;

      if (this.user.email === "") {
        this.error = true;
        this.email_error = "Email ne peut pas être vide";
      } else this.email_error = false;

      if (this.user.password === "") {
        this.error = true;
        this.password_error = "Mot de passe ne peut pas être vide";
      } else this.password_error = false;

      // stop if error
      if (this.email_error && this.password_error) {
        this.loading = false;
        return;
      }
      // dispatch to vuex
      this.$store
        .dispatch("auth/login", this.user)
        .then(() => {
          this.$store.commit("toggleLoginForm");
          this.$router.push("/");
        })
        .catch(err => {
          // TODO: Catch the errror
          // When local strategy fail (api-auth_controller.login)
          console.log(err);
          this.error = true;
          this.loading = false;
        });

      // this.loading = false;
    },
    retry() {
      this.error = false;
      this.email_error = false;
      this.password_error = false;
      this.errors = [];
      this.loading = false;
    }
  }
};
</script>