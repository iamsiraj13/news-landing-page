import Headlines from "@/components/Headlines";
import NewsCard from "@/components/news/items/NewsCard";
import LatestNews from "@/components/news/LatestNews";
import PopularNews from "@/components/news/PopularNews";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main>
      <Headlines />
      <div className="bg-slate-100 pt-8">
        <div className="container px-4 sm:px-0">
          <div className="flex flex-wrap">
            {/* collumn 1 */}
            <div className="w-full lg:w-6/12">
              <LatestNews />
            </div>
            {/* collumn 2 */}
            <div className="w-full lg:w-6/12 ">
              <div className="flex w-full flex-col gap-y-[14px] pl-4">
                <Title title="Technology" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2, 3, 4]?.map((item, index) => (
                    <NewsCard key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* popular news start  */}
          <div className="mt-8">
            <PopularNews />
          </div>
        </div>
      </div>
    </main>
  );
}
