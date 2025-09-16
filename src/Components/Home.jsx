import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ecommerce from './assets/ecommerce.png';

const Home = () => {
    return (
        <div id="intro" className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center bg-gray-50 px-8 ">
            {/* Left Section: Intro and Links */}
            <div className="text md:w-1/2 my-8 ">
                {/* Mobile: Detailed Intro */}
                <div className="block md:hidden  max-w-sm mx-auto">
                    <h1 className="text-3xl sm:text-xl font-semibold text-gray-700 leading-relaxed ">
                        Hey,
                    </h1>
                    <h1 className="text-2xl sm:text-xl font-semibold text-gray-700 leading-relaxed mb-4">
                        I'm Syed Sufiyan,
                        <br />a passionate Frontend Developer
                        <br />crafting seamless, responsive,
                        <br />and user-centric web experiences.
                    </h1>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="text-gray-600 text-base leading-relaxed space-y-2">
                            <p className="font-medium">✨ What I bring to the table:</p>
                            <p>• Building fully responsive websites that work flawlessly on all devices</p>
                            <p>• Creating user-centric designs focused on great experiences</p>
                            <p>• Writing clean, maintainable code with modern best practices</p>
                            <p>• Ensuring fast performance and smooth interactions</p>
                        </div>
                    </div>
                </div>

                {/* Desktop: Simple Intro */}
                <div className="hidden md:block">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Hey,</h1>
                    <h1 className="text-2xl font-semibold text-gray-700 leading-relaxed mb-6">
                        I'm Syed Sufiyan,<br />Frontend Developer passionate about seamless, responsive, and user-centric web experiences.
                    </h1>
                </div>
                {/* Social Links and Resume */}
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/syedsufiyann" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/syedsufiyann" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://drive.google.com/file/d/1-dR3Z9mntdHKKiateCpNo8etcTSPxN8Y/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            {/* Right Section: Featured Project (Desktop only) */}
            <div className="hidden md:block bg-slate-100 shadow-md rounded-lg p-2 my-2 ">
                <h2 className="text-center p-3 text-base font-bold">Featured Project</h2>
                <a href="https://e-commerce-app-using-react.netlify.app/" target="_blank" rel="noopener noreferrer" className="block">
                    <img
                        src={ecommerce}
                        alt="Ecommerce App image"
                        className="mb-3 rounded-md w-full object-cover h-40"
                    />
                    <h3 className="text-lg font-semibold mb-1">
                        E-commerce App <span className="text-xs">using ReactJS</span>
                    </h3>
                </a>
                <div className="flex items-center space-x-1 mb-1">
                    <span className="text-gray-600">-</span>
                    <a href="https://e-commerce-app-using-react.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Live-Demo*</a>
                    <a href="https://github.com/syedsufiyan888/E-commerce" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">github*</a>
                </div>
                <div className="text-gray-700 text-sm">
                    <span>Features / Functionality:</span>
                    <ol className="list-disc pl-4">
                        <li>Fetches products dynamically using API with async/await</li>
                        <li>Implements Single Page Application (SPA) for seamless navigation</li>
                        <li>Utilizes local storage to persist user data and preferences</li>
                        <li>Efficient API fetching for real-time updates</li>
                        <li>Incorporates <code>react-loader-spinner</code> for loading animations</li>
                        <li>Uses <code>react-router-dom</code> for efficient client-side routing</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Home;
