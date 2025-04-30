<template>
  <div class="posts-page">
    <h1>Список постов</h1>
    <PostItem
      v-for="post in posts" 
        :key="post.id" 
        :post="post"
    />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import postsData from "@/data/data.json"; // Импортируем JSON

export default {
  name: "PostsView",
  components: { PostItem },
  data() {
    return {
      posts: [], // Здесь будут храниться посты
    };
  },
  created() {
    this.posts = postsData; // Загружаем данные в массив
  },
};
</script>
