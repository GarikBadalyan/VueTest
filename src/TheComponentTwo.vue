<template>
  <div>
    <h1>componentTwo </h1>
    <ul>
      <li v-for="car in cars" :key="car.id">
        <router-link :to="'/two/' + car.name">{{ car.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 data(){
   return {
     cars: [
       {name:'Audi', id: 1},
       {name:'BMW', id: 2},
       {name:'Mersedec', id: 3},
     ]
   }
 }
}
</script>

<style scoped>

</style>