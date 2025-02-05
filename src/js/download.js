function forceDownload(link) {
    const url = link.getAttribute('href');
    const fileName = link.getAttribute('download') || 'file.pdf'; // Nom par défaut
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(console.error);
}