import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("services", "./routes/services.tsx"),
  route("work", "./routes/work.tsx"),
  route("about", "./routes/about.tsx"),
  route("insights", "./routes/insights.tsx"),
  route("contact", "./routes/contact.tsx"),
] satisfies RouteConfig;
