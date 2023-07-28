import { useState,useEffect } from "react";
import axios from "axios"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(){
 

  const { gif, loading, fetchData } = useGif();

  useEffect(() => {
    fetchData();
  }, []);
    return(
        <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-3xl uppercase underline font-bold">Random Gif</h1>
            {loading ? <Spinner /> : <img src={gif} width="450" />}
            <button 
            className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
            onClick={()=>fetchData()}>
                Generate
            </button>


        </div>
    )
}
export default Random;