import { useEffect } from "react";
import { useStore } from "react-redux";

export const useResetForm = (reset) => {
    const store = useStore()
    
    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout;

        const unsubsribe = store.subscribe(() => {
            let previosWasLogout = currentWasLogout;
            currentWasLogout = store.getState().app.wasLogout;

            if (currentWasLogout != previosWasLogout) {
                reset();
            }
        });
        return unsubsribe;
    }, [reset, store]);
};
