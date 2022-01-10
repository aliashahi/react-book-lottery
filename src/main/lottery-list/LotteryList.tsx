import LotteryItem from "./LotteryItem";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabase.client";
import { Lottery } from "../../shared/models/lottery.mode";
import { StorageHandler } from "../../utils";
import { AlertService } from "../../services/alert.service";
import { useHistory } from "react-router-dom";

export default function LotteryList(props: any) {
  const [data, setData] = useState<Lottery[]>([]);
  const history = useHistory();
  const getLotteries = async () => {
    const userId = StorageHandler.getUserData()?.id;
    await supabase
      .from("lottery")
      .select()
      .filter("user_id", "eq", userId)
      .then(({ data, error }) => {
        if (error) {
        } else if (data) {
          setData(data);
        }
      });
  };

  useEffect(() => {
    getLotteries();
    return () => {};
  }, []);

  const onShowDetails = (id: string) => {
    console.log(id);
    history.push("lottery-list/" + id);
  };

  const onDeleteLottery = async (id: string) => {
    await supabase
      .from("lottery")
      .delete()
      .match({ id })
      .then(({ error, data }) => {
        if (error) {
          AlertService.Error(error.message);
        } else {
          AlertService.Success("Lottery Deleted Successfully!");
          getLotteries();
        }
      });
  };

  return (
    <div className="flex flex-wrap p-4 overflow-y-scroll overflow-x-hidden">
      {data.map((i) => {
        return (
          <LotteryItem
            onDeleteLottery={onDeleteLottery}
            onShowDetails={() => onShowDetails(i.id)}
            key={i.id}
            lottery={i}
          ></LotteryItem>
        );
      })}
    </div>
  );
}
