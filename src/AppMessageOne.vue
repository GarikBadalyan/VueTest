<template>
  <div>
    <h1 v-if="isOpen">{{message}}</h1>
    <button v-on:click="$emit('close')">
    <span>{{isOpen? 'Pakel soobshenia' : 'Cuyc tal Soobshenia'}}</span>
    </button>
  </div>
</template>

<script>
export default {
  emit: ['close'],
  props:{
    isOpen: Boolean,
    message: String
  }
}
</script>

<style scoped>

</style>