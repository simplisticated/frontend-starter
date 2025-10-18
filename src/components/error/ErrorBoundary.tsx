import React, { Component } from "react";
import { sendMessageToTelegramBot } from "../../tools/telegram";

function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 text-white">
            <div className="max-w-md w-full text-center bg-gray-800 shadow-xl rounded-2xl p-8 border border-red-500">
                <div className="flex justify-center mb-4 text-red-400">
                    <svg
                        className="w-12 h-12 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.33-1.84 1.22-2.95L13.41 4.99c-.78-.78-2.05-.78-2.83 0L3.71 16.05c-1.11 1.11-.32 2.95 1.22 2.95z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-semibold text-red-400 mb-2">
                    Что-то пошло не так
                </h1>
                <p className="text-gray-300 mb-6">
                    Мы уже в курсе проблемы и работаем над её решением.
                    Попробуйте зайти позже.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                >
                    Обновить страницу
                </button>
            </div>
        </div>
    );
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInformation: React.ErrorInfo) {
        console.error(error, errorInformation);
        sendMessageToTelegramBot(
            `
                Client error
                URL: ${location.href}
                Message: ${error.message}
                Cause: ${error.cause}
                Stack: ${errorInformation.componentStack}
            `.replace(/^[ \t]+/gm, "")
        );
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        }
        return this.props.content;
    }
}

interface Props {
    content: JSX.Element;
}

interface State {
    hasError: boolean;
    error: Error | null;
}
