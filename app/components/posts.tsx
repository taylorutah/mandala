import Link from "next/link";

// Temporary local helpers to replace missing app/blog/utils
function formatDate(date: string, short = false) {
  const options: Intl.DateTimeFormatOptions = short
    ? { month: "short", day: "numeric" }
    : { month: "short", day: "numeric", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

function getBlogPosts() {
  // Placeholder posts – replace with real data later
  return [
    {
      slug: "welcome-to-mandala",
      metadata: {
        publishedAt: "2025-01-01",
        title: "Welcome to Mandala Adventures",
      },
    },
    {
      slug: "himalaya-expedition-preview",
      metadata: {
        publishedAt: "2025-02-15",
        title: "Inside Our Himalayan Expedition",
      },
    },
  ];
}

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:opacity-80 transition"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}