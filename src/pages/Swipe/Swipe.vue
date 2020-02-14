<template>
  <div class="container">
    <div class="section">
      <h1 class="title">Swipe</h1>
      <h2 class="subtitle">
        A simple container to divide your page into
        <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <figure class="image">
          <img src="https://via.placeholder.com/150.png" />
        </figure>
      </div>
    </div>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <button class="button is-secondary is-fullwidth">
          <i class="material-icons">close</i>
        </button>
      </div>
    </div>
    <div class="columns is-mobile is-centered">
      <button class="button is-rounded is-danger">
        <i class="material-icons">whatshot</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swipe"
};
</script>