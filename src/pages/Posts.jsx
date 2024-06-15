import PropTypes from "prop-types";

const Posts = ({ posts }) => {
  return (
    <>
      <h1 className="font-el-messiri text-3xl md:text-5xl text-primary font-bold tracking-widest mt-3 mb-3">
        BLOG POST
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div
            className="py-2 px-5 lg:max-w-[400px] lg:max-h-[350px] overflow-y-clip border shadow-md"
            key={post.id}
          >
            <h2 className="text-lg md:text-xl text-primary font-medium tracking-wide">
              {post.title}
            </h2>
            <p className="text-sm md:text-md text-gray-500">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default Posts;
