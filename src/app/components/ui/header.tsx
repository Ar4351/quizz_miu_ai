import { auth, signOut } from "@/auth";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { NavMenu } from "@/components/NavManu";
function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit"  className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:brightness-110 hover:scale-110 transition-all duration-300 ease-in-out font-semibold tracking-wide" >
        Sign Out
      </Button>
    </form>
  );
}

const Header = async () => {
  const session = await auth();

  return (
    <div className="fixed top-0 right-0 z-50 w-32 h-16 pr-12 pl-2 flex items-center justify-end">
      {session?.user ? (
        <div className="flex items-center gap-3">
          {session.user.name && session.user.image && (
             <DropdownMenu>
               <DropdownMenuTrigger asChild>

            <Image
              src={session.user.image}
              alt="User profile image"
              width={32}
              height={32}
              className="rounded-full"          
            />
             </DropdownMenuTrigger>
              <NavMenu />
            </DropdownMenu>
           
              )}
          <SignOut />
        </div>
      ) : (
        <Link href="/api/auth/signin">
          <Button variant="link" className="rounded-xl border bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:brightness-110 hover:scale-110 transition-all duration-300 ease-in-out font-semibold tracking-wide">
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
