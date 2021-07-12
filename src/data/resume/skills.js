// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'VB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Numpy + Pandas',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Data Analsis + Visualization',
    competency: 5,
    category: ['Data Engineering'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SQL (GoogleSQL, MySQL)',
    competency: 4,
    category: ['Data Engineering', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Data Engineering', 'Web Development'],
  },
  {
    title: 'Shell (Bash)',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Pylint',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Golint',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Git (Github)',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Data Structure + Algorithms',
    competency: 4,
    category: ['Software Development'],
  },
  {
    title: 'IDEs (VSCode, IntelliJIDEA, Android Studio)',
    competency: 3,
    category: ['Software Development'],
  },
  {
    title: 'Container (Docker)',
    competency: 2,
    category: ['Software Development'],
  },
  {
    title: 'Build (Blaze)',
    competency: 3,
    category: ['Software Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#0F89E6',
  '#EE8434',
  '#72313E',
  '#003D1F',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
