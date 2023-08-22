const blogContainer = document.getElementById("blogContainer");

const blogPosts = [
  {
    title: "Welcome to my blog",
    content: "Just trying out something new...",
    date: "August 22, 2023"
  },
];

function displayBlogPosts() {
  blogContainer.innerHTML = "";

  for (const post of blogPosts) {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("blog-title");
    titleElement.textContent = post.title;

    const linkElement = document.createElement("a");
    linkElement.href = `blog/${encodeURIComponent(post.title)}.html`; 
    linkElement.appendChild(titleElement);

    const contentElement = document.createElement("p");
    contentElement.classList.add("blog-content");
    contentElement.textContent = post.content;

    const dateElement = document.createElement("div");
    dateElement.classList.add("blog-date");
    dateElement.textContent = post.date;

    postElement.appendChild(linkElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(dateElement);

    blogContainer.appendChild(postElement);
  }
}
displayBlogPosts();
