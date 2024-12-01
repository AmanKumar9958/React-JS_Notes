import React from 'react'
import { useId } from 'react';


function InputBox({
    // label is for to/from..
    // className is for if user want different styling..
    // amount is final result..
    // onAmountChange is used for amount input..
    // onCurrencyChange is used for changing currency..
    // currencyOptions = [] is used for storing all the currencies..
    label, className = "", amount, onAmountChange, onCurrencyChange, currencyOptions = [],
    selectCurrency = 'usd', currencyDisable = false, amountDisable = false
}){
    const amountInputId = useId()   // to generate unique IDs..
    return (
        // we have used `` because we also want to take CSS input from the user
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
                    {label}
                </label>
                <input id={amountInputId} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" disabled={amountDisable} value={amount || ""} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                    {currencyOptions.map((eachCurrency) => (
                        // key is used to make performance better..
                        <option value={eachCurrency} key={eachCurrency}>
                            {eachCurrency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;     // this is good option but when we have so many components so, we make a 
// new JS file and call all the components in that JS file and then finally we call that JS file in the 
// React main file..
