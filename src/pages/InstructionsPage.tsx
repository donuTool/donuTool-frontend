import { Link } from "react-router-dom";
import Card from "@/components/Card";
import PlayIcon from "@/assets/circle-play.svg?react";

export default function InstructionsPage() {
  return (
    <>
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        도움말
      </div>
      <Card
        children={
          <div className="flex h-[95%] w-[100%] translate-y-4 flex-col justify-center gap-4">
            <Link
              to="/help/question/1"
              className="dark:text-donutool-bright dark:bg-donutool-button flex h-[25%] w-full items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
            >
              Q1. ...
            </Link>
            <Link
              to="/help/question/2"
              className="dark:text-donutool-bright dark:bg-donutool-button flex h-[25%] w-full items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
            >
              Q2. ...
            </Link>
            <Link
              to="/help/question/3"
              className="dark:text-donutool-bright dark:bg-donutool-button flex h-[25%] w-full items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
            >
              Q3. ...
            </Link>
            <Link
              to="/help/question/4"
              className="dark:text-donutool-bright dark:bg-donutool-button flex h-[25%] w-full items-center justify-start rounded-2xl bg-white px-5 font-semibold text-neutral-600 transition duration-300"
            >
              Q4. ...
            </Link>
          </div>
        }
        title="자주 묻는 질문"
        width={95}
        height={40}
      />
      <div className="flex h-[30%] w-[95%] flex-row justify-center gap-[2.5%]">
        <Card
          children={
            <div className="flex h-[110%] w-[70%] translate-x-20 items-center justify-center rounded-2xl bg-black">
              <PlayIcon className="h-12 w-12 cursor-pointer stroke-neutral-200" />
            </div>
          }
          title="빠른 시작 가이드"
          width={80}
          height={0}
        />
        <div className="flex h-full w-[20%] flex-col gap-[6%]">
          <Card
            children={
              <Link
                to="/help/contact"
                className="dark:bg-donutool-button dark:hover:bg-donutool-bg dark:text-donutool-bright flex h-10 w-22 translate-y-4 cursor-pointer items-center justify-center rounded-xl bg-white font-semibold text-neutral-600 transition duration-300 hover:bg-neutral-300 hover:text-white"
              >
                문의하기
              </Link>
            }
            title="문의"
            width={100}
            height={47}
          />
          <Card
            children={
              <div className="dark:text-donutool-bright translate-y-3 font-semibold text-neutral-600 transition duration-300">
                1.0.0
              </div>
            }
            title="버전"
            width={100}
            height={47}
          />
        </div>
      </div>
      <Card
        children={
          <div className="flex flex-row gap-7">
            <button className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 text-xs font-semibold text-neutral-100">
              GitHub
            </button>
            <button className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 text-xs font-semibold text-neutral-100">
              Discord
            </button>
            <button className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 text-xs font-semibold text-neutral-100">
              YouTube
            </button>
            <button className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-neutral-400 text-xs font-semibold text-neutral-100">
              Instagram
            </button>
          </div>
        }
        title="커뮤니티"
        width={95}
        height={17}
      />
    </>
  );
}
