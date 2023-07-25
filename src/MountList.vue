<template>
  <div>
<h2> mount:{{id}}  {{month1}}  </h2>
  </div>
</template>

<script>
export default {

  props: {
    month1: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },
  }

}
</script>

<style scoped>

</style>