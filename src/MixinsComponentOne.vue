<template>
  <div class="container-fluid">
    MIXINS111
    <hr>
    <app-message-one
        message="Soobshenia s komponenta app111"
        :isOpen="isOpen"
        @close="close"
    >
    </app-message-one>


    <app-message-two>

    </app-message-two>
  </div>
</template>

<script>
import AppMessageOne from "@/AppMessageOne";
import AppMessageTwo from "@/AppMessageTwo";
import messageMixin from "@/messageMixin";

export default {
  mixins: [messageMixin],

  components: {
    AppMessageOne,
    AppMessageTwo
  }
}
</script>

<style scoped>

</style>