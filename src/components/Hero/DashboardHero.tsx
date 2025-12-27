import AddTopic from "@/components/Buttons/AddTopic"

const DashboardHero = () => {
    return (
        <div className="w-full h-[54px] mt-8 px-30 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-1">
                <h1 className="text-xl text-[#171717] font-semibold">Your Learning Topics</h1>
                <span className="text-[14px] text-[#737373]">Continue your learning journey</span>
            </div>
            <AddTopic/>
        </div>
    )

}
export default DashboardHero