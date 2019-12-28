<template>
  <div id="register-form">
    <div class="field">
      <h1>Créer un compte Achiri.tn</h1>
    </div>
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
    <div class="field is-pulled-right">
      <button class="button is-primary">Enregistrer</button>
    </div>
    <!-- spacer -->
    <!-- <hr /> -->
    <br />
    <div class="field">
      <h1>Ou via réseaux sociaux</h1>
    </div>
    <!-- Button Facebook -->
    <div class="field">
      <button class="button is-fullwidth is-facebook is-small">Facebook</button>
    </div>
    <!-- Button Google -->
    <div class="field">
      <button class="button is-fullwidth is-google is-small">Google</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>