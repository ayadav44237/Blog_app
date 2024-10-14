import styles from "./BlogFeed.module.css";

const BlogFeed = () => {
  const blogs = [
    {
      _id: "6",
      title: "Mastering Git and GitHub",
      content:
        "Git is essential for version control, and GitHub offers a platform to collaborate on projects. Learn how to manage branches, handle conflicts, and contribute to repositories.",
      location: "India",
    },
    {
      _id: "7",
      title: "Building RESTful APIs with Express",
      content:
        "Express is a minimalist web framework for Node.js. Discover how to build robust RESTful APIs, manage routes, and handle requests efficiently.",
      location: "India",
    },
    {
      _id: "8",
      title: "A Guide to JavaScript ES6 Features",
      content:
        "ES6 introduced many new features to JavaScript, including arrow functions, promises, and classes. Understand how to use these features to write cleaner, more efficient code.",
      location: "India",
    },
    {
      _id: "9",
      title: "Responsive Web Design Best Practices",
      content:
        "Creating websites that work seamlessly across devices is crucial. Learn the best practices for building responsive designs with CSS and media queries.",
      location: "India",
    },
    {
      _id: "10",
      title: "Deploying Applications with Docker",
      content:
        "Docker simplifies the process of deploying applications. Learn how to containerize your application, manage containers, and set up a reliable development environment.",
      location: "India",
    },
  ];

  return (
    <div className={styles.blogFeedContainer}>
      {blogs.length > 0 ? (
        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <div key={blog._id} className={styles.blogCard}>
              <div className={styles.blogCardBody}>
                <h5 className={styles.blogCardTitle}>{blog.title}</h5>
                <p className={styles.blogCardContent}>{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noBlogsMessage}>
          No blogs available for your location.
        </p>
      )}
    </div>
  );
};

export default BlogFeed;
