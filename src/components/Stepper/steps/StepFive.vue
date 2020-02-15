<template>
  <div class="row">
    <Title :title="title" :subtitle="subtitle"></Title>
    <!-- Age  -->
    <span>Age de votre partenaire</span>
    <div class="columns">
      <div class="field is-horizontal column">
        <div class="field-label">
          <label class="label">De</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-small" type="number" placeholder="Small sized input" />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal column">
        <div class="field-label">
          <label class="label">A</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-small" type="number" placeholder="Small sized input" />
            </div>
          </div>
        </div>
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
      title: "Votre Partenaire",
      subtitle: "Decrivez votre Partenaire idéal"
    };
  }
};
</script>