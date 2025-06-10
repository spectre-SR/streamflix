const client = new Appwrite.Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6847bdb100127fa8183e');

const db = new Appwrite.Databases(client);
const form = document.getElementById("uploadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const url = document.getElementById("url").value;
  const thumb = document.getElementById("thumb").value;
  await db.createDocument("default", "videos", Appwrite.ID.unique(), {
    title,
    url,
    thumbnail: thumb
  });
  alert("Uploaded!");
});