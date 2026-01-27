"use client"
import {useHeader} from "@/app/providers";
import {useEffect} from "react";
import Hero from "@/components/Hero/Hero"
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import StuckNotesList from "@/components/stuck-notes/StuckNotes";
import StuckHero from "@/components/stuck-notes/StuckHero";
const StuckNotes = () => {
    const {setHeaderText}  = useHeader();
    useEffect(()=> {
        setHeaderText("Work through your learning blockers");
    },[setHeaderText])
    return (
       <div className="flex dark:bg-sidebar flex-col gap-4 md:gap-6 lg:gap-8 px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-4 md:py-6 lg:py-8">
            <div className="flex gap-2 md:gap-4 items-center">
                <ErrorOutlineOutlinedIcon style={{color:"#f54900", borderRadius:"10px", width:"50px", height:"40px" ,padding:"8px" }} />
                <Hero title={"Stuck Notes"} description={"Focus on your learning blockers and work through difficulties"}/>
            </div>
            <StuckHero/>
            <StuckNotesList/>
        </div>
    )
}
export default StuckNotes;