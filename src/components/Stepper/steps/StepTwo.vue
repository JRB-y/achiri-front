<template>
  <div class="row">
    <Title :title="title" :subtitle="subtitle"></Title>
    <!-- Physique -->
    <div class="field">
      <label class="label">Physique</label>
      <div class="select is-fullwidth">
        <select>
          <option>Physique 1</option>
          <option>Physique 2</option>
        </select>
      </div>
    </div>
    <!-- Ville -->
    <div class="field">
      <label class="label">Yeux</label>
      <div class="select is-fullwidth">
        <select>
          <option>Yeux 1</option>
          <option>Yeux 2</option>
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
      title: "Physique",
      subtitle: "Votre physique et vos yeux"
    };
  }
};
</script>