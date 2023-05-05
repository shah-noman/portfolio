import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2022",
        title: "Mscs ",
        place: "Minhaj University Lahore",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2018 ",
        title: "Bscs",
        place: "Minhaj University Lahore",
        bg: "#FFF1FB",
      },

      {
        id: 3,
        date: "2012",
        title: "Ics ",
        place: "Punjab College Gujranwala",
        bg: "#FFF4F4",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2021- Present",
        title: "Backend Developer",
        place: "Jinnbyte limited",
        bg: "#F2F4FF",
      },
      {
        id: 2,
        date: "2020- Present",
        title: "Freelancing",
        place: "Upwork, Fiver, Linkedin",
        bg: "#EEF5FA",
      }
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
