const routes = require('@yolkai/next-routes').default;

const Routes = routes()
  // Home
  .add({ name: 'home', pattern: '/home', page: 'home/home' });

const { Link } = Routes;

module.exports = { routes: Routes, Link };
