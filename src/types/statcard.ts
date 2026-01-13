import TopicRoundedIcon from '@mui/icons-material/TopicRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';

export type StatCard = {
    title: string,
    icon: any,
}

export const activeTopics: StatCard[] = [
    {
        title: "Active Topics",
        icon: TopicRoundedIcon
    },
]
export const stuckTopics: StatCard[] = [
    {
        title: "Stuck Topics",
        icon: PriorityHighRoundedIcon,
    },
]
export const weeklyProgress: StatCard[] = [
    {
        title: "Weekly Progress",
        icon: TrendingUpRoundedIcon
    },
]
export const todayFocus: StatCard[] = [
    {
        title: "Today's Focus",
        icon: BlurCircularRoundedIcon
    }
]

