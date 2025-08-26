import Card from "@/components/Card";
import GoBackButton from "@/components/buttons/GoBackButton";

export default function QuestionPage({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <>
      <GoBackButton />
      <div className="dark:text-donutool-bright mt-5 text-2xl font-semibold text-neutral-600 transition duration-300">
        {title}
      </div>
      <Card children={<div>{content}</div>} title="" width={95} height={90} />
    </>
  );
}
