<template>
  <div class="container-fluid">
    MIXINS222
    <hr>
    <app-message-one
        message="Soobshenia s komponenta app222"
        :isOpen="isOpen"
        @close="close"
    >
    </app-message-one>
  </div>
</template>

<script>
import AppMessageOne from "@/AppMessageOne";
import messajeMixin from "@/messageMixin";

export default {
  mixins: [messajeMixin],

  components: {
    AppMessageOne,
  }

}
</script>

<style scoped>

</style>