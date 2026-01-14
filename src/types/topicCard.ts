export type TopicCards = {
    title: string;
    description: string;
    level: LevelType
}
export type LevelType = "Beginner" | "Intermediate" | "Advanced";
export type Status = "Active" | "Stuck" | "Completed";

interface LevelStyle {
    bg: string;
    text: string;
    border: string;
}

interface StatusStyle {
    bg: string;
    text: string;
    border: string;
}

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

export const statusStyles: Record<Status, StatusStyle> = {
    Active: {
        bg: "bg-[#dcfce7]",
        text: "text-[#008236]",
        border: "border-green-500"
    },
    Stuck: {
        bg: "bg-[#fff7ed]",
        text: "text-[#f54900]",
        border: "border-orange-500"
    },
    Completed: {
        bg: "bg-gray-100",
        text: "text-gray-700",
        border: "border-gray-500"
    }
}