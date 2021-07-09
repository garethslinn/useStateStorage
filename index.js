import { useState } from 'react';

const useStateStorage = (key, currentValue) => {
    const [state, setState] = useState(() => {
        const value = localStorage.getItem(key)
        if (value) {
            return JSON.parse(value);
        }
        return currentValue
    })

    const setStateStorage = value => {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [state, setStateStorage ]
}

export { useStateStorage }

