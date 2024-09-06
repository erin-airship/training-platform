import { CircleUser, Package2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { getUser } from '@/utils/actions';
import NavbarLogoutButton from './NavbarLogoutButton';

const Navbar = async () => {
  const { user } = await getUser();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {user ? (
          <>
            <Link
              href="/dashboard"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/my-courses"
              className="text-foreground transition-colors hover:text-foreground"
            >
              My Courses
            </Link>
            <Link
              href="/courses"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Courses
            </Link>
          </>
        ) : (
          <>
            <Link
              href="signin"
              className="text-foreground min-w-20 transition-colors hover:text-foreground"
            >
              Sign In
            </Link>
          </>
        )}
      </nav>
      {user ? (
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings">Account</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <NavbarLogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;