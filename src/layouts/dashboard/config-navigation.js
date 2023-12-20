import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  home: icon('ic_home'),
  category: icon('ic_category'),
  attributes: icon('ic_attributes'),
  firstPhoto: icon('ic_photo'),
  discount: icon('ic_discount'),
  delivery: icon('ic_delivery'),
  pricing: icon('ic_pricing'),
  baskets: icon('ic_basket'),
  orders: icon('ic_order'),
  personal: icon('ic_personal'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'overview v5.6.0',
        items: [
          { title: 'home', path: paths.dashboard.root, icon: ICONS.home },
          { title: 'brand', path: paths.dashboard.brand, icon: ICONS.ecommerce },
          {
            title: 'categories',
            path: paths.dashboard.categories,
            icon: ICONS.category,
          },
          { title: 'Product',
            path: paths.dashboard.product,
            icon: ICONS.product,

          },

          { title: 'Attributes',
            path: paths.dashboard.attributes,
            icon: ICONS.attributes,
          },
          {
            title: 'Blog',
            path: paths.dashboard.blog,
            icon: ICONS.blog,
          },
          {
            title: 'First Photo',
            path: paths.dashboard.firstPhoto,
            icon: ICONS.firstPhoto,
          },
          {
            title: 'Discount',
            path: paths.dashboard.discount,
            icon: ICONS.discount,
          },
          {
            title: 'Delivery',
            path: paths.dashboard.delivery,
            icon: ICONS.delivery,
          },
          {
            title: 'Pricing',
            path: paths.dashboard.pricing,
            icon: ICONS.pricing,
          },
          {
            title: 'Baskets',
            path: paths.dashboard.baskets,
            icon: ICONS.baskets,
          },
          {
            title: 'Orders and Statuses',
            path: paths.dashboard.orders,
            icon: ICONS.orders,
          },
          {
            title: 'Personal',
            path: paths.dashboard.personal,
            icon: ICONS.personal,
          },
          {
            title: 'Analytics',
            path: paths.dashboard.analytics,
            icon: ICONS.analytics,
          },

        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      // {
      //   subheader: 'management',
      //   items: [
      //
      //   ],
      // },
    ],
    []
  );

  return data;
}
