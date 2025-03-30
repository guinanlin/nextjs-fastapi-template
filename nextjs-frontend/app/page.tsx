import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Hello，APP
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          一个简单而强大的系统。
        </p>

        {/* Link to Dashboard */}
        <Link href="/dashboard">
          <Button className="px-8 py-4 text-xl font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 focus:ring-4 focus:ring-blue-300">
            开始
          </Button>
        </Link>
      </div>
    </main>
  );
}
