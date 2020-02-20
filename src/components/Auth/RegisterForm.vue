<template>
  <div id="register-form" class="panel">
    <div class="panel-heading">Inscription</div>
    <div class="section">
      <!-- Prénom -->
      <div class="field">
        <label class="label">Votre Prénom</label>
        <div class="control">
          <input class="input" type="text" placeholder="Votre prénom" />
        </div>
      </div>
      <!-- Email -->
      <div class="field">
        <label class="label">Votre Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email" />
        </div>
      </div>
      <!-- Mot de pass  -->
      <div class="field">
        <label class="label">Votre Mot de passe</label>
        <div class="control">
          <input class="input" type="password" placeholder="Mot de passe" />
        </div>
      </div>
      <!-- Confirmation mot de pass  -->
      <div class="field">
        <label class="label">Confirmer Mot de passe</label>
        <div class="control">
          <input class="input" type="password" placeholder="Confirmer mot de passe" />
        </div>
      </div>

      <div class="panel-block">
        <button
          class="button is-primary is-outlined is-fullwidth"
          @click="completeProfile"
        >Enregistrer</button>
      </div>
      <div class="field"></div>

      <!-- spacer -->
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
export default {
  methods: {
    completeProfile() {
      this.$store.commit("toggleRegisterForm");
      this.$router.push({ path: "/complete-profile" });
    }
  }
};
</script>