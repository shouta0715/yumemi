import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

type UsePrefecturesProps = {
  defaultPrefCodes: string[];
  prefCode: number;
};

export function usePrefecture({
  defaultPrefCodes,
  prefCode,
}: UsePrefecturesProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { checked } = event.target;

    const newPrefCodes = checked
      ? [...defaultPrefCodes, value]
      : defaultPrefCodes.filter((code) => code !== value);

    const urlSearchParams = new URLSearchParams();

    newPrefCodes.forEach((code) => {
      urlSearchParams.append("prefCodes", code);
    });

    startTransition(() => {
      router.push(`/?${urlSearchParams.toString()}`);
    });
  };

  const defaultChecked = defaultPrefCodes.includes(prefCode.toString());

  return {
    handleCheckboxChange,
    isPending,
    defaultChecked,
  };
}
