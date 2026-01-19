"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner";
import { useAppDispatch } from "@/app/hooks";
import { addTopic } from "@/redux/features/topics/addTopics";
import { LevelType, Status } from "@/types/topicCard";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const AddTopic = () => {
  const [progress, setProgress] = useState<number[]>([0]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState<LevelType | "">("");
  const [status, setStatus] = useState<Status | "">("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (!title || !category || !level || !status) {
      toast.error("Please fill all fields");
      return;
    } else {
      dispatch(
        addTopic({
          id: Date.now().toString(),
          title: title,
          category: category,
          level: level,
          status: status,
          message: message,
          progress: progress[0],
        }),
      );
      toast.success("Topic added successfully!");
    }
    setTitle("");
    setCategory("");
    setLevel("");
    setStatus("");
    setMessage("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-[#171717] text-white hover:bg-[#2a2a2a] hover:text-white  sm:w-auto"
        >
          Add Topic
        </Button>
      </DialogTrigger>

      {/* Responsive Dialog Content */}
      <DialogContent className="w-[95vw] max-w-[425px] sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl">
            Add New Topic
          </DialogTitle>
          <DialogDescription className="text-sm dark:text-sidebar-foreground sm:text-base">
            Track a new learning topic and start your progress
          </DialogDescription>
        </DialogHeader>

        {/* Form Grid - Responsive Spacing */}
        <div className="grid gap-3 sm:gap-4 py-4">
          {/* Topic Title */}
          <div className="grid gap-2 sm:gap-3">
            <Label
              className="text-sm sm:text-base text-[#404040] dark:text-sidebar-foreground font-normal"
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="grid gap-2 sm:gap-3">
            <Label
              className="text-sm sm:text-base font-normal text-[#404040] dark:text-sidebar-foreground"
              htmlFor="category"
            >
              Category
            </Label>
            <Input
              id="category"
              className="w-full h-10 sm:h-11 text-sm sm:text-base"
              name="category"
              placeholder="e.g. Programming"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Difficulty Level - Responsive Toggle */}
          <div className="grid grid-col gap-2 sm:gap-3">
            <Label className="text-sm text-[#404040] dark:text-sidebar-foreground sm:text-base">
              Difficulty Level
            </Label>
            <ToggleGroup
              onValueChange={(e) => {
                setLevel(e as LevelType);
              }}
              value={level}
              type="single"
              className="w-full justify-between grid grid-cols-3 gap-2 items-center"
            >
              <ToggleGroupItem
                value="Beginner"
                aria-label="Beginner"
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors"
              >
                Beginner
              </ToggleGroupItem>
              <ToggleGroupItem
                value="Intermediate"
                aria-label="Intermediate"
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors"
              >
                Intermediate
              </ToggleGroupItem>
              <ToggleGroupItem
                value="Advanced"
                aria-label="Advanced"
                className="border border-border bg-background text-foreground !rounded-lg 
           data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
           dark:data-[state=on]:bg-blue-600 dark:data-[state=on]:text-white
           hover:bg-accent transition-colors"
              >
                Advanced
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Status - Responsive Toggle */}
          <Label className="text-sm text-[#404040] dark:text-sidebar-foreground sm:text-base">
            Status
          </Label>
          <ToggleGroup
            onValueChange={(e) => setStatus(e as Status)}
            value={status}
            type="single"
            className="w-full flex flex-wrap gap-2 justify-between"
          >
            <ToggleGroupItem
              value="Active"
              aria-label="Active"
              className="flex-1 min-w-[100px] dark:text-sidebar-foreground sm:min-w-[120px] !rounded-lg h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#00A63E] data-[state=on]:text-white"
            >
              Active
            </ToggleGroupItem>
            <ToggleGroupItem
              value="Stuck"
              aria-label="Stuck"
              className="flex-1 min-w-[100px] dark:text-sidebar-foreground sm:min-w-[120px] !rounded-lg h-9 sm:h-10 text-xs sm:text-sm bg-transparent text-[#171717] border data-[state=on]:bg-[#f54a00] data-[state=on]:text-white"
            >
              Stuck
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Progress */}
          <div className="flex flex-col mt-1 -mb-1 gap-2 sm:gap-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm text-[#404040] dark:text-sidebar-foreground sm:text-base">
                Starting Progress
              </Label>
              <Label className="text-[#525252] dark:text-sidebar-foreground">{`%${progress}`}</Label>
            </div>

            <ProgressBar
              value={progress}
              onValueChange={(e) => setProgress(e)}
            />
            <div className="flex justify-between mt-2 text-xs text-neutral-400">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
          {/* Optional Notes */}
          <div className="flex flex-col -mt-2 gap-2 sm:gap-3">
            <Label className="text-sm text-[#404040] dark:text-sidebar-foreground sm:text-base">
              {status === "Active" && null
                ? "Optional Notes"
                : "Where are you stuck?"}
            </Label>
            <Textarea
              disabled={status === "Active"}
              required={status === "Stuck"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                status === "Active"
                  ? "Why are you learning this? Any context or goals?"
                  : "Describe what's difficult or what's blocking your progress..."
              }
              className={`min-h-[80px] sm:min-h-[100px] border text-sm sm:text-base resize-none ${status === "Stuck" && "bg-orange-50 border-orange-50"}`}
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
  );
};

export default AddTopic;
