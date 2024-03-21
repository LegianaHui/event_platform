import { SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.svg"}
            width={128}
            height={38}
            alt="Evently Logo"
          />
        </Link>

        {/* 登入後顯示的Nav內容 */}
        {/* Shadcn-ui */}
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          {/* 登入後顯示的Nav(mobile)內容 */}
          <div className="flex items-center gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
          </div>

          {/* 未登入時顯示的內容 */}
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
