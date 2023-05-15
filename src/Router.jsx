import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Nav } from "./Nav";
import { Posts } from "./pages/Posts";
import { Comments } from "./pages/Comments";
import { Albums } from "./pages/Albums";
import { Photos } from "./pages/Photos";
import { Todos } from "./pages/Todos";
import { Users } from "./pages/Users";
import { Saved } from "./pages/Saved";

export function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Posts />} path="/posts" />
        <Route element={<Comments />} path="/comments" />
        <Route element={<Albums />} path="/albums" />
        <Route element={<Photos />} path="/photos" />
        <Route element={<Todos />} path="/todos" />
        <Route element={<Users />} path="/users" />
        <Route element={<Saved />} path="/saved" />
      </Routes>
    </BrowserRouter>
  );
}
