import { useEffect, useState } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataRes = async() => {
            const dataPromise = await fetch('/data/products-data.json');
            const data = await dataPromise.json();
            return setData(data);
        }
        dataRes();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;