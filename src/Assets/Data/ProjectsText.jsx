import Samosa from "../Images/samosa.webp";
import Tmc from "../Images/tmc.webp";
import Burger from "../Images/burger.webp";
import Covid from "../Images/covid.webp";
import Game from "../Images/game.webp";
import Weather from "../Images/weather.webp";
import Music from "../Images/music.webp";
import React from "react";
export const ProjectsText = [
  {
    title: "Weather Search",
    image: Weather,
    description: (
      <p>
        This web application allows users to search for the weather forecast for
        a specific location that they have entered.
        <br />
        <br />
        Weather-Search was created with NodeJS and styled with Tailwind CSS. The
        dependencies for the project include Express, HandleBars, and Axios.
        Express was used to create the routes and Restful API endpoints.
        Handlebars was used to create dynamic HTML templates for server side
        rendering of the pages. Axios was used to create our HTTP requests, to
        obtain both Geocode and Weather data using the Mapbox and Weather Stack
        API endpoints. This project included a variety of libraries to achieve
        its goal. Overall this project is a simple, yet effective showcase of my
        full-stack development skills.
      </p>
    ),

    stack: "NodeJS | Tailwind CSS | HandleBars | Axios | HTML ",
    github: true,
    githubLink: "https://github.com/mamooji/weather-search",
    demo: true,
    demoLink: "https://mamooji-weather-search.herokuapp.com/",
  },
  {
    title: "Build a Burger",
    image: Burger,
    description: (
      <p>
        My first React application, used to create an intuitive burger ordering
        experience. With the use of Authentication, users are also able to check
        past orders and burgers.
        <br />
        <br />
        Build a Burger is a simple, yet complex application that utilizes
        various technologies. React was used for the frontend of this project,
        as it allowed for easy development and use of reusable components.
        Authentication and storing of user orders were done through Firebase, as
        it allowed for easy implementation with little to no boilerplate. This
        project introduced me to various best practices including, lazy loading,
        HTTP request with Axios, and handling of sensitive user data.
      </p>
    ),
    stack: "React | Redux | Firebase | Axios | HTML | CSS",
    github: true,
    githubLink: "https://github.com/mamooji/buildABurger",
    demo: true,
    demoLink: "https://burgerbuilder-react-f0056.web.app/",
  },
  {
    title: "Music Player",
    image: Music,
    description: (
      <p>
        Music Player is a responsive modern React application, enabling users to
        listen to music via a contemporary layout.
        <br />
        <br />
        This application was created using React and styled with Sass. Music
        Player was initially created to showcase my ability to create a stylish
        and responsive React application using the Sass library. Sass allowed me
        to create modular style sheets for all of my components, as well as
        having better syntactical nesting. This application also features a dark
        theme variant done with CSS variables and Sass. Dark theme was also
        stored in local storage allowing the Music Player to automatically
        determine which theme is the users preference without having the user
        switch everytime the application is launched.
      </p>
    ),
    stack: "React | Sass ",
    github: true,
    githubLink: "https://github.com/mamooji/musicPlayer",
    demo: false,
    demoLink: "",
  },
  {
    title: "Covid Patient Tracker",
    image: Covid,
    description: (
      <p>
        This Android application was created as a group project, as a concept
        for tracking Covid patients in a hospital. Key features of this
        application include: an RSS feed, intuitive CRUD operations for user
        patients, and application widgets.
        <br />
        <br />
        Covid Patient Tracker was a project required by my Mobile programming
        class during the second year of my Software Engineering program. This
        application required various features in order to meet the requirements
        of the professor. These are the requirements that have been met: 1.
        SQLite database for CRUD operations for patients. 2. RSS feed allowing
        users to be redirected to a browser, in our case we redirected users to
        recent news articles following the virus. 3. Notifications for the app,
        in our case we decided to notify users for new and removed patients. 4.
        A widget, which in our case displayed a quick status of overall patients
        within the hospital. After meeting these requirements, FIrebase
        analytics were also added within the application, to monitor the status,
        speed, and overall health of the mobile app.
      </p>
    ),
    stack: "Android | Firebase | SQLite ",
    github: true,
    githubLink: "https://github.com/mamooji/Covid-19-Patient-Tracker-App",
    demo: false,
    demoLink: "",
  },
  {
    title: "High Low Game",
    image: Game,
    description: (
      <p>
        This ASP.NET application is a game in which users try to guess the
        randomly generated number. The application asks the user to guess the
        number, and in return, the program will update the guessing range of the
        number, until the user finally guesses the correct number.
        <br />
        <br />
        This web application allowed myself to understand and get started with
        state management within ASP.NET. High Low Game was also styled using the
        Materialize component library which gave the game a modern and
        responsive look and feel.
      </p>
    ),
    stack: "ASP.NET | HTML | Materialize",
    github: true,
    githubLink: "https://github.com/mamooji/HighLowGameASP.NET",
    demo: false,
    demoLink: " ",
  },
  {
    title: "Samosa Corner",
    image: Samosa,
    description: (
      <p>
        Samosa Corner was a website I created for a local fast food place near
        my home. I was approached by the owner and asked if I could create the
        website for his business. At the time, I was just out of highschool,
        with very limited knowledge in web development. So instead of coding a
        website from the ground up, I used WordPress to create the layout of the
        business site. Once the layout was complete, I used Hostgator and Go
        daddy to connect the domain and host the website on the web. To this
        day, this website I created in my early days averages about 500 users a
        month, and has helped this business grow immensely.
      </p>
    ),
    stack: "WordPress | HostGator",
    github: false,
    githubLink: " ",
    demo: true,
    demoLink: "http://samosacorner.com/",
  },
  {
    title: "Townline Muslim Center",
    image: Tmc,
    description: (
      <p>
        Townline muslim center is a website I created for a local mosque that
        was being built within my local community. I was lucky to be
        volunteering for this project, and was in charge of the website. As my
        previous experience with Samosa Corner was widespread, within the muslim
        community. This website was also built with WordPress and hosted via
        HostGator. The initial plan for the website was to be informative, and
        throughout the years has been scaled into something much more!
      </p>
    ),
    stack: "WordPress | HostGator",
    github: false,
    githubLink: " ",
    demo: true,
    demoLink: "https://www.townlinemuslimcentre.ca/",
  },
];
