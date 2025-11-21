import { Link } from "react-router-dom";
import { useEffect } from "react";
import ANALYTICS from "../../../app/analytics";
import { MAIN_PAGE_URL } from "../main/MainPage";

export const NOT_FOUND_PAGE_IDENTIFIER = "not-found";

export default function NotFoundPage() {
    useEffect(() => {
        ANALYTICS.pageView(NOT_FOUND_PAGE_IDENTIFIER);
    }, []);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4 text-white">
            {/* 404 Icon */}
            <div className="text-yellow-500 mb-8 animate-bounce">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-32 w-32"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.33-1.84 1.22-2.95L13.41 4.99c-.78-.78-2.05-.78-2.83 0L3.71 16.05c-1.11 1.11-.32 2.95 1.22 2.95z"
                    />
                </svg>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 text-center">
                Oops! Page not found.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-center max-w-md mb-8">
                The page you are looking for does not exist. It might have been
                removed, renamed, or never existed.
            </p>

            {/* Back to main button */}
            <Link
                to={MAIN_PAGE_URL}
                className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
            >
                Go back to Home
            </Link>
        </div>
    );
}
