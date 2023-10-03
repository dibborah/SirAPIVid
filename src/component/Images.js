import React,{useState, useEffect, useLayoutEffect, useRef} from "react";
import Axios from "axios";

export default function Images() {
    const [Images,  setImages] = useState([]);

    const inputRef = useRef(null);

    const varRef = useRef(Images.length);

    useEffect(() => {

        inputRef.current.focus();

        Axios.get("https://api.unsplash.com/photos/?client_id=uqr-0EE5-49f0cQTQEnmvP7RhmFMqc_Smdtgj0EUxMs")

        .then((res)=> {

            setImages(res.data);
            
        })

    },[]);
}

useEffect(() => {
    varRef.current = varRef.current + 1;
});

const[newImageURL, setNewImageURL] = useState("");

function handleRemove(index) {
    setImages([
        ...Images.slice(0, index),
        ...Images.slice(index+1, Images.length), 
    ])

    console.log("I am changing state");
}


function showImages(){
    return Images.map((img,index)=>{

        <img
        img={img.urls.regular}
        handleRemove={handleRemove}
        key={index}
        />

    });
}

function handleAdd(){
    if(newImageURL != ""){
        setImage([newImageURL, ...Images]);
        setNewImageURL("");
    }
}

