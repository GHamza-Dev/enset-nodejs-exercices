document.addEventListener('DOMContentLoaded', () => {
    const fetchApiStatus = async () => {
        try {
            const response = await fetch('/api/status');
            const data = await response.json();
            console.log('Statut de l\'API:', data);
        } catch (error) {
            console.error('Erreur lors de la récupération du statut de l\'API:', error);
        }
    };

    fetchApiStatus();
});