import { Header } from "@/components/Header/Header";
import { Joblist } from "@/components/Joblist/Joblist";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-light-grayish-cyan">
      <Header />
      <Joblist />
    </div>
  );
}
