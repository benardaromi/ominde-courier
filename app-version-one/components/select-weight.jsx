import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWeight({ onWeightSelect }) {
  const [weight, setWeight] = useState('')

  const handleSelect = (value) => {
    setWeight(value)
    onWeightSelect(value)
  }

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Parcel Weight" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Parcel Weight</SelectLabel>
          <SelectItem value="below 5">Below 5Kgs</SelectItem>
          <SelectItem value="5">5Kgs</SelectItem>
          <SelectItem value="10">10Kgs</SelectItem>
          <SelectItem value="20">20Kgs</SelectItem>
          <SelectItem value="50">50Kgs</SelectItem>
        </SelectGroup>
          <button onClick={() => {console.log(weight)}}>print</button>
      </SelectContent>
    </Select>
  )
}
