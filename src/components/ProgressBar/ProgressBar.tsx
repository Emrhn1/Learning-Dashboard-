import { Slider } from "@/components/ui/slider"
import React from "react";
import {cn} from "@/lib/utils";
import {useAppSelector} from "@/app/hooks";

type SliderProps = React.ComponentProps<typeof Slider>


const ProgressBar = ({className,...props}: SliderProps) => {

    return (
        <Slider
        defaultValue={[70]}
        min={0}
        max={100}
        step={5}
        className={cn(className)}
        {...props}
        />
    )
}
export default ProgressBar