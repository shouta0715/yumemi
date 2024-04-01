import { fetchPrefectures } from "@/app/(apps)/_features/prefectures/api";
import { Prefectures } from "@/app/(apps)/_features/prefectures/components";
import { SearchParams } from "@/libs/types/next";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { result: prefectures } = await fetchPrefectures();

  return (
    <div>
      <Prefectures prefectures={prefectures} searchParams={searchParams} />
    </div>
  );
}
