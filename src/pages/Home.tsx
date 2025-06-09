import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">Welcome to</span>{' '}
        <span className="block text-indigo-600">OT Chatbot</span>
      </h1>
      <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-500 md:mt-5 md:text-xl">
        Discover a friendly and intelligent assistant designed specifically for occupational therapy support.
        Whether you're a student, practitioner, or simply curious, our chatbot provides reliable guidance,
        answers your OT-related questions, and helps you explore various aspects of occupational therapy.
        You can chat with our AI for instant answers or provide feedback to help us improve!
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link
            to="/chat"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Start Chatting
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            to="/feedback"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Give Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
    