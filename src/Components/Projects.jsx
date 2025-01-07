import projectTodo from './assets/project-todo.png';
import ecommerce from './assets/ecommerce.png';
import moviedb from './assets/moviedb.png';
import portfolio from './assets/portfolio.png';



const Projects = () => {
  return (
    <div id="projects" className="py-3 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://e-commerce-app-using-react.netlify.app/" target='_blank'  className="block">
            <img
              src={ecommerce}
              alt="ecommerce app image"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              E-commerce App <span className='text-sm'>using ReactJS</span>
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://e-commerce-app-using-react.netlify.app/" target='_blank'  className="text-blue-600 hover:underline">Live-Demo*</a>
            <a href="https://github.com/syedsufiyan888/E-commerce" target='_blank'  className="text-blue-600 hover:underline">github*</a>
          </div>
          <p className="text-gray-700">
            Features / Fucntionaility:
            <ol>
              <li>- Fetches products dynamically using API with async/await</li>
              <li>- Implements Single Page Application (SPA) for seamless navigation</li>
              <li>- Utilizes local storage to persist user data and preferences</li>
              <li>- Efficient API fetching for real-time updates</li>
              <li>- Incorporates third-party libraries like <code>react-loader-spinner</code> for loading animations</li>
              <li>- Uses <code>react-router-dom</code> for efficient client-side routing</li>
            </ol>
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://movie-database-with-react.netlify.app/" target='_blank'  className="block">
            <img
              src={moviedb}
              alt="moviedb"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              Movie Database App <span className='text-sm'>using ReactJS</span>
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://movie-database-with-react.netlify.app/" target='_blank'  className="text-blue-600 hover:underline">Live-Demo*</a>
            <a href="https://github.com/syedsufiyan888/movie-database"  target='_blank' className="text-blue-600 hover:underline">github*</a>
          </div>
          <p className="text-gray-700">
            Features / Fucntionaility:
            <ol>
              <li>- Fetches movie data dynamically using an external API with <code>async/await</code></li>
              <li>- Implements Single Page Application (SPA) for seamless navigation and user experience</li>
              <li>- Displays detailed movie information (e.g., overview) in an expandable card upon selection</li>
              <li>- Efficient API integration for real-time updates and smooth data fetching</li>
              <li>- Responsive and user-friendly interface designed to enhance movie browsing experience</li>
            </ol>
          </p>
        </div>
        {/* Project 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://syedsufiyan.netlify.app/" target='_blank'  className="block">
            <img
              src={portfolio}
              alt="portfolio"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              Portfolio Website <span className='text-sm'>using ReactJS</span>
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://syedsufiyan.netlify.app/" target='_blank'  className="text-blue-600 hover:underline">Live-Demo*</a>
            <a href="https://github.com/syedsufiyan888/react-portfolio" target='_blank'  className="text-blue-600 hover:underline">github*</a>
          </div>
          <p className="text-gray-700">
            Features / Fucntionaility:
            <ol>
              <li>- Implements Single Page Application (SPA) for seamless navigation</li>
              <li>- Uses <code>react-router-dom</code> for efficient client-side routing</li>
            </ol>
          </p>
        </div>
        {/* Project 4 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://todo-with-theme.netlify.app/" target='_blank'  className="block">
            <img
              src={projectTodo}
              alt="Todo Web App"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              Simple ToDo Web App<span className='text-sm'> using Vanilla JavaScript </span>
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://todo-with-theme.netlify.app/" target='_blank'  className="text-blue-600 hover:underline">Live-Demo*</a>
            <a href="https://github.com/syedsufiyan888/todo-with-theme" target='_blank'  className="text-blue-600 hover:underline">github*</a>
          </div>
          <p className="text-gray-700">
            Features / Fucntionaility:
            <ol>
              <li>- This is a to-do web app built using JavaScript and HTML/CSS.</li>
              <li>- It includes local storage functionality for saving tasks persistently.</li>
              <li>- Theme-changing functionality allows users to switch between light and dark modes.</li>
            </ol>
          </p>
        </div>        
      </div>
      <h4 className="text-center mt-8 text-gray-500">More projects coming soon...</h4>
    </div>
  );
}
export default Projects;