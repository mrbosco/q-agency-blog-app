# QA agency Blog

## Project Description

QA Agency Blog is a pivotal part of my interviewing process, where I, as the candidate, have the opportunity to showcase my web development skills. This dynamic web application is a reflection of my proficiency in technologies like React, TypeScript, and API integration. Through QA Agency Blog, I will tackle real-world challenges, including the display of blogs and articles from the JSONPlaceholder API. It serves as a practical platform for me to demonstrate my coding, problem-solving, and technical capabilities.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js (14.x or higher)
- npm (7.x or higher)

You can check your Node.js and npm versions with `node -v` and `npm -v` commands, respectively.

### Installation

1. **Clone the Repository**

   ```bash
   git clone [repository URL]
   cd q-agency-react-blog
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Husky Setup**

   To set up Git hooks with Husky, run:

   ```bash
   npm run prepare
   ```

   This will install Husky and enable the pre-commit hooks.

### Running the Application

- **Development Mode**

  To run the application in development mode with hot-reload:

  ```bash
  npm run dev
  ```

  The application will be available at `http://localhost:5173`.

- **Production Build**

  To create a production build:

  ```bash
  npm run build
  ```

  The build artifacts will be stored in the `dist/` directory.

- **Preview Production Build**

  To preview the production build locally:

  ```bash
  npm run preview
  ```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

This will check for any linting errors across `.ts` and `.tsx` files.

## Testing

- Run `npm run test` to execute tests using Jest.
- Test files are located in the `__tests__` directory.

## Docker Usage

### Building the Docker Image

To build the Docker image for this application, ensure you have Docker installed on your system and run the following command from the root directory of the project:

```bash
docker build -t q-agency-blog-app .
```

This command builds a Docker image named `q-agency-blog-app` based on the instructions in your `Dockerfile`. Make sure your `Dockerfile` is set up correctly to install all necessary dependencies and build your React application.

### Running the Application in a Docker Container

After successfully building the image, you can run your application in a Docker container using the following command:

```bash
docker run -p 3000:3000 q-agency-blog-app
```

This command starts a container from the `q-agency-blog-app` image. The `-p 3000:3000` option maps port 3000 of the container to port 3000 on your host machine. Adjust the port numbers as needed based on your application's configuration.

### Accessing the Application

Once the container is running, you can access your React application by navigating to `http://localhost:3000` in your web browser. This will load the application served from the Docker container.

### Stopping the Container

To stop the running Docker container, you can use the following steps:

1. Find the container ID with:
   ```bash
   docker ps
   ```
2. Stop the container using:
   ```bash
   docker stop [CONTAINER_ID]
   ```

Replace `[CONTAINER_ID]` with the actual ID of your container.

## Husky Configuration and Process

Husky is a tool used to manage Git hooks in your project. It ensures that certain quality checks and standards are met before code is committed or pushed to the repository. This helps in maintaining code quality and consistency across the project.

### Configuration:

- Husky is configured in your project via the `.husky/` directory, which contains the hook scripts.
- The `prepare` script in `package.json` is used to set up Husky when you run `npm install`.

### Process:

- When you try to commit your changes, Husky triggers pre-commit hooks defined in the project. These hooks can run linters, formatters, or any other scripts as configured.
- If these scripts pass, the commit is successful. If they fail, the commit is aborted, and you need to fix the issues before proceeding.
- Commonly used hooks are `pre-commit` for running lint checks and `pre-push` for running tests.

To use Husky effectively, ensure that you have it installed and configured correctly. The hooks will help maintain code quality and prevent problematic code from entering your codebase.

## Project Structure

The QA agency Blog project is organized into several key directories for efficient development and easy maintenance:

```
.
├── .gitignore                # Git ignore file
├── index.html                # Entry HTML file
├── jest.config.ts            # Configuration for Jest testing framework
├── package.json              # Project metadata and dependency list
├── README.md                 # Project overview and documentation
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript configuration for Node.js
├── vite.config.ts            # Vite configuration for build and development
├── package-lock.json         # Locked versions of npm dependencies
├── src                       # Source files
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Entry point for React application
│   ├── index.css             # Global stylesheet
│   ├── components            # Reusable components
│   │   ├── Post.tsx          # Component for displaying a single post
│   │   ├── PostsList.tsx     # Component for displaying list of posts
│   │   └── SearchInput.tsx   # Component for the search input
│   ├── hooks                 # Custom React hooks
│   │   └── usePosts.ts       # Hook for fetching and managing posts data
│   ├── pages                 # Page components
│   │   ├── Home.tsx          # Home page component
│   │   └── PostPage.tsx      # Individual post page component
│   ├── types                 # TypeScript types and interfaces
│   │   ├── post.ts           # Type definitions for a post
│   │   └── comment.ts        # Type definitions for a comment
│   └── utils                 # Utility functions
│       └── api.ts            # API related functions
└── public                    # Static files
    └── assets                # Static assets like images, fonts, etc.
```

This structure helps in organizing the code into logical segments, making it easier to manage and understand.

## Authors

- **Alem Tatarević** - _Initial work_ - [mrbosco](https://github.com/mrbosco)

## License

These assignments are not a part of any client project and are not a part (and will not be) of any production project.Q reserves the right to limit the disclosure of the assignment contents. This assignment is aimed at all developers' seniority and experience levels.
