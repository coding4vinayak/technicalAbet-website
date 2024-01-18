
// This is a simple JavaScript file that can be used to add some interactivity to your website.

// When the user clicks on the "YouTube Videos" link, the function `showVideos()` will be called.
document.getElementById("youtube-videos-link").addEventListener("click", showVideos);

// The `showVideos()` function will display a list of YouTube videos.
function showVideos() {
  // Get the list of YouTube videos from the server.
  fetch("/youtube-videos.json")
    .then(response => response.json())
    .then(data => {
      // Create a list element for each YouTube video.
      const videoList = document.createElement("ul");
      data.forEach(video => {
        const videoItem = document.createElement("li");
        videoItem.innerHTML = `<a href="https://www.youtube.com/watch?v=${video.id}">${video.title}</a>`;
        videoList.appendChild(videoItem);
      });

      // Append the list of YouTube videos to the page.
      document.getElementById("youtube-videos").appendChild(videoList);
    });
}
