<template>
    <div class="comment-page">
        <h1>{{ comment.userName }}</h1>
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