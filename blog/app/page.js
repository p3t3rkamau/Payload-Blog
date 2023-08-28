import Card from "@/components/Card";
import probe from "probe-image-size";

import getAllPost from "@/lib/getAllPost";

export const metadata = {
  title: "Tech Blog",
  description:
    "Reporting on the business of technology, startups, venture capital funding, and Silicon Valley.",
};

export default async function Home() {
  const data = await getAllPost();
  const { posts } = data;
  return (
    <>
      <div className="container px-4 py-8 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts
          .map(async (post) => {
            const { title, slug, feature_image } = post;
            let imageSize = await probe(feature_image);
            return (
              <>
                <Card
                  key={title}
                  title={title}
                  image={imageSize.url}
                  width={imageSize.width}
                  heigh={imageSize.height}
                  url={slug}
                  lazy={false}
                />
              </>
            );
          })
          .slice(0, 6)}
        {posts
          .map(async (post) => {
            const { title, slug, feature_image } = post;
            let imageSize = await probe(feature_image);
            return (
              <>
                <Card
                  key={title}
                  title={title}
                  image={imageSize.url}
                  width={imageSize.width}
                  heigh={imageSize.height}
                  url={slug}
                  lazy={true}
                />
              </>
            );
          })
          .slice(6)}
      </div>
    </>
  );
}
