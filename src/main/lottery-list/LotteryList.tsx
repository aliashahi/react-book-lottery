import LotteryItem from "./LotteryItem";

export default function LotteryList(props: any) {
  return (
    <div className="flex flex-wrap p-4 overflow-y-scroll overflow-x-hidden">
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
      <LotteryItem></LotteryItem>
    </div>
  );
}
