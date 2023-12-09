import { Card, CardFooter } from '@/components/ui/card'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import profimage from "@/public/images/profile.jpg"

const page = () => {
  return (
    <div className='flex'>
        <section className='w-[50%]'>
            <Card className='p-3 '>
            <div className="space-y-2">
                <h4 className="font-medium leading-none ">Edit profile</h4>
                <p className="text-sm text-muted-foreground">
                Edit profile
                </p>
            </div>
            <div className="grid grid-cols-3 items-center gap-5 mt-10">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first name"
                type="text" 
                placeholder="Enter Your First Name"

                defaultValue=""
                className="col-span-2 h-8"
              />
                <Label htmlFor="second-name">Second Name</Label>
              <Input
                id="secondName"
                type="text" 
                placeholder="Enter your second name"
                defaultValue=""
                className="col-span-2 h-8"
              />
            <Label htmlFor="first-name">Contact</Label>
              <Input
                id="contact"
                type='number'
                placeholder="Enter contact"
                defaultValue=""
                className="col-span-2 h-8"
              />
            </div>
            <CardFooter className="mt-10 flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
        </section>



        <section className='w-[50%] flex flex-col items-end'>
            <Card className="w-[350px] h-[350px] rounded-full">
                    <Image
                    src={profimage}
                    width={300}
                    height={300}
                    alt="Picture"
                    className="object-cover w-full h-full rounded-full"
                />
            </Card>

            <Card className='w-[350px]  mt-10'>
                <div className='p-5 gap-4 flex flex-col items-center justify-center'>
                    <p>User name</p>
                    <p>User email</p>
                    <p>User contact</p>
                </div>
            </Card>

        </section>
    </div>
  )
}

export default page