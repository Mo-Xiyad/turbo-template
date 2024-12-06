// AuthShowcase.tsx
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function AuthShowcase() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center">
        <SignInButton>
          <button className="btn-primary">Sign in</button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {user.fullName}</span>
      </p>
      <SignOutButton>
        <button className="btn-secondary">Sign out</button>
      </SignOutButton>
    </div>
  );
}
