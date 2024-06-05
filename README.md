# A React Portfolio Template for Parasol Crash Course

This template is a slightly modified version of mshuber1981's github portfolio template which can be found [here](https://github.com/mshuber1981/github-react-portfolio-template).

<!-- This section is caried over from the original github page. -->

### Getting Started

1. [Create a repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
2. [Clone your repository](https://developers.google.com/speed/pagespeed/insights/)
3. Make sure [Node](https://nodejs.org/en/) is installed
4. Open your project and install the dependencies

   ```bash
   npm install
   ```

5. Navigate to the src directory and open data.js
6. Add your GitHub username ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L17) lines 17-21)

   ```javascript
   /* START HERE
   ************************************************************** 
     Add your GitHub username (string - "YourUsername") below.
   */
   export const githubUsername = "Your GitHub username here";
   ```

7. Start the development server to view the results

   ```bash
   npm start
   ```

### Updating the Projects section

![Projects](/README_images/projects.png)

1. Follow the instructions to update the filteredProjects array ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L91) lines 91-95)

   ```javascript
   /* Projects
   ************************************************************** 
     List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
   */
   export const filteredProjects = ["example-1", "example-2", "example-3"];
   ```

2. Import the projects images you want to use ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L7) lines 7-8) or the default image will be applied

   ```javascript
   // Projects Images (add your images to the images directory and import below)
   import Logo from "./images/logo.svg";
   ```

3. Follow the instructions to update the projectCardImages array ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L97) lines 97-103)

   ```javascript
   // Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
   export const projectCardImages = [
     {
       name: "example-1",
       image: Logo,
     },
   ];
   ```

### Updating the Contact section

![Projects](/README_images/contact.png)

1. The contact form uses [Formspree](https://formspree.io/), create an account and add your endpoint URL ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L105) lines 105-110)

   ```javascript
   /* Contact Info
   ************************************************************** 
     Add your formspree endpoint below.
     https://formspree.io/
   */
   export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
   ```

### Deploy

A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

*Be sure to set the branch as `gh-pages` and directory as `/root` in the GitHub Pages settings.

1. Update the homepage value ([package.json](https://github.com/mshuber1981/github-react-portfolio-template/blob/0133fcc02ab048fefcf73825d02385ffe27c3721/package.json#L3) line 3)

   ```json
   "homepage": "https://YourUsername.github.io/your-app/",
   ```

2. Run the deploy command

   ```bash
   npm run deploy
   ```

   **Note that you may not see the updated website live immediately after deploying. This is likely due to your browser caching the webpate and showing you an older version. To verify the changes are live, you can open a different browser and view the changes or check with running `npm start`.

### Parasol Template Specifics

In `data.js`, update the About Me Section by adding a personal bio. Replace "Add Bio Here" with your bio.

   ```js
   export const moreInfo =
      "Add Bio Here"; // Replace with Bio
   ```

Additionally, you can add your linkedin profile link.
   ```js
   export const linkedinURL = "https://www.linkedin.com/"; // Add personal linkedin profile link here
   ```

### Customization Options

Feel Free to customize the images in the template to your liking. The following links should provide you with instructions on how to do so.

Checkout the [Wiki](https://github.com/mshuber1981/github-react-portfolio-template/wiki) for additional customization options:

- [Updating the Hero images](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Hero-images)
- [Add a custom Blog icon](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Hero-images#add-a-custom-blog-icon)
- [Updating the About Me section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-About-Me-section)
- [Updating the Skills section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Skills-section)
- [Add a link to your resume](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Skills-section#add-a-link-to-your-resume)
- [Updating the Navbar Logo](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Navbar-Logo)
- [Including a Live Demo link on your project cards](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Including-a-Live-Demo-link-on-your-project-cards)
# PersonalWebsite
