import { redirect } from "react-router-dom";

export default function logoutAction() {
  localStorage.removeItem("token");
  return redirect("/");
}