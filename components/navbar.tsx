"use client";

import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { login, logout, ready, authenticated, user } = usePrivy();

  return (
    <nav className="w-full flex justify-between items-center py-2">
      <div className="text-2xl font-bold">Segugio</div>
      <div className="flex items-center gap-4">
        {authenticated && ready ? (
          <>
            <p>
              {user?.email?.address
                ? `Logged in as ${user?.email?.address || ""}`
                : ""}
            </p>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button onClick={login}>Login</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
