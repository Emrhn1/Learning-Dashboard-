import Hero from "@/components/Hero/Hero"
import SolutionHero from "@/components/solutions/SolutionHero";
import SolutionNotes from "@/components/solutions/SolutionNotes";
const SolutionsPage = () => {
    return (
       <div className="px-4 h-full sm:px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-4 md:py-6 lg:py-8 dark:bg-sidebar">
       <Hero title={"Solutions"} description={"Your resolved stuck notes and how you overcame them"} showAddTopic={false}/>
            <SolutionHero/>
            <SolutionNotes/>
        </div>
    )
}
export default SolutionsPage
