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
  
  export function SelectLocation({ onLocationSelect }) {
    const [location, setLocation] = useState('')
  
    const handleLocationSelect = (value) => {
      setLocation(value)
      onLocationSelect(value)
    }
  
  
    return (
      <Select onValueChange={handleLocationSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Courier</SelectLabel>
            <SelectItem value="Nairobi">Nairobi</SelectItem>
            <SelectItem value="Coast">Coast</SelectItem>
            <SelectItem value="Western">Western</SelectItem>
            <SelectItem value="Eastern">Eastern</SelectItem>
            <SelectItem value="Central">Central</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  