import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

interface MyContextProps {
    children: ReactNode;
}

interface ContextType {
    sexSelected: string | null;
    updateSexSelected: (newSex: string) => void;
}

const MyContext = createContext<ContextType | undefined>(undefined);

export const useCheckSexSelected = () => {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error("Context not found");
    }
    return context;
};

export function CheckSexSelected({ children }: MyContextProps) {
    const [sexSelected, setSexSelected] = useState<string | null>(null);

    useEffect(() => {
        const sexLocalStorage = localStorage.getItem("sex");
        if (sexLocalStorage) {
            setSexSelected(sexLocalStorage);
        }
    }, [sexSelected]);

    const updateSexSelected = (newSex: string) => {
        localStorage.setItem("sex", newSex);
        setSexSelected(newSex);
    };

    return (
        <MyContext.Provider value={{ sexSelected, updateSexSelected }}>
            {children}
        </MyContext.Provider>
    );
}
