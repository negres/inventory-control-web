const routes = require('@yolkai/next-routes').default;

const Routes = routes()
  // Home
  .add({ name: 'home', pattern: '/home', page: 'home/home' })

  // Product Details
  .add({ name: 'productDetails', pattern: '/product/:id', page: 'productDetails/productDetails' });

const { Link } = Routes;

module.exports = { routes: Routes, Link };
