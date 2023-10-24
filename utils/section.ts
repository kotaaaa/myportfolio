import { ISection } from "../type/section";

const category: ISection[] = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/posts",
    title: "Posts",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const exportedCategory = {
  category,
};

export default exportedCategory;
