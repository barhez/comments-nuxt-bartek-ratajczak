<template>
  <div>
    <IndexNavbar />
    <div class="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <CommentForm />
      <Comments />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IndexNavbar from '@/components/Navbars/IndexNavbar.vue'
import CommentForm from '@/components/Comments/Form.vue'
import Comments from '@/components/Comments/Comments.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    IndexNavbar,
    CommentForm,
    Comments
  }
})
</script>

<style>
body {
  background-color: #F5F5F5;
}
.gob-cta{
  background: linear-gradient(#19b0f6 0%, #1669c4 100%);
  box-shadow: 0px 3px 12px rgba(10, 69, 132, 0.61);
}
</style>
