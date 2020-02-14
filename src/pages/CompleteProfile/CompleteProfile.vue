<template>
  <div class="container">
    <nav class="panel">
      <p class="panel-heading">{{subtitle}}</p>
      <div class="section">
        <!-- ===== Steps ===== -->
        <Steper :steps="steps" :step="step"></Steper>
        <!-- ===== END STEPS ===== -->

        <!-- ==== Step 1 ==== -->
        <StepOne v-if="step == 0"></StepOne>

        <!-- ==== Step 2 ==== -->
        <StepTwo v-if="step == 1"></StepTwo>

        <!-- ==== Step 3 ==== -->
        <StepThree v-if="step == 2"></StepThree>

        <!-- ==== Step 4 ==== -->
        <StepFour v-if="step == 3"></StepFour>

        <!-- ==== Step 5 (Ce que vous cherchez) ==== -->
        <StepFive v-if="step == 4"></StepFive>

        <!-- spacer -->
        <hr />

        <!-- Buttons -->
        <div class="panel-block">
          <div class="field is-grouped is-fullwidth">
            <div class="control">
              <button class="button is-secondary" :disabled="step == 0" @click="prev">Retour</button>
            </div>
            <div class="control">
              <button class="button is-link is-outlined" @click="next">Suivant</button>
              <!-- <button class="button is-primary" @click="next" v-else>Terminer</button> -->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="pageloader is-left-to-right" :class="{'is-active': formEnded}">
      <span class="title">Configuration de votre profile</span>
    </div>
  </div>
</template>

<script>
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";

import Steper from "./Steper";

export default {
  name: "CompleteProfile",
  components: { StepOne, StepTwo, StepThree, StepFour, StepFive, Steper },
  data() {
    return {
      step: 0,
      steps: [false, false, false, false, false],
      formEnded: false,
      profileLength: 5,
      profile: {
        age: "",
        ville: "",
        physique: "",
        yeux: "",
        occupation: "",
        etatMarial: "",
        religion: "",
        smoker: "",
        caracter: ""
      }
    };
  },
  computed: {
    subtitle() {
      if (this.step <= this.profileLength) return "Votre profile";
      else return "Ce que vous cherchez";
    }
  },
  methods: {
    next() {
      if (this.step >= this.profileLength) return;

      this.steps[this.step] = true;
      this.step++;

      if (this.step >= 5) {
        this.formEnded = true;
        var self = this;
        setTimeout(function() {
          this.formEnded = false;
          self.$router.push({ path: "/swipe" });
        }, 1000);
      }
    },
    prev() {
      if (this.step <= 1) return;
      this.step--;
      this.steps[this.step] = false;
    }
  }
};
</script>