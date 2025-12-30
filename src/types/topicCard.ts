type TopicCard = {
    title: string;
    description: string;
    level: LevelType
}
type LevelType = "Beginner" | "Intermediate" | "Advanced";

interface LevelStyle {
    bg: string;
    text: string;
    border: string;
}

export const topicCards:TopicCard[] = [
    {
        title: "React Hooks",
        description: "Frontend Development",
        level: "Beginner"
    },
    {
        title: "React Hooks",
        description: "Frontend Development",
        level: "Intermediate",
    },
    {
        title: "React Hooks",
        description: "Frontend Development",
        level: "Advanced",
    },
    {
        title: "React Hooks",
        description: "Frontend Development",
        level: "Advanced",
    },
    {
        title: "React Hooks",
        description: "Frontend Development",
        level: "Intermediate",
    }
]
export const levelStyles: Record<LevelType, LevelStyle> = {
    Beginner: {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-500"
    },
    Intermediate: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-500"
    },
    Advanced: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        border: "border-purple-500"
    }
};