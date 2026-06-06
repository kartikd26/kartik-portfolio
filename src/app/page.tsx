import Sidebar from "@/components/Sidebar";
import DocHeader from "@/components/doc/DocHeader";
import ProblemStatement from "@/components/doc/ProblemStatement";
import UserResearch from "@/components/doc/UserResearch";
import Persona from "@/components/doc/Persona";
import Solution from "@/components/doc/Solution";
import Metrics from "@/components/doc/Metrics";
import Backlog from "@/components/doc/Backlog";
import ProductThinking from "@/components/doc/ProductThinking";
import AcceptanceCriteria from "@/components/doc/AcceptanceCriteria";
import AmbientGlow from "@/components/AmbientGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AmbientGlow />
      <div className="relative z-10 flex min-h-screen">
        <Sidebar />
        <main className="flex-1 lg:ml-56">
          <article className="notion-page py-12 pb-32">
            <DocHeader />
            <ProblemStatement />
            <UserResearch />
            <Persona />
            <Solution />
            <Metrics />
            <Backlog />
            <ProductThinking />
            <AcceptanceCriteria />
          </article>
        </main>
      </div>
    </>
  );
}
