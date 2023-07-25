<template>
  <div>
    <p>thirdInfo****</p>
  <h1>  <strong>
  <ul>
    <li v-for="(item, index) in info2"
    :key="index"
    >
      {{item.month}}
    </li>
  </ul>
  </strong></h1>

  </div>
</template>

<script>
export default {
// inject:['info'],
  inject: ['info2']
}
</script>

<style scoped>

</style>