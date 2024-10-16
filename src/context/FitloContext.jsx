import { createContext, useRef, useEffect } from "react";
import { institutions } from "../assets/assets";

export const FitloContext = createContext();

const FitloContextProvider = (props) => {


    //dynamic title page rendering
    const useDocumentTitle = (title, prevailOnUnmount = false) => {
        const defaultTitle = useRef(document.title);

        useEffect(() => {
            document.title = title;
        }, [title]);

        useEffect(() => () => {
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        }, [])
    }

    const value = {
        institutions,
        useDocumentTitle,
    }

    return (
        <FitloContext.Provider value={value}>
            {props.children}
        </FitloContext.Provider>
    )

}

export default FitloContextProvider;