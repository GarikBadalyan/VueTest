<template>
  <div>
    <h1 v-if="isOpen"> {{message}} </h1>
    <button v-on:click="$emit('close')">
      <span> {{  isOpen? 'skrit soobshenia' : 'Pokazat soobshenia' }} </span>
    </button>
  </div>
</template>

<script>
export default {
  emit:['close'],
  props:{
    isOpen: Boolean,
    message:String
  }
}
</script>

<style scoped>

</style>