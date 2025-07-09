<script>

export default {
  data: () => ({
    jsFrameworks: ["react.js", "vue.js", "angular"]
  }),

  mounted() {
    setTimeout(() => {
      this.jsFrameworks.push("svelte.js")
    }, 3000)
  }
}
</script>

<template>
  <h1>Hello World</h1>
  <TagsInput :selectedTags="jsFrameworks"></TagsInput>
  <!-- Or use the shorthand -->
  <!-- <TagsInput /> -->
</template>

<style scoped>
h1 {
  color: blue
}
</style>
