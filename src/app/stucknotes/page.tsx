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
        <div className="flex flex-col gap-8 px-80 py-8">
            <div className="flex gap-4 items-center">
                <ErrorOutlineOutlinedIcon style={{color:"#f54900", backgroundColor:"#FFF7ED", borderRadius:"10px", width:"40px", height:"40px" ,padding:"8px" }} />
                <Hero title={"Stuck Notes"} description={"Focus on your learning blockers and work through difficulties"}/>
            </div>
            <StuckHero/>
            <StuckNotesList/>
        </div>
    )
}
export default StuckNotes;