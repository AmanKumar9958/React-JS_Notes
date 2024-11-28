import { useState, useEffect } from "react";
// useState = useState is used to manage the state of the React component,
// state is a type of variable, when it changes React automatically reflect in UI..

// useEffect = useEffect is used to manage the side effect in your component,
// Side effect is like fetching data from API, updating browser's title, timer or resize..


function useCurrencyInfo(currency){     // arguement is optional..depends on the use case of the function..
    const [data, setData] = useState({});   // if fetching failed then it will show an empty object..
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json)
        .then((response) => setData(response[currency]))  // currency data will save in setData fetched form response
        // and currency inside the response is variable..
    }, [currency]);     // here we have entered the currency because our data is depends on this currency only..
    return data;
}

export default useCurrencyInfo;