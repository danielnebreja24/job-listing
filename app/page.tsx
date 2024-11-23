import { Header } from "@/components/Header";
import { Joblist } from "@/components/Joblist";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-light-grayish-cyan">
      <Header />
      <Joblist />
    </div>
  );
}
