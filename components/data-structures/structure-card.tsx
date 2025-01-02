"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataStructure } from "@/config/data-structures";

interface StructureCardProps {
  structure: DataStructure;
}

export function StructureCard({ structure }: StructureCardProps) {
  const router = useRouter();

  return (
    <Card
      className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white dark:bg-zinc-900 rounded-xl max-w-md mx-auto w-full border border-gray-200 dark:border-zinc-700 overflow-hidden flex flex-col"
    >
      <CardHeader className="text-center p-6">
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
          {structure.title}
        </CardTitle>
        <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {structure.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-end p-4">
        <Button
          className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          onClick={() => router.push(`/data-structures/${structure.slug}`)}
        >
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );
}