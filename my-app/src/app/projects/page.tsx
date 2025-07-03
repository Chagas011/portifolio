import { CardProjects } from "../components/CardProjects";
import { Nav } from "../components/Nav";

export default function Projects() {
  return (
    <div className="p-5">
      <Nav />
      <h2 className="text-xl text-center mt-5 uppercase font-bold">Projetos</h2>

      <div className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CardProjects />
      </div>
    </div>
  );
}
