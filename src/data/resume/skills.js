// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'HTML/CSS',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Plx (Script, Workflow, Table, Dashboard)',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'NumPy',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Communication',
    competency: 5,
    category: ['Project Management'],
  },
  {
    title: 'Critical Thinking',
    competency: 5,
    category: ['Project Management'],
  },
  {
    title: 'Leadership',
    competency: 4,
    category: ['Project Management'],
  },
  {
    title: 'Cider',
    competency: 4,
    category: ['Software Development'],
  },
  {
    title: 'Data Structure + Algorithms',
    competency: 4,
    category: ['Software Development'],
  },
  {
    title: 'Blaze',
    competency: 4,
    category: ['Software Development'],
  },
  {
    title: 'Android Studio',
    competency: 3,
    category: ['Software Development'],
  },
  {
    title: 'Visual Studio Code',
    competency: 3,
    category: ['Software Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Software Development'],
  },
  {
    title: 'Postman',
    competency: 2,
    category: ['Software Development'],
  },
  {
    title: 'Critique',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Piper',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Shell (Bash)',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'GitHub',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#EE8434',
  '#0F89E6',
  '#6968b3',
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
