async function shortenUrl() {
    const inputElement = document.getElementById("urlInput");
    const urlinput = document.getElementById("shortenedUrl");
    const url = inputElement.value;

    urlinput.style.opacity = 1

    try {
      const response = await fetch("http://localhost:3000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          longUrl: url,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const shortenedUrlElement = document.getElementById("shortenedUrl");
        shortenedUrlElement.textContent = `http://localhost:3000/${data.url}`;
      } else {
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  