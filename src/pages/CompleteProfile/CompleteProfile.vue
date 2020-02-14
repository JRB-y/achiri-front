<template>
  <div class="container">
    <nav class="panel">
      <p class="panel-heading">{{subtitle}}</p>
      <div class="section">
        <!-- ===== STEPPER (display number of steps) ===== -->
        <Stepper :steps="steps" :step="step"></Stepper>
        <!-- ===== END STEPPER ===== -->

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

        <!-- Buttons -->
        <div class="panel-block bottom">
          <div class="field is-grouped is-fullwidth navbar-end">
            <div class="control">
              <button class="button is-secondary" :disabled="step == 0" @click="prev">Retour</button>
            </div>
            <div class="control">
              <!-- Button Suivant (next) -->
              <button class="button is-link is-outlined" @click="next">{{buttonText}}</button>
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

import Stepper from "./Stepper";

export default {
  name: "CompleteProfile",
  components: { StepOne, StepTwo, StepThree, StepFour, StepFive, Stepper },
  data() {
    return {
      step: 0,
      steps: [true, false, false, false, false],
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
    },
    buttonText() {
      if (this.step >= this.profileLength - 1) return "Terminer";
      return "Suivant";
    }
  },
  methods: {
    next() {
      if (this.step >= this.profileLength - 1) {
        this.formEnded = true;
        // This will be removed in future when we implement the store backend
        // Will be remplaced by a loader
        var self = this;
        setTimeout(function() {
          this.formEnded = false;
          self.$router.push({ path: "/swipe" });
        }, 1000);
      }
      this.steps[this.step + 1] = true;
      this.step++;
    },
    prev() {
      // if (this.step <= 1) return;
      this.steps[this.step] = false;
      this.step--;
    }
  }
};
</script>

<style scoped>
.section {
  position: relative;
  min-height: 536px;
}
.bottom {
  position: absolute;
  bottom: 0;
}
</style>