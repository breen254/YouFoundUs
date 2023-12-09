import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { RightToggle } from "./rightToggle"
import { AvatarPic } from "./avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
  
  export function MenubarDrop() {
    return (
      <Menubar>




        <MenubarMenu>
          <MenubarTrigger>

                <p>Account</p>
            

          </MenubarTrigger>
          <MenubarContent>
          <Link href={"/profile"}>
            <MenubarItem>
              Profile
            </MenubarItem>
            </Link> 
          <Link href={"/"}>

            <MenubarItem>
              Favorites 
            </MenubarItem>
            </Link> 

            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <Link href={"/"}><MenubarItem>Email</MenubarItem></Link>
                <Link href={"/"}><MenubarItem>Messages</MenubarItem></Link>
                <Link href={"/"}><MenubarItem>Whatsapp</MenubarItem></Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <Button>Delete My Account </Button>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        

      </Menubar>
    )
  }
  