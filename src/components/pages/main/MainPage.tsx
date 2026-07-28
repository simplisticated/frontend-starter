import { useEffect } from "react";
import { useState } from "../../../tools/state";
import { useInstances } from "../../../tools/instances";

export default function MainPage() {
    const [count, setCount] = useState<number>(150, "main-page-click-count");
    const { numberOfInstances } = useInstances("main-page");
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
            <p>Экземпляры: {numberOfInstances}</p>
        </div>
    );
}
