export interface Lottery {
  id: string;
  title: string;
  user_id: string;
  access: "PUBLIC" | "PRIVATE";
  create_date: Date;
  lottery_date: Date;
  status: "ACTIVE" | string;
  desc: string;
}
