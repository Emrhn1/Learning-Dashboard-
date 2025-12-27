import {Button} from  "@/components/ui/button"
import {Dialog,DialogHeader,DialogTitle,DialogContent,DialogFooter,DialogClose,DialogDescription,DialogTrigger} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label"
import {Input} from   "@/components/ui/input"
import {useState,useEffect} from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Progress } from "@/components/ui/progress"
import {Textarea} from "@/components/ui/textarea";
import {ToggleGroup,ToggleGroupItem} from "@/components/ui/toggle-group";

const AddTopic = () => {
    const [progress, setProgress] = useState(13)
    useEffect(()=>{
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    },[])
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Topic</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Add New Topic</DialogTitle>
                    <DialogDescription>Track a new learning topic and start your progress</DialogDescription>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label className="text-[#404040]" htmlFor="topics-title">Topic Title *</Label>
                            <Input required id="title" name="name" placeholder="e.g. Typescript Generics" />
                        </div>
                        <div className="grid gap-3">
                            <Label className="font-normal text-[#404040]" htmlFor="category">Category</Label>
                            <Input id="username-1" name="username"/>
                        </div>
                        <div className="flex flex-col mt-3 gap-3">
                            <Label>Difficulty Level</Label>
                        <ToggleGroup spacing={9} type="single">
                            <ToggleGroupItem
                                value="star"
                                aria-label="Toggle star"
                                className="px-8 bg-transparent text-[#171717] border data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                            >
                                Beginner
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="heart"
                                aria-label="Toggle heart"
                                className="px-8 bg-transparent text-[#171717] border data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                            >
                                Intermediate
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="bookmark"
                                aria-label="Toggle bookmark"
                                className="px-8 bg-transparent text-[#171717] border data-[state=on]:bg-[#171717] data-[state=on]:text-white"
                            >
                                Advanced
                            </ToggleGroupItem>
                        </ToggleGroup>
                        </div>
                        <div className="flex flex-col mt-3 gap-3">
                            <Label>Status</Label>
                                <ToggleGroup spacing={3} type="single">
                                    <ToggleGroupItem
                                        value="star"
                                        aria-label="Toggle star"
                                        className="px-24 bg-transparent text-[#171717] border data-[state=on]:bg-[#00A63E] data-[state=on]:text-white"
                                    >
                                        Active
                                    </ToggleGroupItem>
                                    <ToggleGroupItem
                                        value="heart"
                                        aria-label="Toggle heart"
                                        className="px-24 bg-transparent text-[#171717] border data-[state=on]:bg-[#f54a00] data-[state=on]:text-white"
                                    >
                                        Stuck
                                    </ToggleGroupItem>
                                </ToggleGroup>
                        </div>
                        <div className="flex flex-col mt-3 gap-3">
                            <Label>Starting Progress</Label>
                            <Progress value={progress} className="w-[100%]"/>
                        </div>
                        <div className="flex flex-col mt-3 gap-3">
                            <Label>Optional Notes</Label>
                            <Textarea placeholder="Why are you learning this? Any context or goals?"/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button variant="outline" color="primary">Cancel</Button>
                        </DialogClose>
                        <Button variant="default" className="bg-[#171717] text-white">Add Topic</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
export default AddTopic