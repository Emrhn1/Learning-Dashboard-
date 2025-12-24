import DashboardIcon from '@mui/icons-material/Dashboard';
import TopicIcon from '@mui/icons-material/Topic';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export type SidebarButton = {
    icon: any;
    text: string;
    url: string;
}

export const buttons: SidebarButton[] = [
    {
       icon: DashboardIcon,
        text: "Dashboard",
        url: "/"
    },
    {
        icon: TopicIcon,
        text: "Topics",
        url: "/topics"
    },
    {
      icon: FmdBadIcon,
      text: "Stuck Notes",
        url: "/stucknotes"
    },
    {
      icon: EmojiObjectsIcon,
      text: "Reflection",
        url: "/reflection"
    }
]