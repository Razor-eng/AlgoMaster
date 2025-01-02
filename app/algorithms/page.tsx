import { AlgorithmCard } from "@/components/algorithms/algorithm-card";
import { algorithms } from "@/config/algorithms";

export default function AlgorithmsPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-4xl font-bold mb-8">Algorithms</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {algorithms.map((algorithm) => (
          <AlgorithmCard key={algorithm.slug} algorithm={algorithm} />
        ))}
      </div>
    </div>
  );
}
