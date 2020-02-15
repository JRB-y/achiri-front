<template>
  <div class="row">
    <!--  -->
    <Title :title="title" :subtitle="subtitle"></Title>

    <!-- Image -->
    <div class="field">
      <label class="label" for="photo">Photo</label>
      <div class="control">
        <input id="photo" class="input" type="file" placeholder="Age" />
      </div>
    </div>

    <!-- Age -->
    <div class="field">
      <label class="label" for="age">Votre Age</label>
      <div class="control">
        <input id="age" class="input" type="number" placeholder="Age" />
      </div>
    </div>

    <!-- Ville -->
    <div class="field">
      <label class="label" for="ville">Votre Ville</label>
      <div id="ville" class="select is-fullwidth">
        <select>
          <option>Tunis</option>
          <option>Sousse</option>
        </select>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import Title from "../../Global/Helpers/Title";

export default {
  name: "StepOne",
  components: { Title },
  data() {
    return {
      title: "Photo, age et ville",
      subtitle: "Lorem Ipsum"
    };
  }
};
</script>