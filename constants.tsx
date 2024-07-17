import {
  Hand,
  Highlighter,
  Home,
  Image,
  Images,
  PhoneCall,
  PictureInPicture,
  Star,
} from "lucide-react";

export type NavItem = {
  title: string;
  path: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Gallery",
    path: "/gallery",
    icon: (props) => <PictureInPicture {...props} />,
  },
  {
    title: "About",
    path: "/about",
    icon: (props) => <Hand {...props} />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: (props) => <PhoneCall {...props} />,
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
];
