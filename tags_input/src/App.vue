<script>

export default {
  data: () => ({
    jsFrameworks: ["react.js", "vue.js", "angular"],
    backendFrameworks: []
  }),
  methods: {
    handleChange(tags) {
      this.jsFrameworks = [...tags]
    }
  }
}
</script>

<template>
  <h1>Your favorite frameworks</h1>
  <div>{{ jsFrameworks }}</div>
  <TagsInput :selectedTags="jsFrameworks" @change="handleChange"></TagsInput>

  <div>{{ backendFrameworks }}</div>
  <TagsInput :selectedTags="backendFrameworks" @change="backendFrameworks = [...$event]"></TagsInput>
  <!-- Or use the shorthand -->
  <!-- <TagsInput /> -->
</template>

<style scoped>
h1 {
  color: blue
}
</style>
