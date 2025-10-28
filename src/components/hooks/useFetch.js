import { useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const { data, isLoading, error } = state;

    

    const fetchData = async (url,method,bodyData=null) => {
        if(!url) return       
        try {
            const options={
                method: method ? method : 'GET',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
            }

            const response = await fetch(url, options);
            const data = await response.json();
            setState({data, isLoading: false, error: null});
            
        } catch (error) {
            setState({data: null, error: error, isLoading: false});               
        }        
        
    }
    
    return {
        data,
        isLoading,
        error,
        fetchData
    }
}
