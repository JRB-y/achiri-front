<template>
  <div class="row">
    <Title :title="title" :subtitle="subtitle"></Title>
    <!-- Fumeur? -->
    <div class="field">
      <label class="label">Etes-vous fumeur?</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="answer" />
          Oui
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          Non
        </label>
      </div>
    </div>
    <!-- Etat Marital -->
    <div class="field">
      <label class="label">Votre caractère</label>
      <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
    </div>
  </div>
</template>

<script>
import Title from "../../Global/Helpers/Title";

export default {
  name: "StepTwo",
  components: { Title },
  data() {
    return {
      title: "Personnalité",
      subtitle: "Decrivez votre caractère"
    };
  }
};
</script>