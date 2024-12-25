function downloadVideo() {
    const urlInput = document.getElementById('url');
    const resultDiv = document.getElementById('result');

    const url = urlInput.value;
    const videoId = extractVideoId(url);

    if (!videoId) {
        resultDiv.innerHTML = '<p>Invalid YouTube URL.</p>';
        return;
    }

    const downloadLink = `https://your-download-api.com/download?id=${videoId}`; 

    resultDiv.innerHTML = `<p>Downloading... <a href="${downloadLink}" target="_blank">Click here to download</a></p>`;
}

function extractVideoId(url) {
    const videoIdRegex = /v=([^&]+)/;
    const match = url.match(videoIdRegex);
    return match && match[1];
}