const videoStorage = new VideoStorage();
document.addEventListener("DOMContentLoaded", () => {
  videoStorage.init();

  const videos = videoStorage.all();
  function searchThumbnail(url) {
    const [, videoId] = url.split("=");
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return thumbnail;
  }
  videos.forEach((video) => {
    const videoElement = document.createElement("div");

    const thumbElement = document.createElement("div");
    const nameElement = document.createElement("div");

    const titleElement = document.createElement("h");
    titleElement.classList.add("title");
    titleElement.innerText = video.title;
    nameElement.appendChild(titleElement);

    const thumbnail = searchThumbnail(video.url);
    const imageElement = document.createElement("img");
    imageElement.src = thumbnail;
    thumbElement.appendChild(imageElement);

    videoElement.appendChild(thumbElement);
    videoElement.appendChild(nameElement);

    document.querySelector(".categoria").appendChild(videoElement);
  });
});
