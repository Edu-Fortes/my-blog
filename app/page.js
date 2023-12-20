import Main from "./components/Main";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <PostCard />
      </Main>
      <Footer />
    </>
  );
}
