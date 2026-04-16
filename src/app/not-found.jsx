import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
      
    </div>
  );
}