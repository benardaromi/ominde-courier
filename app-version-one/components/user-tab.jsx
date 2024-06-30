import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SelectWeight } from "./select-weight"
import { SelectCourier } from "./select-courier"
import { useState } from "react"
import { SelectLocation } from "./select-location"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog"
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog"

export function UserTab() {
  const [selectedWeight, setSelectedWeight] = useState('')
  const [selectedCourier, setSelectedCourier] = useState('')
  const [location, setLocation] = useState('')

  const handleSelectedWeight = (weight) => {
    setSelectedWeight(weight)
  }

  const handleSelectedCourier = (courier) => {
    setSelectedCourier(courier)
  }

  const handleSelectedLocation = (selectedLocation) => {
    setLocation(selectedLocation)
  }

  return (
    <Tabs defaultValue="sending" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sending">Sending Parcels</TabsTrigger>
        <TabsTrigger value="receiving">Receiving Parcels</TabsTrigger>
      </TabsList>
      <TabsContent value="sending">
        <Card>
          <CardHeader>
            <CardTitle>Parcel Details</CardTitle>
            <CardDescription>
              Fill out the form below and select continue to proceed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex space-x-3 mx-auto">
                <SelectWeight  onWeightSelect = {handleSelectedWeight}/>
                <SelectCourier onCourierSelect = {handleSelectedCourier}/>
                <SelectLocation onLocationSelect={handleSelectedLocation} />
            </div>
          </CardContent>
          <CardFooter>
            <AlertDialog className='bg-white'>
              <AlertDialogTrigger asChild >
                <Button variant={'outline'} 
                  className='hover:scale-105 transition shadow-md hover:text-white hover:bg-orange-600 rounded'
                >Continue</Button>
              </AlertDialogTrigger>
              <AlertDialogContent >
              <AlertDialogHeader>
                <AlertDialogTitle>Is this correct? Click yes to proceed</AlertDialogTitle>
                <AlertDialogDescription>
                  This is the general information we use to associate your parcel to you. Please confirm that the details are correct
                </AlertDialogDescription>
              </AlertDialogHeader>
                <div>
                  <p>Parcel Destination: <span>{location}</span></p>
                  <p>Weight: <span>{selectedWeight} Kgs</span></p>
                  <p>Courier: {selectedCourier}</p>
                </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="receiving">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
