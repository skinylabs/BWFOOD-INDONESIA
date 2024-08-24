"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
  permalink: string;
  children?: InstagramPost[]; // For carousel
}

interface InstagramFeedProps {
  onRefresh: () => void;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ onRefresh }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch Instagram posts
  const fetchInstagramPosts = async (limit: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/instagram?limit=${limit}`);
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts(10); // Fetch 10 posts by default
    const interval = setInterval(() => {
      fetchInstagramPosts(10); // Fetch 10 posts every 10 minutes
    }, 600000); // 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Instagram Feed</h1>
        <button
          onClick={() => fetchInstagramPosts(10)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Refresh Feed
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-4">
        {posts.map((post) => {
          let displayMediaUrl = post.media_url;

          return (
            <div key={post.id} className="p-2 border rounded">
              {post.media_type === "CAROUSEL_ALBUM" && (
                <Image
                  src={displayMediaUrl}
                  alt={post.caption}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              )}
              {post.media_type === "IMAGE" && (
                <Image
                  src={displayMediaUrl}
                  alt={post.caption}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              )}
              {post.media_type === "VIDEO" && (
                <video controls width="200">
                  <source src={post.media_url} type="video/mp4" />
                </video>
              )}
              <p className="mt-2">{post.caption}</p>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block"
              >
                View on Instagram
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramFeed;
