// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    home: `${ROOTS.DASHBOARD}/home`,
    brand: `${ROOTS.DASHBOARD}/brand`,
    categories: `${ROOTS.DASHBOARD}/categories`,
    product: `${ROOTS.DASHBOARD}/product`,
    attributes: `${ROOTS.DASHBOARD}/attributes`,
    blog: `${ROOTS.DASHBOARD}/blog`,
    firstPhoto: `${ROOTS.DASHBOARD}/firstPhoto`,
    discount: `${ROOTS.DASHBOARD}/discount`,
    delivery: `${ROOTS.DASHBOARD}/delivery`,
    pricing: `${ROOTS.DASHBOARD}/pricing`,
    baskets: `${ROOTS.DASHBOARD}/baskets`,
    orders: `${ROOTS.DASHBOARD}/orders`,
    personal: `${ROOTS.DASHBOARD}/personal`,
    analytics: `${ROOTS.DASHBOARD}/analytics`,




  },
};
