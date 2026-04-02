const featuredContainer = document.getElementById("featuredPosts"); 
const postsGrid = document.getElementById("postsGrid"); 
const categoryFilters = document.getElementById("categoryFilters"); 
const searchInput = document.getElementById("searchInput");
let allPosts = [];
let activeCategory = "All";
init(); 
async function init() {
    try {
        const res = await fetch("posts/posts.json");
        allPosts = await res.json();
        renderCategoryFilters();
        renderPosts();
        renderFeatured();
    } catch (err) {
        console.error("Error loading posts:", err);        
    }
    searchInput.addEventListener("input", () => {
        renderPosts();
    });
}
function renderCategoryFilters() {
    const categories = ["All", ...new Set(allPosts.map((p) => p.category))];
    categoryFilters.innerHTML = "";
    categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        if (cat === activeCategory) btn.classList.add("active");
        btn.textContent = cat;
        btn.addEventListener("click", () => {
            activeCategory = cat;
            document
                .querySelectorAll(".category-btn")
                .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderPosts();
        });
        categoryFilters.appendChild(btn);
    })
}
function renderFeatured() {
    const featured = allPosts.filter((p) => p.featured);
    featuredContainer.innerHTML = "";
    featured.forEach((post) => {
        const card = createPostCard(post);
        featuredContainer.appendChild(card);
    });
}
function renderPosts() {
    const query = searchInput.value.toLowerCase().trim();
    let filtered = allPosts.slice();
    if (activeCategory !== "All") {
        filtered = filtered.filter((p) => p.category === activeCategory);        
    } 
    if (query) {
        filtered = filtered.filter((p) => {
            const inTitle = p.title.toLowerCase().includes(query);
            const inTags = (p.tags || [])
                .join(" ")
                .toLowerCase()
                .includes(query);
            return inTitle || inTags;
        });
    }
    postsGrid.innerHTML = "";
    if (filtered.length === 0) {
        postsGrid.textContent = "No posts found.";
        return;
    }
    filtered.forEach((post) => {
        const card = createPostCard(post);
        postsGrid.appendChild(card);
    });
}
function createPostCard(post) {
    const card = document.createElement("article");
    card.className = "post-card"    
    const img = document.createElement("img");
    img.src = post.image || "assets/images/placeholder.jpg"
    img.alt = post.title;
    const body = document.createElement("div");
    body.className = "post-card-body";
    const meta = document.createElement("div")
    meta.className = "post-meta";
    meta.textContent = `${post.category} · ${formatDate(post.date)}`;
    const title = document.createElement("div");
    title.className = "post-title";
    title.textContent = post.title;
    const excerpt = document.createElement("div");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;
    const footer = document.createElement("div");
    footer.className = "post-footer";
    const tags = document.createElement("div");
    tags.className = "tag-list";
    tags.textContent = (post.tags || []).map((t) => `#${t}`).join(" ");
    const link = document.createElement("a");
    link.className = "read-more";
    link.href = `post.html?id=${post.id}`;
    link.textContent = "Read more →";
    footer.appendChild(tags);
    footer.appendChild(link);
    body.appendChild(meta);
    body.appendChild(title);
    body.appendChild(excerpt);
    body.appendChild(footer);
    card.appendChild(img);
    card.appendChild(body);
    return card;   // ← THIS WAS MISSING
}
function formatDate(dateStr) {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString();}