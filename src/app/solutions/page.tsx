import Hero from "@/components/Hero/Hero"
import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionNotes from "@/components/solutions/SolutionNotes";
const SolutionsPage = () => {
    return (
        <div className="px-80 h-full py-8 dark:bg-sidebar">
       <Hero title={"Solutions"} description={"Your resolved stuck notes and how you overcame them"}/>
            <SolutionHero/>
            <SolutionNotes/>
        </div>
    )
}
export default SolutionsPage