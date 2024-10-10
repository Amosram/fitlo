import { createContext, useRef, useEffect } from "react";

export const KnivatContext = createContext();

const KnivatContextProvider = (props) => {


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
        useDocumentTitle,
    }

    return (
        <KnivatContext.Provider value={value}>
            {props.children}
        </KnivatContext.Provider>
    )

}

export default KnivatContextProvider;