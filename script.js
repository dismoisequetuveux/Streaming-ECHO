// Fonction pour afficher ou cacher le résumé au clic sur le titre
function toggleTeaser(titleElement) {
    const episodeContainer = titleElement.parentElement;
    const teaserElement = episodeContainer.querySelector('.episode-summary');

    if (teaserElement.style.display === 'none' || !teaserElement.style.display) {
        teaserElement.style.display = 'block';
    } else {
        teaserElement.style.display = 'none';
    }
}

function setupVideoPlayer() {
    // Récupérer les paramètres d'URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoSrc = urlParams.get('video'); // Récupère la valeur associée à "video"

    // Vérifier si la variable videoSrc est définie
    if (videoSrc) {
        const sourceElement = document.getElementById('video-source');
        const videoElement = sourceElement.parentElement;

        sourceElement.src = `videos/${videoSrc}.mp4`; // Mettre à jour la source de la vidéo
        videoElement.load(); // Charger la vidéo
        console.log(`Vidéo chargée : videos/${videoSrc}.mp4`);
    } else {
        console.error("Le paramètre 'video' est manquant dans l'URL !");
        alert('Aucune vidéo spécifiée dans l\'URL');
        window.history.back(); // Retour à la page précédente
    }
}