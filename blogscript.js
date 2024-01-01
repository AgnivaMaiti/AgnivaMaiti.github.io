const blogContainer = document.getElementById("blogContainer");

const blogPosts = [
  {
    title: "Happy New Year!!",
    content: "Happy New Year dear reader! It's the first day...",
    date: "1st Jan, 2024"
  },
];

function displayBlogPosts() {
  blogContainer.innerHTML = "";

  for (let i = 0; i < blogPosts.length; i++) {
    const post = blogPosts[i];

    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("blog-title");
    titleElement.textContent = post.title;

    const linkElement = document.createElement("a");

    // Set the href based on the post index
    linkElement.href = i === 0 ? "blogpost1.html" : `blogpost${i + 1}.html`;

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
