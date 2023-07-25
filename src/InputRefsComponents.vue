<template>
  <form v-on:submit.prevent="formSubmit">
    <input type="text" :value="inputOne" v-on:input="inputChanjeOne">
    <hr/>
    <input
        type="text"
        v-model="inputTwo"
        ref="inputTwuRefs"
    >
    <br/>
    <hr/>
    <button type="submit">uxarkel</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputOne: '',
      inputTwo: '',
    }
  },
  methods:{
    formSubmit(){
      console.log('inputOne', this.inputOne)
      console.log('inputTwo', this.inputTwo)
      console.log('inputTwuRefs', this.$refs.inputTwuRefs.value)
    },
    inputChanjeOne(event){
   this.inputOne = event.target.value
    }
  }
}
</script>

<style scoped>

</style>