type DataItem = {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
};

type MenuItem = {
  icon?: string;
  caption: string;
  href: string;
  onClick?: () => void;
};
