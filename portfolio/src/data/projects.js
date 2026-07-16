export const projectsData = [
  {
    id: 'weather',
    title: 'Weather Application',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Real-time weather app using OpenWeatherMap API for weather details by city.',
    overview: 'A robust and responsive web application built to retrieve and display weather diagnostics for any city globally, integrating live data services via REST API.',
    features: [
      'Search weather reports for any city globally',
      'Displays temperature, humidity, wind velocity, and condition description',
      'Dynamically changing background based on weather types',
      'Fully responsive interface layout'
    ],
    techUsed: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'OpenWeatherMap API'],
    challenges: 'Handling latency and dynamic errors from external REST API responses cleanly without breaking UI elements.',
    learning: 'Acquired hands-on proficiency in JavaScript Asynchronous functions, Fetch API, and dynamic DOM manipulation.',
    liveUrl: '/weatherapp/index.html',
    codeUrl: '#'
  },
  {
    id: 'todo',
    title: 'To-Do List Application',
    category: 'JavaScript',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Task management app featuring add, check off, and delete capabilities.',
    overview: 'A high-performance simple project and task list application utilizing browser local storage for item persistence.',
    features: [
      'Add, toggle status, and delete tasks instantly',
      'State persistence via window.localStorage',
      'Clean progress filters for pending and completed items'
    ],
    techUsed: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage API'],
    challenges: 'Managing DOM re-renders and maintaining precise state sync with browser localStorage.',
    learning: 'Gained solid knowledge of Event Listeners, JSON serialization, and CRUD operations in Vanilla JS.',
    liveUrl: '/todolist',
    codeUrl: '#'
  },
  {
    id: 'task-manager',
    title: 'Task Management System',
    category: 'Web Development',
    tags: ['React', 'CSS', 'JavaScript'],
    description: 'A premium task manager featuring custom Kanban boards, categories, and priority status tracking.',
    overview: 'A high-performance workspace tool built to help teams organize, prioritize, and assign tasks, featuring workspace management and priority filter statuses.',
    features: [
      'Interactive Kanban Board with task categorization',
      'Priority levels (Low, Medium, High) with visual badges',
      'Real-time task search and custom filters'
    ],
    techUsed: ['React', 'CSS3', 'JavaScript (ES6+)', 'Local Storage'],
    challenges: 'Designing dynamic layout transitions and managing complex state hierarchies across columns.',
    learning: 'Mastered React context patterns, structural layout design, and responsive item alignment.',
    liveUrl: '/taskmgnt/login.html',
    codeUrl: '#'
  },
  {
    id: 'rps',
    title: 'Rock Paper Scissors Game',
    category: 'JavaScript',
    tags: ['JavaScript'],
    description: 'Interactive browser-based game with automatic score-tracking mechanism.',
    overview: 'An entertaining simulation of the classic Rock-Paper-Scissors game featuring responsive AI opponent moves.',
    features: [
      'Real-time automated AI move randomizer',
      'Live score counter and round trackers',
      'Clean interactive animations and reset capabilities'
    ],
    techUsed: ['JavaScript (ES6)', 'HTML5', 'CSS3'],
    challenges: 'Designing state-based win/loss condition algorithms that evaluate and display results cleanly.',
    learning: 'Mastered mathematical randomizers, conditional loops, and active element event handling.',
    liveUrl: '/rockpaperscissor/index.html',
    codeUrl: '#'
  }
];
