// app/page.js
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/about");  // Redirecting users from `/` to `/about`
}