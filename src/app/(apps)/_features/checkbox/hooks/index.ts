import { useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";

type UsePrefecturesProps = {
  prefCode: number;
};

export function usePrefecture({ prefCode }: UsePrefecturesProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { checked } = event.target;
    const prevType = searchParams.get("type");

    const defaultPrefCodes = searchParams.getAll("prefCode");

    const newPrefCodes = checked
      ? [...defaultPrefCodes, value]
      : defaultPrefCodes.filter((code) => code !== value);

    const urlSearchParams = new URLSearchParams();

    newPrefCodes.forEach((code) => {
      urlSearchParams.append("prefCode", code);
    });

    if (prevType) urlSearchParams.set("type", prevType);

    startTransition(() => {
      router.push(`/?${urlSearchParams.toString()}`);
    });
  };

  const checked = searchParams.getAll("prefCode").includes(prefCode.toString());

  return {
    handleCheckboxChange,
    isPending,
    checked,
  };
}
