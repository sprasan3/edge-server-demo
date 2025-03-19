window.onload = () => {
    loadConfig();
    loadVideos();
};

function loadConfig() {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            document.getElementById('offload').value = config.offload;
            document.getElementById('codebook').value = config.codebook;
            document.getElementById('encoder').value = config.encoder;
        })
        .catch(error => console.error('Error loading config:', error));
}

function loadVideos() {
    const videoPaths = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'];
    videoPaths.forEach((path, index) => {
        const videoElement = document.getElementById(`video${index + 1}`);
        videoElement.src = path;
    });
}

function applyConfig() {
    const config = {
        offload: document.getElementById('offload').value,
        codebook: document.getElementById('codebook').value,
        encoder: document.getElementById('encoder').value
    };

    console.log('Applied Config:', config);
}
