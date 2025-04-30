import HomeVue from "@/components/PostsPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeVue,
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/components/PostView.vue"),
      props: route => {
        return { postId: route.params.id || null };
      },
    }
  ],
  
});

export default router;