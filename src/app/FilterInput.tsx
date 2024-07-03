"use client";

import debounce from "lodash/debounce";
import { useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";

interface Props {
  className?: string;
  placeholder?: string;
  onChange: (filter: string) => void;
}

export function FilterInput({ className = "", placeholder, onChange }: Props) {
  const debounceFilter = useMemo(() => debounce(onChange, 300), [onChange]);

  return (
    <Input
      className={className}
      placeholder={placeholder}
      onChange={handleFilterChanged}
    />
  );

  function handleFilterChanged(event: React.ChangeEvent<HTMLInputElement>) {
    debounceFilter(event.target.value.toLowerCase());
  }
}
