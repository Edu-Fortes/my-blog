import Main from "./components/Main";
import Header from "./components/Header";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <PostCard />
      </Main>
    </>
  );
}
