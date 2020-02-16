<template>
  <div class="container" style="max-height: 100%">
    <div class="panel">
      <!-- title -->
      <div class="panel-heading">Trouver l'amour</div>
      <h2 class="subtitle is-6 m-t-10 m-l-15">
        <i class="material-icons has-text-danger">whatshot</i>
        Envoyer un poke
        <br />
        <i class="material-icons">close</i>
        Passer à un autre Partenaire
      </h2>

      <!-- Profile -->
      <div class="columns is-mobile is-centered">
        <div class="column is-four-fifths-mobile is-half-desktop">
          <figure class="image">
            <img src="https://via.placeholder.com/150.png" />
          </figure>
          <div class="has-text-centered" style="display: flex; flex-direction: column;">
            <span class="is-centered title is-6 m-0">J. Youssef</span>
            <span class="is-centered title is-6 m-0">
              <span class="is-primary">Age</span>: 29
            </span>
          </div>
          <p class="is-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="columns is-mobile is-centered">
        <div class="column is-half has-text-centered">
          <button class="button is-rounded is-danger is-normal m-r-10 m-l-10">
            <i class="material-icons">whatshot</i>
          </button>
          <button class="button is-secondary is-rounded is-normal m-r-10 m-l-10">
            <i class="material-icons">close</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swipe"
};
</script>