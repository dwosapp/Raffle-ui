const adminNs = '/admin_panel';

const adminRoutes = {
  HOME: `${adminNs}/`,
  RAFFLES: `${adminNs}/raffles`,
};

const routes = {
  HOME: '/',
  RAFFLES: '/raffles',
  ADMIN: adminRoutes,
};

export { routes };
