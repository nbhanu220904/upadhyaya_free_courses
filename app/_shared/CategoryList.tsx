interface Category {
  id: number;
  name: string;
  icon: string;
  prompt: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Programming",
    icon: "/coding1.png",
    prompt: "",
  },
  {
    id: 2,
    name: "Intermediate",
    icon: "/bieap.png",
    prompt: "",
  },
  {
    id: 3,
    name: "SSC",
    icon: "/bseap.png",
    prompt: "",
  },
];

export default categories;
