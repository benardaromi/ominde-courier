import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

  import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
  
  

  export default function NavBar({ photoURL }) {
    return (
        <div className="flex w-full justify-around p-1.5 fixed top-0 left-0 z-50 bg-orange-200 shadow-sm shadow-orange-100 items-center opacity-90">
            <h1 className="font-extrabold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">Express Ship</h1>
            <NavMenu />
            <Avatar>
                <AvatarImage src={photoURL} alt="profile photo" />
                <AvatarFallback>?</AvatarFallback>
            </Avatar>
            
        </div>
    )
}

 function NavMenu() {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Express Ship
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      We deliver water right to your doorstep, with the ability to track
                      your order!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Order">
                  Request delivery to your current address.
                </ListItem>
                <ListItem href="/about" title="About Us">
                  About the Express app.
                </ListItem>
                <ListItem href="/about/mission" title="Our Mission">
                  our mission statement.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }

  const ListItem = (({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
  
  