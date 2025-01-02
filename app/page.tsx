import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-12">
      {/* Hero Section */}
      <div className="md:text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight lg:text-6xl mb-6 text-gray-900 dark:text-white">
          Master Data Structures & Algorithms
        </h1>
        <p className="lg:text-xl text-muted-foreground max-w-[700px] mx-auto mb-8">
          Learn, practice, and master data structures & algorithms through interactive lessons, visualizations, and real-world coding challenges. Perfect for beginners and advanced learners alike.
        </p>
        <div className="mt-24 md:mt-8 flex justify-center gap-4">
          <Link href="/data-structures">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center">
              <Code2 className="h-5 w-5 mr-2" /> {/* Code2 icon for Data Structures */}
              Data Structures
            </Button>
          </Link>
          <Link href="/algorithms">
            <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center">
              <Brain className="h-5 w-5 mr-2" /> {/* Brain icon for Algorithms */}
              Algorithms
            </Button>
          </Link>
        </div>
      </div>

      {/* DSA Features */}
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-24 lg:px-16">
        <Card className="min-h-40 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Code2 className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle className="text-xl">Multiple Languages</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Learn in your preferred programming language with support for Python, JavaScript, Java, and more.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Brain className="h-8 w-8 mb-2 text-green-600" />
              <CardTitle className="text-xl">Interactive Learning</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Visualize algorithms and data structures with interactive animations and examples.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Trophy className="h-8 w-8 mb-2 text-yellow-600" />
              <CardTitle className="text-xl">Practice & Compete</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Solve coding challenges, track your progress, and compete with others.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hidden">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 mb-2 text-indigo-600" />
              <CardTitle className="text-xl">Community</CardTitle>
            </div>
            <CardDescription className="text-sm">
              Join discussions, share solutions, and learn from a community of developers and learners.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Popular Topics Section */}
      <div className="mt-20 hidden">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Popular Topics</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Arrays & Strings", description: "Foundation of data structures and manipulation" },
            { title: "Sorting Algorithms", description: "Master sorting algorithms for data organization" },
            { title: "Graph Algorithms", description: "Explore graph theory and algorithms for network problems" },
            { title: "Dynamic Programming", description: "Solve complex optimization problems with DP" },
            { title: "Tree Structures", description: "Learn hierarchical data structures like binary trees" },
            { title: "Search Algorithms", description: "Efficient searching techniques for faster lookups" },
          ].map((topic) => (
            <Card key={topic.title} className="hover:shadow-xl transition-all duration-300 ease-in-out">
              <CardContent className="pt-6">
                <CardTitle className="mb-2 text-xl">{topic.title}</CardTitle>
                <CardDescription className="text-sm">{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
