const postContainer = document.getElementById("postContent");
init();
async function init() {
    const id = getPostIdFromUrl();
    if (id) {
        postContainer.innerHTML = "<p>Post not found.</p>";
        return;
    }
    try {
        const res = await fetch(`posts/post-${id},json`);
        if (!res.ok) throw new Error("Post not found")
        const post = await res.json();
        renderPosts(post);
    } catch (err) {
        console.error(err);
        postContainer.innerHTML = "<p>Post not found. </p>";
    }
}
function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");}
function renderPost(post) {
    postContainer.innerHTML = "";
    const title = document.createElement("h1");
  title.textContent = post.title;
  const meta = document.createElement("div");
  meta.className = "post-meta";
  meta.textContent = `${post.category} · ${formatDate(post.date)}`;
  const img = document.createElement("img");
  img.src = post.image || "assets/images/placeholder.jpg";
  img.alt = post.title;
  const content = document.createElement("div");
  content.className = "post-body";
  content.innerHTML = post.content; // content is HTML string
  const tags = document.createElement("div");
  tags.className = "tags";
  tags.textContent =
        "Tags: " + (post.tags || []).map((t) => `#${t}`).join(" ");
    const back = document.createElement("a");
  back.href = "index.html";
  back.className = "back-link";
  back.textContent = "← Back to Home";
  postContainer.appendChild(title);
  postContainer.appendChild(meta);
  postContainer.appendChild(img);
  postContainer.appendChild(content);
  postContainer.appendChild(tags);
  postContainer.appendChild(back);
}
function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString();
}
