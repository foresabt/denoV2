import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = {
    data:"your function is ready to use "
  }
  
});


addEventListener("fetch",app.fetchEventHandler());
