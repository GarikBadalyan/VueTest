<template>
  <div>
    <h2 v-if="isTaskOpen"> note N0: {{id}} {{task}} </h2>
    <p>time: {{time}}</p>
    <button :class="{aaa: true}" v-on:click="isOpenRender">zadania prochitano</button>
    <h3>prochitano: {{wasTaskRead}} </h3>
  </div>
</template>

<script>
export default {

  props: {
    task: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    wasTaskRead: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      isTaskOpen:this.isOpen
    }
  },

  methods:{
    isOpenRender() {
      this.isTaskOpen = !this.isTaskOpen;
      if (this.isTaskOpen) {
        this.$emit('countTaskOpen', this.id)
      }

    }
  }

}
</script>

<style scoped>
.aaa{
  background-color: greenyellow;
  padding: 5px;
}
</style>