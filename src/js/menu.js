function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const isVisible = menu.style.display === 'block';
    
    // Ferme tous les menus avant d'ouvrir le bon
    document.querySelectorAll('.menu-content').forEach(menu => {
        menu.style.display = 'none';
    });

    // Ouvre ou ferme le menu demandé
    menu.style.display = isVisible ? 'none' : 'block';
}