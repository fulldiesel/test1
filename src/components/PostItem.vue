<template>
    <div class="post">
      <h2><a :href="'post/' + post.postId">{{post.postTitle}}</a></h2>
      <p>{{ post.postText }}</p>
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
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString("ru-RU");
      },
    },
  };
  </script>