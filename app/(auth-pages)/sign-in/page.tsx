import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="">
      <form className="flex flex-col min-w-80 px-3 py-3 rounded-lg bg-lightBlue shadow-lg shadow-fostrBlue sm:flex-1 sm:items-center ">
      <h1 className="text-2xl font-medium text-darkBlue sm:text-center">Sign in</h1>
      <p className="text-sm text-foreground text-fostrBlue sm:text-center">
        Don't have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 mt-8 text-fostrBlue [&>input]:mb-3">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction} className="border-2 border-fostrBlue">
          Sign in
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>

    </div>
    
  );
}
