import Hero from "@/components/Hero/Hero"
import AddReflection from "@/components/reflection/AddReflection";
import PrevReflections from "@/components/reflection/PrevReflections";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
const ReflectionPage = () => {
    return (
        <div className="flex flex-col gap-8 px-80 py-8">
        <div className="flex gap-2 items-center">
        <AutoAwesomeOutlinedIcon style={{color:"#9810FA"}}/>
        <Hero title={"Reflection"} description={"Take a moment to reflect on your learning journey"}/>
        </div>
            <AddReflection />
            <PrevReflections />
        </div>
    )
}
export default ReflectionPage