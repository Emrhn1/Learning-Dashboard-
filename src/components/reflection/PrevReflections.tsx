"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Card, CardContent } from "@/components/ui/card";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ClearIcon from '@mui/icons-material/Clear';
import { removeCard } from "@/redux/features/reflection";
const PrevReflections = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  const dispatch = useAppDispatch();
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {cards.map((card) => {
        return (
          <Card key={card.id} className="w-auto xs:w-[550px] hover:shadow-md p-6">
            <CardContent className="space-y-4 p-0">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CalendarTodayOutlinedIcon style={{ fontSize: "16px" }} />
                <span className="dark:text-sidebar-foreground">{formatDate(new Date(card.createdAt))}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LightbulbOutlinedIcon
                    style={{ fontSize: "18px" }}
                    className="text-green-500"
                  />
                  <span className="font-normal text-sm">What I learned:</span>
                </div>
                <p className="text-sm leading-relaxed pl-6">{card.learned}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ErrorRoundedIcon
                    style={{ fontSize: "18px" }}
                    className="text-orange-500"
                  />
                  <span className="font-normal text-sm">What was difficult:</span>
                </div>
                <p className="text-sm leading-relaxed pl-6">
                  {card.difficult}
                </p>
              </div>
             <ClearIcon color="error" className="cursor-pointer" onClick={()=> dispatch(removeCard(card.id))}/>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default PrevReflections;
