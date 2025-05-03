<template>
    <div v-for="(tag, index) in tags">{{ index + " : " + tag }}</div>

    <input type="text" :value="newTag" @keydown.enter="tags.push($event.target.value)"
        @keydown.tab.prevent="tags.push($event.target.value)" />

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