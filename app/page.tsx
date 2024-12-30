import { EnvVarWarning } from "@/components/env-var-warning";
import Hero from "@/components/hero";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Image from "next/image";
import Link from "next/link";
import HeaderAuth from "@/components/header-auth";



export default async function Home() {
  return (
    <>
    <nav className="fixed top-0 w-full flex justify-center h-20 bg-darkBlue z-10 shadow-md">
            <div className="w-full max-w-5xl flex justify-between items-center text-sm p-3 px-5">
              <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"}>
                <Image
                  src="/images/FostrLogo.png"
                  alt="logo"
                  width={150}
                  height={50}
                  className="mt-2"
                />
                </Link>
              </div>
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
    </nav>
      
      <main className="flex-1 flex flex-col gap-6 px-4">
    
      </main>
      <footer className=" fixed bottom-0 w-full flex items-center justify-center text-center text-xs gap-4 p-8 sm:gap-8 sm:py-16">
         <p className="text-darkBlue">Some footer content here.</p>
                
      </footer>
    </>
  );
}
