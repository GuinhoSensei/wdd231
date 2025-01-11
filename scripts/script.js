// Responsive Navigation
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

// Dynamic Footer Content
const year = new Date().getFullYear();
const lastModified = document.lastModified;

const copyright = document.getElementById('copyright');
const modified = document.getElementById('lastModified');

copyright.textContent = `© ${year} Thiago Gomes Gouveia.`;
modified.textContent = `Last Updated: ${lastModified}`;

// Course List Array
const courses = [
    { code: 'CSE 110', name: 'Introduction to Programming', credits: 3, completed: true },
    { code: 'WDD 130', name: 'Web Design Basics', credits: 3, completed: true },
    { code: 'CSE 111', name: 'Programming with Functions', credits: 3, completed: false },
    { code: 'CSE 210', name: 'Programming Data Structures', credits: 3, completed: true },
    { code: 'WDD 131', name: 'Responsive Web Design', credits: 3, completed: false },
    { code: 'WDD 231', name: 'Web Frontend Development', credits: 3, completed: false }
];

const courseContainer = document.getElementById('activity-links');
const filterButtons = document.querySelectorAll('button.filter');

// Render Courses
function renderCourses(filter) {
    courseContainer.innerHTML = '';

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.code.includes(filter));

    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = `card ${course.completed ? 'completed' : ''}`;

        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
        `;

        courseContainer.appendChild(courseCard);
    });
}

// Filter Buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        renderCourses(button.dataset.filter);
    });
});

// Initial Render
renderCourses('all');
