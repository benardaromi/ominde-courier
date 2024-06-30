import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function SelectCourier({ onCourierSelect }) {
  const [courier, setCourier] = useState('')

  const handleCourierSelect = (value) => {
    setCourier(value)
    onCourierSelect(value)
  }


  return (
    <Select onValueChange={handleCourierSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Courier" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Courier</SelectLabel>
          <SelectItem value="Jumia">Jumia</SelectItem>
          <SelectItem value="Pick Up Mtaani">Pick Up Mtaani</SelectItem>
          <SelectItem value="DHL">DHL</SelectItem>
          <SelectItem value="G4S">G4S</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
