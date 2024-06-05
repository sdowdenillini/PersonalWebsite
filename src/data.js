// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "sdowdenillini";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

// Linkedin URL --- TODO: Add your Linkedin URL HERE
export const linkedinURL = "https://www.linkedin.com/in/sarah-dowden-491a371b0/";

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a third year undergrad studying computer sceince at UIUC with intent to pursue a Master's degree. I have research interests in CS theory, computational mathematics, robotics, and machine learning. I joined the Parasol lab group and the Mind in Vitro project during summer 2024, under Professor Nancy Amato. For the Mind in Vitro Project, I working with Frithjof Gressmann.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    // skill: <Icon icon="simple-icons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2, 
    // skill: <Icon icon="simple-icons:opencv" className="display-4" />,
    name: "C++",
  },
  {
    id: 3, 
    // skill: <Icon icon="simple-icons:opencv" className="display-4" />,
    name: "Java",
  },
  {
    id: 4, 
    // skill: <Icon icon="simple-icons:opencv" className="display-4" />,
    name: "Microsft 365 Office Suite",
  },
  {
    id: 5, 
    // skill: <Icon icon="simple-icons:opencv" className="display-4" />,
    name: "LaTex",
  },
  {
    id: 6, 
    // skill: <Icon icon="simple-icons:opencv" className="display-4" />,
    name: "Verilog",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];


// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xeqywboo";
