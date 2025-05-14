import Nav from "./components/Nav/page";

import Header from "./components/Header/page";
import Main from "./components/Main/page";

export default function Home() {
  return (
    <div className="w-full h-full p-5">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}
