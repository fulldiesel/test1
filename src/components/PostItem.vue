<template>
    <div class="post">
      <!-- <h2><router-link :to="{name: 'post', params: {id: post.postID}}">{{post.postTitle}}</h2> -->
      <h2>{{ post.postTitle }}</h2>
      <p>{{ post.postText }}</p>
      <span class="comment-info">Comments: {{ post.comments.length }}</span>
    </div>
</template>
  
<script>
  export default {
    name: "PostItem",
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>

<style>
.post {
  background-color: whitesmoke;
  padding: 10px 30px;
  margin: 10px;
}
.comment-info{
  background-color: rgb(190, 190, 190);
  padding: 3px 6px;
}
</style>
