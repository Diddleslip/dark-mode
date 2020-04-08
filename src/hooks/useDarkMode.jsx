import { useEffect } from 'react'
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {

    const [flipSwitch, setFlipSwitch] = useLocalStorage(false)

    useEffect(() => {
        const element = document.body;

        flipSwitch ? element.classList.add("dark-mode") : element.classList.remove("dark-mode")
    }, [flipSwitch])

    // const setValue = value => {
    //     setFlipSwitch(value);
    // }

    return [flipSwitch, setFlipSwitch]
}
