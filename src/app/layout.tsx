import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Provider } from "@/components/Provider";
import * as matter from "gray-matter";
import path from "path";
import store from "@/redux/store";
import fs from "fs";
import { updatePosts } from "@/redux/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function getPosts() {
  const folder = path.join(process.cwd(), "/src/posts");
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const posts = markdownFiles.map((file) => {
    const content = fs.readFileSync(`${folder}/${file}`, "utf8");
    const data = matter.default(content);
    return data;
  });
  return posts;
}

export default function Layout({ children }: React.PropsWithChildren) {
  const posts = getPosts().sort(
    (a, b) =>
      Date.parse(b.data.createdAt).valueOf() -
      Date.parse(a.data.createdAt).valueOf()
  );

  store.dispatch(updatePosts(posts));
  return (
    <html>
      <head>
        <title>Game Research and Development Club - GRDC</title>
      </head>
      <body className={`${inter.className}`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
