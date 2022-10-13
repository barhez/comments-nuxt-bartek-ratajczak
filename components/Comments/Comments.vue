<template>
  <div class="w-full">
    <h3 class="gon-comment-title mb-4">
      Komentarze wspierających<span>40</span>
    </h3>
    <Comment v-for="(commentData, index) in comments" :key=" index" :comment-data="commentData" />
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex';
import Comment from '@/components/Comments/Comment.vue'

export default {
  name: 'Comments',
  components: {
    Comment
  },
  data () {
    return {
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'comments'
    ])
  },
  mounted () {
    this.getComments()
  },
  methods: {
    ...mapActions({
      getComments: 'getComments'
    })
  }
}

</script>

<style scoped>
.gon-comment-title span {
 border: 1px solid #1669C4;
 border-radius: 50%;
 font-size: 12px;
 padding: 3px;
 margin-left: 5px;
 color:#1669C4
}
</style>
