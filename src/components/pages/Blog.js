import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client.js";
import "../Blog.css";

export default function Blog() {
  const [blogPost, setBlog] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setBlog(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <section>
        {/* <h1 className="text-center py-4">Blogs</h1> */}
        <div className="blogs-container d-flex justify-content-evenly py-5">
          {blogPost &&
            blogPost.map((blog, index) => (
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={blog.mainImage.asset.url}
                  className="card-img-top"
                  alt={blog.mainImage.alt}
                />
                <Link
                  to={"/blogpost/" + blog.slug.current}
                  key={blog.slug.current}
                >
                  <div className="card-body" key={index}>
                    <h2 className="card-title">{blog.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPost &&
            blogPost.map((blog, index) => (
              <article>
                <Link
                  to={"/blogpost/" + blog.slug.current}
                  key={blog.slug.current}
                >
                  <span
                    className="block h-64 position-relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={blog.mainImage.asset.url}
                      alt={blog.mainImage.alt}
                      className="w-full h-full rounded-r object-cover position-absolute"
                    />
                    <span className="block relative h-full flex justify-content-end align-items-end pr-4 pb-4">
                      <h3 className="blog-title">{blog.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div> */}
        </div>
      </section>
    </>
  );
}
