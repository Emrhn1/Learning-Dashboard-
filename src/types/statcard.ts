import TopicRoundedIcon from '@mui/icons-material/TopicRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';
import circle from "../../public/icons/circle.svg"
export type Statcard = {
    title: string,
    icon: any,
}

export const statCardProps: Statcard[] = [
    {
        title: "Active Topics",
        icon: TopicRoundedIcon
    },
    {
      title: "Stuck Topics",
        icon: PriorityHighRoundedIcon,
    },
    {
        title: "Weekly Progress",
        icon: TrendingUpRoundedIcon
    },
    {
        title: "Today's Focus",
        icon: BlurCircularRoundedIcon
    }
]

