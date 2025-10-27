import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello dev loveleet!");
});

export default app;
