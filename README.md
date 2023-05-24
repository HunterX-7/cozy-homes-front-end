
<a name="readme-top"></a>


<div align="center">
  <img src="readme-front-end.gif" alt="logo" width="400"  height="auto" />
  <br/><br/>
  <br/>
</div>



 <!-- TABLE OF CONTENTS -->
 
 # 📗 Table of Contents
 
 - [📖 About the Project](#about-project)
   - [🛠 Built With](#built-with)
     - [Key Features](#key-features)
 - [💻 Getting Started](#getting-started)
   - [Setup](#setup)
   - [Prerequisites](#prerequisites)
   - [Install](#install)
   - [Usage](#usage)
 - [📃 Kanban Board](#kanban-board)
 - [👥 Authors](#authors)
 - [🔭 Future Features](#future-features)
 - [🤝 Contributing](#contributing)
 - [⭐️ Show your support](#support)
 - [🙏 Acknowledgements](#acknowledgements)
 - [📝 License](#license)
 
 <!-- PROJECT DESCRIPTION -->
 
 # 📖 Project Name
 
 ## Cozy Homes Frontend User Interface
 
 ## About this project
This web platform has been meticulously designed to offer users the ability to explore a diverse selection of houses, 
providing them with the freedom to reserve properties based on their preferences. Additionally, users can also leverage 
the platform to list their own properties, allowing other users to reserve them and generate extra income.
To access the full range of features, users are encouraged to register an account, which grants them exclusive access to the website's 
functionalities using a unique username. The application comprises two main components: the cozy-homes-back-end and the cozy-homes-front-end.
The cozy-homes-back-end houses the API backend, responsible for managing and retrieving data from the database in response to requests made by the frontend.
This component is built using the robust Ruby on Rails API framework, ensuring a secure and efficient backend infrastructure.

On the other hand, the cozy-homes-front-end encompasses the captivating user interface of the website, providing an intuitive platform where users can 
seamlessly interact with the database. Developed using cutting-edge technologies such as ReactJS and Redux, the frontend offers a seamless and engaging user experience.
With the powerful combination of a Ruby on Rails API backend and a dynamic ReactJS and Redux frontend, this web application delivers a compelling and 
feature-rich platform for users to explore, reserve, and list properties with utmost convenience and efficiency.
 
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

This project was implemented using:

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">CSS</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">JavaScript</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap 5</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

   <br/>
 <!-- Features -->
 
 ### Key Features <a name="key-features"></a>
 
 > Key features of the application.
 
 - Introducing a comprehensive full stack web application that empowers users with the ability to register and log in using a unique name, ensuring a personalized and secure experience.
 - Upon registration, users gain access to a wide range of features, including the ability to seamlessly add, delete, and browse registered houses. With a diverse selection of houses 
   available, users have the freedom to reserve any property that suits their preferences.
 - To ensure a smooth user experience, the application provides publicly accessible API endpoints such as /api/v1/houses/ and /api/v1/houses/:id, enabling users to explore available houses effortlessly. 
   Additionally, private API endpoints like /api/v1/reservations/:name are exclusively accessible to logged-in users, offering them the privilege to manage their reservations securely.
 - Privacy is of utmost importance, and each user's reservation data remains confidential and inaccessible to others. Robust security measures are implemented to safeguard user information and ensure that data privacy is upheld at all times.
 - The API itself is designed to deliver an exceptional user experience, returning specific error messages meticulously organized for different types of bad requests. This thoughtful approach enhances the overall usability and helps users easily identify and resolve any issues they may encounter.
 - The website user interface follows carefully crafted design guidelines, ensuring an intuitive and visually appealing experience for users  [design guidelines](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign).
. The interface is designed with user convenience in mind, enabling effortless navigation and seamless interaction with the application's functionalities.
 - Experience the power of this full stack web application, where user registration, house management, and secure reservations are seamlessly integrated to provide a truly exceptional and personalized user experience.
 
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
 <!-- GETTING STARTED -->
 
 ## 💻 Getting Started
 To clone the repository in local environment try following steps.
 
 ### Prerequisites
 
 - [x] A code editor like Visual Studio Code with Node.
 
 You can check if Git is installed by running the following command in the terminal.

 ```
 $ git --version
 ```
 
 Likewise for `node` and `yarn` for package installation.
 ```
 $ node --version && npm --version
 ```
 *Note: This project is built with `Ruby` version 3.0*
 ### Setup
 
 Clone the repository using [this link](https://github.com/HunterX-7/cozy-homes-front-end.git).
 
 ### Install

   <br/>

  ### Usage <a href="usage" name="usage"></a>
 
 This website is applicable for both mobile and desktop version.

<br/>

 
 In the terminal, go to your file directory and run this command.
 ```
 $ git clone https://github.com/HunterX-7/cozy-homes-front-end.git
 ```
 ### Get into development
 
 In the terminal, run these commands to get into development.
 ```
 $ cd cozy-homes-front-end
 
 $ yarn install (install dependencies)
 ```
 **Note: You need to start the `rails server` first to ensure proper use of the frontend. So make sure you have followed the instructions available on [cozy-homes-back-end](https://github.com/HunterX-7/cozy-homes-back-end.git).**
 ```
 $ yarn start
 ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

 <!-- Kanban Board -->
 
 ## 📃 Kanban Board <a name="kanban-board"></a>

 The Kanban Board made for this project can be found [here](https://github.com/users/HunterX-7/projects/2).

 <p align="right">(<a href="#readme-top">back to top</a>)</p>

 <!-- AUTHORS -->
 
 ## 👥 Authors <a name="authors"></a>

 👤 *Francisco Quintero*

- GitHub: [@HunterX-7](https://github.com/HunterX-7)
- Twitter: [@franquin07](https://twitter.com/franquin07)
- LinkedIn: [Francisco Quintero](https://www.linkedin.com/in/francisco-asis-quintero-cede%C3%B1o/)

 
👤 *Pierre Barba*

- GitHub: [@pierreBarba](https://github.com/PierreBarba)
- Twitter: [@pierreBarba](https://twitter.com/home)
- LinkedIn: [@pierreBarba](https://www.linkedin.com/in/jean-pierre-barba/)

 
👤 *Juan Pablo Guerrero*

- GitHub: [@Juan Pablo Guerrero](https://github.com/Juanpa8830)
- LinkedIn: [@Juan Pablo Guerrero](https://www.linkedin.com/in/juanpabloguerrerorios/)


👤 *Gabriel Cilfone*

- GitHub: [Gabriel Cilfone](https://github.com/cilfonegabriel)
- LinkedIn: [Gabriel Cilfone](www.linkedin.com/in/gabriel-cilfone/)
 
 
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
 ## 🔭 Future Features <a name="future-features"></a>
 
 - [ ] *Add animation to create smooth user experience.*
 - [ ] *Enable only admin users to add or delete houses.*
 - [ ] *Implement proper user authentication from the front-end to the server.*
 
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
 <!-- CONTRIBUTING -->
 
 ## 🤝 Contributing <a name="contributing"></a>
 
 Contributions, issues, and feature requests are welcome! Add suggestions by opening new issues.
 
 Feel free to check the [issues page](https://github.com/HunterX-7/cozy-homes-front-end/issues).
 
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
 <!-- SUPPORT -->
 
 ## ⭐️ Show your support <a name="support"></a>
 
 Give a ⭐️ if you like this project!
 
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
 <!-- ACKNOWLEDGEMENTS -->
 
 ## 🙏 Acknowledgments <a name="acknowledgements"></a>
 
 Authors would like to thank:
 - [Murat Korkmaz](https://www.behance.net/muratk) for the Original Design Idea.
 - [Microverse](https://www.microverse.org/)
 - Code Reviewers
 - Coding Partners
 
 <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
 <!-- LICENSE -->
 
 ## 📝 License <a name="license"></a>
 
 This project is [MIT](./LICENSE) licensed.