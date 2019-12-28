<template>
  <div>
    <!-- Top navbar -->
    <navbar></navbar>

    <router-view></router-view>
    <!-- Main Section -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: { Navbar }
};
</script>