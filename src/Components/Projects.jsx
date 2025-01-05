import projectTodo from './assets/project-todo.png';
import projectTictac from './assets/project-tictac.png';
import ecommerce from './assets/ecommerce.png';



const Projects = () => {
  return (
    <div id="projects" className="py-3 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Featured Projects</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://e-commerce-app-using-react.netlify.app/" className="block">
            <img
              src={ecommerce}
              alt="Todo Web App"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              E-commerce App <span className='text-sm'>using ReactJS</span>
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://e-commerce-app-using-react.netlify.app/" className="text-blue-600 hover:underline">Live-Demo*</a>
            <a href="https://github.com/syedsufiyan888/todo-with-theme" className="text-blue-600 hover:underline">github*</a>
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

              <li></li>
            </ol>

          </p>
        </div>
        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://todo-with-theme.netlify.app/" className="block">
            <img
              src={projectTodo}
              alt="Todo Web App"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              Simple ToDo Web App
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://github.com/syedsufiyan888/todo-with-theme" className="text-blue-600 hover:underline">github*</a>
          </div>
          <p className="text-gray-700">
            This is to-do web app built using JavaScript and HTML/CSS with local
            storage and theme changing functionality.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <a href="https://tictactoe-with-reactjs.netlify.app/" className="block">
            <img
              src={projectTictac}
              alt="Tic Tac Toe Game"
              className="mb-4 rounded-md w-full object-cover h-48"
            />
            <h3 className="text-xl font-semibold mb-2">
              Tic-Tac-Toe Game
            </h3>
          </a>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-600"> - </span>
            <a href="https://github.com/syedsufiyan888/tic-tac-toe-game" className="text-blue-600 hover:underline">github*</a>
          </div>
          <p className="text-gray-700">
            Simple Tic Tac Toe game built using JavaScript, React JS and HTML/CSS.
          </p>
        </div>
      </div>
      <h4 className="text-center mt-8 text-gray-500">More projects coming soon...</h4>
    </div>
  );
}
export default Projects;