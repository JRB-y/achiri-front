<template>
  <div class="row">
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