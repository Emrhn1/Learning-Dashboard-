"use client"
import Hero from "@/components/Hero/Hero"
import AddReflection from "@/components/reflection/AddReflection";
import PrevReflections from "@/components/reflection/PrevReflections";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Button } from "@/components/ui/button";
import {useEffect} from "react";
import {useHeader} from "@/app/providers";
import { clearCards } from "@/redux/features/reflection";
import { useAppDispatch } from "@/app/hooks";
const ReflectionPage = () => {
    const dispatch = useAppDispatch();
    const {setHeaderText} = useHeader();
    useEffect(()=> {
        setHeaderText("Reflect on your learning journey")
    },[setHeaderText])
    return (
        <div className="flex dark:bg-sidebar flex-col gap-4 md:gap-6 lg:gap-8 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-4 md:py-6 lg:py-8">
        <div className="flex gap-2 items-center">
        <AutoAwesomeOutlinedIcon style={{color:"#9810FA"}}/>
        <Hero title={"Reflection"} description={"Take a moment to reflect on your learning journey"} showAddTopic={false}/>
        </div>
            <AddReflection />
             <Button className="w-fit mt-2 mb-4" onClick={() => dispatch(clearCards())}>
                Clear All Reflections
             </Button>   
            <PrevReflections />
        </div>
    )
}
export default ReflectionPage
