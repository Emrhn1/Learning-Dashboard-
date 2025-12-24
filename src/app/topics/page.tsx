"use client"
import {useHeader} from "@/app/providers";
import {useEffect} from "react";
const TopicsPage = () => {
    const {setHeaderText} = useHeader()
    useEffect(()=>{
        setHeaderText("Manage all your learning topics")
    })
    return (
        <div>
            emirhan
        </div>
    )
}
export default TopicsPage