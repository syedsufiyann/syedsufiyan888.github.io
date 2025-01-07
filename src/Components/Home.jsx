import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ecommerce from './assets/ecommerce.png';


const Home = () => {
    return (

        <div id="intro" className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center bg-gray-50 px-10 ">
            <div className="text  md:w-1/2 my-8 ">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Hey,</h1>
                <h1 className="text-3xl font-semibold text-gray-700 leading-relaxed mb-6">
                    I'm Syed Sufiyan,
                    <br /> a Frontend Engineer
                    <br /> crafting seamless, responsive,
                    <br /> and user-focused web experiences.
                </h1>

                <div className="flex items-center space-x-4">
                    <a href="https://github.com/syedsufiyan888" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/syedsufiyan888" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://drive.google.com/file/d/10dKZCteb0YAP2soVFLQsGJ6HpQOAX0cg/view?usp=drivesdk"
                        target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            <div className="bg-slate-100 shadow-md rounded-lg p-6 my-8">
                <h2 className='text-center p-4 text-lg font-bold'>Featured Project</h2>
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
                    <a href="https://e-commerce-app-using-react.netlify.app/" target='_blank' className="text-blue-600 hover:underline">Live-Demo*</a>
                    <a href="https://github.com/syedsufiyan888/E-commerce" target='_blank' className="text-blue-600 hover:underline">github*</a>
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

        </div>




    );
};

export default Home;