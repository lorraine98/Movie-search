import { createApp } from "vue";
import App from "./App";
import Store from "./store";

const app = createApp(App);
app.use(Store);
app.mount("#app");
