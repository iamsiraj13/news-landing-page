import Headlines from "@/components/Headlines";
import LatestNews from "@/components/news/LatestNews";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Headlines />
      <div className="bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap">
            {/* collumn 1 */}
            <div className="w-full lg:w-6/12">
              <h2>Latest News</h2>
              <LatestNews />
            </div>
            {/* collumn 2 */}
            <div className="w-full lg:w-6/12">
              <div className="bg-white p-4">
                <h1>Collumn 2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
