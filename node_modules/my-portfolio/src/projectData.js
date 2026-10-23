const projects = {
  billmate: {
    title: 'Bill.com',
    description:
      'A web application for managing company billing activities, products, customer bills, and recent or existing bills from a dashboard.',
    category: 'React Project',
    overview:
      'Bill.com helps a company manage its products and create customer bills, with a dashboard for reviewing recent and existing bills.',
    features: [
      'Manage company products',
      'Create customer bills',
      'Review recent and existing bills from a dashboard',
    ],
    technologies: [
      'React.js',
      'React Router DOM',
      'Axios',
      'Bootstrap',
      'JSON Server',
    ],
    // Add real screenshots to public/screenshots/billmate and list their paths here.
    screenshots: [
      '/screenshots/billmate/billmate-homepage.png',
      '/screenshots/billmate/billmate-register.png',
      '/screenshots/billmate/billmate-dashboard.png',
      '/screenshots/billmate/billmate-invoice-form.png',
      '/screenshots/billmate/billmate-products.png',
      '/screenshots/billmate/billmate-all-bills.png',
    ],
    liveDemoUrl: 'https://bill-mate-demo.onrender.com/',
    githubUrl: '',
    hideGithubAction: true,
  },
  fixnear: {
    title: 'FixNear',
    description:
      'A local service platform idea for connecting customers with nearby service providers. It is currently in development.',
    category: 'Full-Stack Project Idea',
    overview:
      'FixNear is intended to help customers find nearby service providers. It is a project idea in development, so the planned features and stack below are not presented as completed.',
    features: [
      'Planned support for electricians, plumbers, and AC technicians',
      'Planned support for mechanics, computer repair, and cleaning services',
      'Intended to connect customers with nearby service providers',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    // Add real screenshots to public/screenshots/fixnear as the project is built.
    screenshots: [],
    liveDemoUrl: '',
    githubUrl: '',
  },
}

export default projects
