import { Card, CardContent, CardDescription,CardTitle } from "@/components/ui/card"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {ToggleGroup,ToggleGroupItem} from "@/components/ui/toggle-group";

const TopicFilter = () => {
    return (
        <Card className="w-full min-h-[161px] hover:shadow-md pt-[25px] pr-[25px] pb-0.5">
            <CardContent>
                   <div className="flex flex-row items-start gap-2">
                       <FilterAltOutlinedIcon color="action" className="w-4 h-4"/>
                       <h3 className="text-[#404040] text-[18px] font-display">Filters</h3>
                   </div>
                <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#525252]">Difficulty Level</h2>
                        <ToggleGroup type={"single"} className="flex flex-wrap gap-2">
                            <ToggleGroupItem
                                className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                                value="All Levels">
                                All Levels
                            </ToggleGroupItem>
                            <ToggleGroupItem className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white" value="Beginner">
                                Beginner
                            </ToggleGroupItem>
                            <ToggleGroupItem className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white" value="Intermediate">
                                Intermediate
                            </ToggleGroupItem>
                            <ToggleGroupItem className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white" value="Advanced">
                                Advanced
                        </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <div className="flex flex-col gap-4 mb-3 md:mb-2 sm:mb-4">
                        <h2 className="text-[#525252]">Status</h2>
                        <ToggleGroup type={"single"} className="flex flex-wrap gap-2">
                            <ToggleGroupItem value={"All Status"} className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white">All Status</ToggleGroupItem>
                            <ToggleGroupItem className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white" value={"Active"}>Active</ToggleGroupItem>
                            <ToggleGroupItem className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white" value={"Stuck"}>Stuck</ToggleGroupItem>
                            <ToggleGroupItem className="text-[#171717] border !rounded-lg data-[state=on]:bg-[#171717] data-[state=on]:text-white" value={"Completed"}>Completed</ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default TopicFilter