<template>
  <div class="w-full">
    <h3>Dodaj komentarz</h3>
    <div class="md:grid md:grid-cols-12 ">
      <div class="hidden md:block md:col-span-1 py-4">
        <div class="px-4 sm:px-0">
          <img class="m-auto block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/300" alt="">
        </div>
      </div>
      <div class="md:col-span-11 mt-0">
        <div>
          <div class="space-y-6 px-4 p-5">
            <div>
              <label class="gob-form-group shadow-xl shadow-black/5">
                <input id="author" v-model="comment.author" type="text" name="author" required="">
                <span class="author">Autor</span>
              </label>
            </div>
          </div>
          <div class="space-y-6 px-4">
            <div>
              <label class="gob-form-group shadow-xl shadow-black/5">
                <textarea id="message" v-model="comment.message" name="message" required="" />
                <span class="message">Komentarze</span>
              </label>
            </div>
          </div>
          <div class="px-4 py-3 text-right sm:px-6">
            <button class="gob-cta inline-flex justify-center rounded-full py-2 px-4 text-sm text-white shadow-sm" @click="storeComment">
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      comment: {
        message: '',
        author: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addComment: 'addComment'
    }),
    storeComment () {
      this.addComment(this.comment)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
}

</script>
<style scoped>
.gob-form-group {
    position: relative;
    border-radius: 17px;
    width: 100%;
}
.gob-form-group textarea {
  resize: none;
}

.gob-form-group span {
    position:absolute;
    left: 15px;
    padding: 5px 10px;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    border-bottom: 0;
    background: linear-gradient(0deg,rgba(4,255,123,0) 30%,rgba(255,255,255,1) 30%);
    font-size: 13px;
    color: #888888;
}

.gob-form-group .author {
    top: -5px;
}

.gob-form-group .message {
    top: -85px;
}

.gob-form-group input:focus-visible + span::after,
.gob-form-group textarea:focus-visible + span::after {
  content: '';
  position: absolute;
  top: 0px;
  left:0px;
  width: 100%;
  height: 17px;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  border: 1px solid #19B0F6;
  border-bottom: 0;
}
.gob-form-group textarea:focus-visible,
.gob-form-group input:focus-visible
{
    border: 1px solid #19B0F6;
    outline: none;
}

.gob-form-group input,
.gob-form-group textarea {
    border: 1px solid #888888;
  border-radius: 17px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}

.gob-form-group input{
    height:35px;
}

.gob-form-group textarea {
    height:105px;
    padding: 15px;
}

.gob-form-group input:focus-visible ~ span,
.gob-form-group textarea:focus-visible ~ span{
color: #1669C4;
}
.gob-form-group input:focus-visible ~ span,

.gob-form-group input:not(:invalid) ~ span{
 top: -24px;
}

.gob-form-group textarea:focus-visible ~ span,
.gob-form-group textarea:not(:invalid) ~ span{
 top: -106px;
}

.gob-form-group input:not(:invalid) + span::after,
.gob-form-group textarea:not(:invalid) + span::after {
  content: '';
  position: absolute;
  top: 0px;
  left:0px;
  width: 100%;
  height: 17px;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  border: 1px solid #888888;
  border-bottom: 0;
}
</style>
