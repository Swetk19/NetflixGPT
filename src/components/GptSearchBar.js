import React from 'react'
import openai from '../utils/openai';
import { useRef } from 'react';
import lang from "../utils/languageConstants"
import {useSelector} from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null)

    const handleGptSearchClick = async() => {
        console.log(searchText.current.value)
    
        const gptQuery = "Act as a movie Recommendation system and suggest some movie for the query :" + searchText.current.value + ". only give me name of five movies, comma seperated like the example result given ahead. Example Result: gadar, sholay, golmal, koimilgya";

    const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
         });
        console.log(gptResults.choices)
    };
  return (
    <div className=" pt-[35%] md:pt-[10%] flex justify-center">
        <form className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e)=> e.preventDefault()}
        >
            <input 
            ref={searchText}
            type="text" className=" p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
            >{lang[langKey].search}</button>
        </form>
    </div>
  )
};
export default GptSearchBar