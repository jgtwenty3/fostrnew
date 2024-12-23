import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-80 max-w-64 mx-auto shadow-fostrBlue shadow-lg px-3 py-3 rounded-lg">
        <h1 className="text-2xl font-medium text-darkBlue">Sign up</h1>
        <p className="text-sm text-fostrBlue text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 text-fostrBlue">
          <Label htmlFor="first_name ">First Name</Label>
          <Input name="first_name" placeholder="First Name" required />
          <Label htmlFor="last_name">Last Name</Label>
          <Input name="last_name" placeholder="Last Name" required />
          <Label htmlFor="role">Role</Label>
          <select name="role" required className="bg-darkBlue text-white">
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="shelterStaff">Shelter Staff</option>
            <option value="user">User</option>
          </select>
          <Label htmlFor="phone">Phone</Label>
          <Input name="phone" placeholder="555-555-5555" required />
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          
          <SubmitButton formAction={signUpAction} pendingText="Signing up..." className="border-2 border-fostrBlue">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}
