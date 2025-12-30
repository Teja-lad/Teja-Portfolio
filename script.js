/**
 * Portfolio Website - Main JavaScript File
 * Handles project navigation and category switching
 */

/**
 * Show projects for a specific category
 * @param {string} category - The category to display (web, backend, aiml, photography)
 */
function showProjects(category) {
    // Hide categories view
    const categoriesView = document.getElementById('categoriesView');
    if (categoriesView) {
        categoriesView.style.display = 'none';
    }
    
    // Hide all project sections
    document.querySelectorAll('.projects-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Map categories to their corresponding section IDs
    const projectSections = {
        'web': 'webProjects',
        'backend': 'backendProjects',
        'aiml': 'aimlProjects',
        'photography': 'photographyProjects'
    };
    
    // Show selected project section
    const targetSection = document.getElementById(projectSections[category]);
    if (targetSection) {
        targetSection.classList.add('active');
        // Smooth scroll to the projects section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Show the categories view and hide all project sections
 */
function showCategories() {
    // Hide all project sections
    document.querySelectorAll('.projects-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show categories view
    const categoriesView = document.getElementById('categoriesView');
    if (categoriesView) {
        categoriesView.style.display = 'block';
        // Smooth scroll to categories view
        categoriesView.scrollIntoView({ behavior: 'smooth' });
    }
}