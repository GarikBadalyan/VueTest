<template>
  <h1>App11</h1>
  <MyComponent />
  <router-view/>
</template>

<script>

import MyComponent from "@/MyComponent";

export default {
  name: 'App',
  components: {MyComponent},
}
</script>

<style>

</style>
