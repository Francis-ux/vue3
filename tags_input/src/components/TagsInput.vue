<template>
    <div v-for="(tag, index) in tags">{{ index + " : " + tag }}</div>
    <input type="text" :value="newTag" />
</template>


<script>
export default {
    data() {
        return {
            tags: ["Vue", "React", "Angular"],
            newTag: "Preact"
        }
    }
}
</script>