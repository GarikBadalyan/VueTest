<template>
<div>
<app-message-one1
message="Soobshania s kompo message one" :isOpen="isOpen"
@close="close"
>
</app-message-one1>
</div>
</template>

<script>
import AppMessageOne1 from "@/AppMessageOne1";
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods:{
    close() {

      this.isOpen = !this.isOpen
    }
  },

  components: {
    AppMessageOne1
  }
}
</script>

<style scoped>

</style>