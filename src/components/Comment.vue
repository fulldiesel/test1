<template>
    <div class="comment">
        <div class="comment-header">
          <h5>{{ comment.userName }}</h5>
          <h5 style="padding-left: 10px; opacity: 50%;">{{ comment.commentDate }}</h5>
        </div>
        <p>{{ comment.commentText }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
})
</script>

<style>
.comment-header{
  display: flex;
}
.comment{
  margin: 10px;
  margin-left: 30px;
}
.comment h5{
  color: gray;
  margin: 0;
}
.comment p{
  margin: 0px;
  padding: 0px;
  font-weight: bold;
}
</style>