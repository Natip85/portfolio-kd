import { Home, Images, Star, Store } from "lucide-react";

export type NavItem = {
  title: string;
  path: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
export const SIDENAV_ITEMS: NavItem[] = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: (props) => <Home {...props} />,
  },
  {
    title: "Featured Images",
    path: "/admin/featured-images",
    icon: (props) => <Star {...props} />,
  },
  {
    title: "Gallery Images",
    path: "/admin/gallery-images",
    icon: (props) => <Images {...props} />,
  },
  {
    title: "Live site",
    path: "/",
    icon: (props) => <Store {...props} />,
  },
];
