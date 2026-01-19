"use client";
import { useAppSelector } from "@/app/hooks";
import { Card, CardContent } from "@/components/ui/card";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const PrevReflections = () => {
  const cards = useAppSelector((state) => state.cards.cards);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {cards.map((card, index) => {
        return (
          <Card key={index} className="w-auto xs:w-[550px] p-6">
            <CardContent className="space-y-4 p-0">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CalendarTodayOutlinedIcon style={{ fontSize: "16px" }} />
                <span className="dark:text-sidebar-foreground">{formatDate(new Date())}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LightbulbOutlinedIcon
                    style={{ fontSize: "18px" }}
                    className="text-green-500"
                  />
                  <span className="font-medium text-sm">What I learned:</span>
                </div>
                <p className="text-sm leading-relaxed pl-6">{card.learned}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ErrorRoundedIcon
                    style={{ fontSize: "18px" }}
                    className="text-orange-500"
                  />
                  <span className="font-medium text-sm">What was difficult:</span>
                </div>
                <p className="text-sm leading-relaxed pl-6">
                  {card.difficult}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default PrevReflections;
