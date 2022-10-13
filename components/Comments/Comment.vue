<template>
  <div class="w-full rounded-xl bg-white shadow-xl shadow-black/5 my-6">
    <div class="md:grid md:grid-cols-12 ">
      <div class="hidden md:block md:col-span-1 py-4">
        <div class="px-4 sm:px-0">
          <img class="m-auto block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/300" alt="">
        </div>
      </div>
      <div class="md:col-span-11 p-6 gob-comment">
        <h3>{{ commentData.author }}</h3>
        <h5>{{  $moment(commentData.createdAt).fromNow() }}</h5>
        <p>{{ commentData.message }}</p>
        <div>
          <button>
            Odpowiedz
          </button>
          <button>
            Edytuj
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  props: {
    commentData: {}
  },
  data () {
    return {}
  },
  methods: {}
}

</script>
<style scoped>
.gob-comment div{
    text-align: right;
    margin-top: 20px;
}
.gob-comment h3{
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    color: #1a1a1a;
}
.gob-comment h5{
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    color: #888;
}

.gob-comment p{
    padding-top: 20px;
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    color: #1a1a1a;
}
.gob-comment button{
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    color: #1669c4;
    padding-left: 5px;
    padding-right: 5px;
    border-right: 1px solid #E8E8E8;
}
.gob-comment button:last-of-type {
    border-right: 0;
}
</style>
