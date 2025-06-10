const client = new Appwrite.Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace if self-hosted
  .setProject('6847c371000312047365');

const db = new Appwrite.Databases(client);
const list = document.getElementById("video-list");
const searchInput = document.getElementById("search");

async function fetchVideos(filter = "") {
  const videos = await db.listDocuments("default", "videos");
  list.innerHTML = "";
  videos.documents
    .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(video => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = \`<img src="\${video.thumbnail}" /><h3>\${video.title}</h3>\`;
      card.onclick = () => {
        window.location.href = \`player.html?title=\${encodeURIComponent(video.title)}&url=\${encodeURIComponent(video.url)}\`;
      };
      list.appendChild(card);
    });
}
searchInput.addEventListener("input", e => fetchVideos(e.target.value));
fetchVideos();