"use client"
import { Card, CardTitle, CardContent } from "@/components/ui/card"
import {Button} from  "@/components/ui/button"
import {Textarea} from "@/components/ui/textarea"
import {useState} from "react";
import {useAppDispatch} from "@/app/hooks";
import {addCard} from "@/redux/features/reflection";
import {toast, Toaster} from "sonner";

const AddReflection = () => {
    const [learned, setLearned] = useState<string>("")
    const [difficult, setDifficult] = useState<string>("")
    const dispatch = useAppDispatch();
    
    const handleText = () => {
        if (!learned || !difficult){
            toast.error("Please fill in both fields before saving.")
            return;
        }
        dispatch(addCard({
            learned,
            difficult,
        }))
        setLearned("")
        setDifficult("")
    }

    return (
       <Card className="w-auto xs:w-[550px] p-8">
           <CardContent className="space-y-6">
               <div className="space-y-3">
                   <CardTitle className="text-lg font-normal">What did you learn today?</CardTitle>
                   <Textarea
                       value={learned}
                       onChange={(e)=> setLearned(e.target.value)}
                       placeholder="Share your insights, breakthroughs, and new knowledge..."
                       className="min-h-[120px] resize-none"
                   />
               </div>
               
               <div className="space-y-3">
                   <CardTitle className="text-lg font-normal">What was difficult?</CardTitle>
                   <Textarea
                       value={difficult}
                       onChange={(e)=> setDifficult(e.target.value)}
                       placeholder="Note any challenges or concepts that need more attention..."
                       className="min-h-[120px] resize-none"
                   />
               </div>

               <div className="flex justify-end">
                   <Button onClick={handleText} className="px-6">
                       Save Reflection
                   </Button>
               </div>
           </CardContent>
       </Card>
    )
}
export default AddReflection