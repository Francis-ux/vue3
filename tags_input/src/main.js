import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import TagsInput from './components/TagsInput.vue';

const app = createApp(App);

app.component('TagsInput', TagsInput);

app.mount('#app');
