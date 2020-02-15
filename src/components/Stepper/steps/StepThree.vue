<template>
  <div class="row">
    <Title :title="title" :subtitle="subtitle"></Title>

    <!-- Occupation -->
    <div class="field">
      <label class="label">Occupation</label>
      <div class="control">
        <input class="input" type="text" placeholder="Votre Occupation" />
      </div>
    </div>
    <!-- Etat Marital -->
    <div class="field">
      <label class="label">Etat Marital</label>
      <div class="select is-fullwidth">
        <select>
          <option>Etat 1</option>
          <option>Etat 2</option>
        </select>
      </div>
    </div>

    <!-- Religion -->
    <div class="field">
      <label class="label">Votre religion</label>
      <div class="select is-fullwidth">
        <select>
          <option>Religion 1</option>
          <option>Religion 2</option>
        </select>
      </div>
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
      title: "Occupation",
      subtitle: "Etat martial et religion"
    };
  }
};
</script>