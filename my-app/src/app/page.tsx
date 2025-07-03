import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <div className="w-full h-full p-5">
      <Nav />
      <Header />
      <div className="mt-5">
        <Main />
      </div>
    </div>
  );
}
