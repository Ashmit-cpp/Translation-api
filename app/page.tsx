import Translator from "@/components/Translator";
import Welcome from "@/components/ui/welcome";

export default function Home() {
  return (
    <div>
      <div className="mx-8">
        <Welcome />
      </div>

      <div className="mx-8 shadow-xl my-4 border-4 rounded-2xl	">
        <Translator />
      </div>
    </div>
  );
}
