export default ({ locale = 'es' }) => {
  return require(`../locales/${ locale }`).default;
};

