<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";

const props = defineProps({
  link: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  icon: {
    type: [String, Object],
    default: "",
  },
});

const svg = computed(() => {
  if (typeof props.icon === "object") return props.icon.svg;
  return "";
});
</script>

<template>
  <a
    v-if="link"
    class="m-nav-link"
    :href="link"
    target="_blank"
    rel="noreferrer"
  >
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img
            :src="withBase(icon)"
            :alt="title"
            onerror="this.parentElement.style.display='none'"
          />
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
  </a>
</template>
