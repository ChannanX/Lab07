<script setup>
import slide from "../components/slideNews.vue";
import groupNews from "../components/groupNews.vue";
</script>

<template>
  <main>
    <slide />
    <div class="mt-5">
      <div
        style="
          background-color: darkgreen;
          text-align: center;
          font-size: 22px;
          color: aliceblue;
        "
      >
        ข่าวสารและกิจกรรม
      </div>
      <div>
        <groupNews />
      </div>
    </div>
  </main>
</template>
