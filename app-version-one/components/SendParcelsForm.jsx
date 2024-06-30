'use client'

import { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export default function SendParcelsForm() {
    const [size, setSize] = useState('')
    const [weight, setWeight] = useState('')
    const [courier, setCourier] = useState('')

    return (
        <form>
           <div>
                <Label>
                    Parcel Size:
                    <Input
                        type='text'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        required
                    />
                </Label>
           </div> 
           
        </form>
    )
}