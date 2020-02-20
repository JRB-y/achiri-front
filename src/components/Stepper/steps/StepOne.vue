<template>
  <div class="row">
    <!--  -->
    <Title :title="title" :subtitle="subtitle"></Title>

    <!-- Image -->
    <!-- <div class="field">
      <label class="label" for="photo">Photo</label>
      <div class="control">
        <input id="photo" class="input" type="file" placeholder="Age" />
      </div>
    </div>-->
    <div class="file has-name">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" />
        <span class="file-cta">
          <span class="file-icon">
            <i class="material-icons">add_a_photo</i>
          </span>
          <span class="file-label">Votre photo</span>
        </span>
        <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
      </label>
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