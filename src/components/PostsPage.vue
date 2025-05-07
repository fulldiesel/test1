<template>
  <!-- <div class="posts-page">
    <PostItem
      v-for="post in posts" 
        :key="post.id" 
        :post="post"
    />
  </div> -->
    <div class="posts-page">
      <div v-for="post in posts" 
          :key="post.id" 
          :post="post">
        <a :href="'post/' + post.postId"><PostItem/></a>
    </div>
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

<!-- <style>
.posts-page{
  width: 50%;
  margin: 0 auto;
}
</style> -->
