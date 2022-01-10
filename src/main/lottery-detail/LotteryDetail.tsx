import Countdown from "antd/lib/statistic/Countdown";
import { differenceInMilliseconds } from "date-fns";
import { Suspense, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { json } from "stream/consumers";
import { AlertService } from "../../services/alert.service";
import { supabase } from "../../services/supabase.client";
import { ContainerHeader } from "../../shared";
import PendingScreen from "../../shared/components/PendingScreen";
import { Lottery } from "../../shared/models/lottery.mode";
import { StorageHandler } from "../../utils";

export default function LotteryDetail() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [Lottery, setLottery] = useState<Lottery>();
  const [deadline, setDeadline] = useState<number>(0);
  const userId = StorageHandler.getUserData()?.id;
  const getDeadline = (lottery_date: Date) => {
    setDeadline(
      Date.now() + differenceInMilliseconds(new Date(lottery_date), new Date())
    );
  };
  const getLotteryById = async () => {
    supabase
      .from("lottery")
      .select()
      .filter("user_id", "eq", userId)
      .filter("id", "eq", id)
      .then(({ error, data }) => {
        if (error) {
        } else {
          if (data?.length != 1) {
            AlertService.Error("Lottery not found!");
            history.push("lottery-list");
          } else {
            setLottery(data[0]);
            getDeadline(data[0].lottery_date);
          }
        }
      });
  };

  useEffect(() => {
    getLotteryById();
    return () => {};
  }, []);
  return (
    <Suspense fallback={<PendingScreen />}>
      <ContainerHeader
        Label={Lottery?.title ?? ""}
        content={<Countdown value={deadline} onFinish={() => {}} />}
      />
    </Suspense>
  );
}
