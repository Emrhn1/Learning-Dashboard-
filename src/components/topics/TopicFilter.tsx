import { Card, CardContent } from "@/components/ui/card";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { updateFilterTopic } from "@/redux/features/topics/addTopics";

const TopicFilter = () => {
  const dispatch = useAppDispatch();
  return (
    <Card className="w-full hover:shadow-md pt-[25px] pr-[25px] pb-[25px] pl-[25px]">
      <CardContent className="p-0">
        <div className="flex flex-row items-start gap-2 mb-4">
          <FilterAltOutlinedIcon color="action" className="w-4 h-4" />
          <h3 className="text-[#404040] dark:text-sidebar-foreground text-[18px] font-display">
            Filters
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#525252] dark:text-sidebar-foreground text-sm font-medium">
              Difficulty Level
            </h2>
            <ToggleGroup type={"single"} className="flex flex-wrap gap-2 justify-start">
              <ToggleGroupItem
                defaultValue={"All Levels"}
                onClick={() =>
                  dispatch(updateFilterTopic({ level: "All Levels" }))
                }
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                value="All Levels"
              >
                All Levels
              </ToggleGroupItem>
              <ToggleGroupItem
                onClick={() =>
                  dispatch(updateFilterTopic({ level: "Beginner" }))
                }
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                value="Beginner"
              >
                Beginner
              </ToggleGroupItem>
              <ToggleGroupItem
                onClick={() =>
                  dispatch(updateFilterTopic({ level: "Intermediate" }))
                }
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                value="Intermediate"
              >
                Intermediate
              </ToggleGroupItem>
              <ToggleGroupItem
                onClick={() =>
                  dispatch(updateFilterTopic({ level: "Advanced" }))
                }
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                value="Advanced"
              >
                Advanced
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#525252] dark:text-sidebar-foreground text-sm font-medium">
              Status
            </h2>
            <ToggleGroup type={"single"} className="flex flex-wrap gap-2 justify-start">
              <ToggleGroupItem
                defaultValue={"All Status"}
                value={"All Status"}
                onClick={() =>
                  dispatch(updateFilterTopic({ status: "All Status" }))
                }
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
              >
                All Status
              </ToggleGroupItem>
              <ToggleGroupItem
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                value={"Active"}
                onClick={() =>
                  dispatch(updateFilterTopic({ status: "Active" }))
                }
              >
                Active
              </ToggleGroupItem>
              <ToggleGroupItem
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                onClick={() => dispatch(updateFilterTopic({ status: "Stuck" }))}
                value={"Stuck"}
              >
                Stuck
              </ToggleGroupItem>
              <ToggleGroupItem
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors text-xs sm:text-sm px-3 py-1.5"
                onClick={() =>
                  dispatch(updateFilterTopic({ status: "Completed" }))
                }
                value={"Completed"}
              >
                Completed
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default TopicFilter;
