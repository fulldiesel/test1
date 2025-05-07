<template>
    <div class="post">
      <h2>{{ post.postTitle }}</h2>
      <p>{{ post.postText }}</p>
    </div>

    <div class="post">
      <h3>Comments: {{ post.comments.length }}</h3>
      <Comment v-for="comment in post.comments"
        :key="comment.id" 
        :comment="comment"/>
    </div>
</template>
  
<script setup>
  import { ref } from "vue";
  import postsData from "@/data/data.json"; // Импортируем JSON
import Comment from "./Comment.vue";

const props = defineProps({
  postId: {
    type: String,
    required: true,
  },
});

  const post = ref(postsData.find(post => post.postId === props.postId));
</script>