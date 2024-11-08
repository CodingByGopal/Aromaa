"use client"

import { NavigationOptionsModel } from "@/data/_model/navigation.options.model";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button, buttonVariants } from "./ui/button";
import { Book, Home, Search, Text } from "lucide-react";
import MobileMenu from "./mobile-menu";

const navigationOptions: NavigationOptionsModel[] = [
    {
        label: 'Home',
        path: '/',
        icon: <Home />
    },

    {
        label: 'Recipes',
        path: '/recipes',
        icon: <Book />
    },



];
const Header = () => {
    const pathname = usePathname();


    return (
        <header className='fixed top-0 left-0 w-full  bg-background  border-b border-border   z-50'>

            <section className=' container '>
                <div className=" flex  justify-between items-center gap-5  py-3">


                    <div className=" flex items-center md:gap-12">
                        <Logo />
                        <nav className="left-line pl-4 hidden md:flex items-center  font-semibold text-base">
                            {navigationOptions.map((navOption, index) => (
                                <Link className={`${pathname === navOption?.path ? ' bg-primary text-white' : ""} px-4 py-1  duration-300 transition-all relative`} href={navOption?.path} key={index}>
                                    {navOption?.label}
                                </Link>
                            ))}



                        </nav>
                    </div>
                    <div className=" md:flex hidden items-center gap-3">
                        <Link className={`${buttonVariants({ variant: "outline", size: "icon" })} `} href='/search'>

                            <Search />
                            <span className="sr-only">Search Recipe</span>
                        </Link>
                        <div >
                            <ThemeToggle />
                        </div>

                    </div>

                    <div className=" md:hidden  block">
                        <MobileMenu pathName={pathname} navigationOptions={navigationOptions} >
                            <Button variant='outline' size='icon'>
                                <Text className=" !w-5 !h-5" />
                                <span className="sr-only">Mobile Menu Button</span>
                            </Button>
                        </MobileMenu>

                    </div>

                </div>

            </section>
        </header >
    )
}

export default Header