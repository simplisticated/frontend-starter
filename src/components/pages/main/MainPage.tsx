import { useEffect } from "react";
import { useState } from "../../../tools/state";

export default function MainPage() {
    const [count, setCount] = useState<number>(0, "test");
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1>Главная страница</h1>
            <p>Счетчик: {count}</p>
            <button
                onClick={() => {
                    setCount(prev => prev + 1);
                }}
            >
                Increase
            </button>
        </div>
    );
}
