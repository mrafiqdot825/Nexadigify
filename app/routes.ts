import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("solutions", "routes/solutions/index.tsx"),
  route("solutions/:slug", "routes/solutions/detail.tsx"),
  route("portfolio", "routes/portfolio/index.tsx"),
  route("portfolio/:slug", "routes/portfolio/detail.tsx"),
  route("careers", "routes/careers.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
