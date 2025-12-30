import {Button} from  "@/components/ui/button"
import {Dialog,DialogHeader,DialogTitle,DialogContent,DialogFooter,DialogClose,DialogDescription,DialogTrigger} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import {Input} from   "@/components/ui/input"
import {useState,useEffect} from "react";
import { Progress } from "@/components/ui/progress"
import {Textarea} from "@/components/ui/textarea";
import {ToggleGroup,ToggleGroupItem} from "@/components/ui/toggle-group";

const AddTopic = () => {
    const [progress, setProgress] = useState(13)

    useEffect(()=>{
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    },[])

    const handleSubmit = () => {
        // Form submit logic here
        console.log('Topic added');
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                    Add Topic
                </Button>
            </DialogTrigger>

            {/* Responsive Dialog Content */}
            <DialogContent className="w-[95vw] max-w-[425px] sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                <DialogHeader className="space-y-2">
                    <DialogTitle className="text-lg sm:text-xl">
                        Add New Topic
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base">
                        Track a new learning topic and start your progress
                    </DialogDescription>
                </DialogHeader>

                {/* Form Grid - Responsive Spacing */}
                <div className="grid gap-3 sm:gap-4 py-4">

                    {/* Topic Title */}
                    <div className="grid gap-2 sm:gap-3">
                        <Label
                            className="text-sm sm:text-base text-[#404040]"
                            htmlFor="title"
                        >
                            Topic Title *
                        </Label>
                        <Input
                            className="w-full h-10 sm:h-11 text-sm sm:text-base"
                            required
                            id="title"
                            name="name"
                            placeholder="e.g. Typescript Generics"
                        />
                    </div>

                    {/* Category */}
                    <div className="grid gap-2 sm:gap-3">
                        <Label
                            className="text-sm sm:text-base font-normal text-[#404040]"
                            htmlFor="category"
                        >
                            Category
                        </Label>
                        <Input
                            id="category"
                            className="w-full h-10 sm:h-11 text-sm sm:text-base"
                            name="category"
                            placeholder="e.g. Programming"
                        />
                    </div>

                    {/* Difficulty Level - Responsive Toggle */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <Label className="text-sm sm:text-base">
                            Difficulty Level
                        </Label>
                        <ToggleGroup type="single" className="flex gap-2 justify-center items-center">
                            <ToggleGroupItem
                                value="beginner"
                                aria-label="Beginner"
                                className="flex-1 min-w-[90px] sm:min-w-[100px] h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                            >
                                Beginner
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="intermediate"
                                aria-label="Intermediate"
                                className="flex-1 min-w-[90px] sm:min-w-[110px] h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                            >
                                Intermediate
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="advanced"
                                aria-label="Advanced"
                                className="flex-1 min-w-[90px] sm:min-w-[100px] h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                            >
                                Advanced
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    {/* Status - Responsive Toggle */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <Label className="text-sm sm:text-base">
                            Status
                        </Label>
                        <ToggleGroup type="single" className="flex flex-wrap gap-2 justify-between">
                            <ToggleGroupItem
                                value="active"
                                aria-label="Active"
                                className="flex-1 min-w-[100px] sm:min-w-[120px] h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#00A63E] data-[state=on]:text-white"
                            >
                                Active
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="stuck"
                                aria-label="Stuck"
                                className="flex-1 min-w-[100px] sm:min-w-[120px] h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#f54a00] data-[state=on]:text-white"
                            >
                                Stuck
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>

                    {/* Progress */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <Label className="text-sm sm:text-base">
                            Starting Progress
                        </Label>
                        <div className="space-y-2">
                            <Progress value={progress} className="w-full h-1 sm:h-3"/>
                            <p className="text-xs sm:text-sm text-gray-500 text-right">
                                {progress}%
                            </p>
                        </div>
                    </div>

                    {/* Optional Notes */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <Label className="text-sm sm:text-base">
                            Optional Notes
                        </Label>
                        <Textarea
                            placeholder="Why are you learning this? Any context or goals?"
                            className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base resize-none"
                        />
                    </div>
                </div>

                {/* Responsive Footer - Stack on mobile, row on desktop */}
                <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleSubmit}
                        variant="default"
                        className="w-full sm:w-auto h-10 sm:h-11 bg-[#171717] text-white text-sm sm:text-base hover:bg-[#2a2a2a]"
                    >
                        Add Topic
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddTopic