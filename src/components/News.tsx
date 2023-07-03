import Link from "next/link";
import NewsCard from "./Card";

export default function News({ posts }: { posts: any[] }) {
  return (
    <div className="mx-11 md:mx-32 max-w-full my-10">
      <Link href="/news" className="font-bold text-3xl">
        News
      </Link>
      <div className="inline-flex overflow-y-hidden flex-shrink-0 overflow-x-scroll w-full mt-3">
        {posts.map((post) => (
          <NewsCard key={post.data.title} data={post.data} />
        ))}
      </div>
    </div>
  );
}
