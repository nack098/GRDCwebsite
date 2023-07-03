import store from "@/redux/store";
import News from "@/components/News";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log(store.getState().posts.data);
  const posts: any[] = store.getState().posts.data;
  return (
    <main className="mb-14">
      <div>
        <Image
          src={posts[0].data.heroImage ? posts[0].data.heroImage : "/next.svg"}
          height={0}
          width={0}
          alt="placeholder"
          className="w-full h-[800px] bg-cover"
        />
        <div className="absolute md:top-[600px] md:left-[170px] md:max-h-[80px] md:max-w-[600px] top-[600px] left-[48px] max-h-[80px] max-w-[300px]">
          <article className="md:h-full md:w-[600px] w-[200px] h-full">
            <h1 className="font-bold truncate">{posts[0].data.title}</h1>
            <p className="truncate">{posts[0].data.description}</p>
          </article>
        </div>
        <Link
          href={`/news/${posts[0].data.slug}`}
          className="absolute md:top-[700px] md:left-[160px] top-[700px] left-[40px] text-xl p-3 bg-blue-500 font-bold rounded-full text-center"
        >
          Read more
        </Link>
      </div>
      {/*Highlight Stream*/}
      {/*News with bar(News will be client side render)*/}
      <News posts={posts} />
      {/*Game by our developer (Cancel) */}
    </main>
  );
}
