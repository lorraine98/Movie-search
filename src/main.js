import { createApp } from "vue";
import App from "./App";
import router from "./routes";
import Store from "./store";

const app = createApp(App);
app.use(router);
app.use(Store);
app.mount("#app");
