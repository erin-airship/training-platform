'use client';
import { logout } from '@/utils/actions';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { useRouter } from 'next/navigation';

const NavbarLogoutButton = () => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={() => {
        logout();
        router.refresh();
      }}
    >
      Logout
    </DropdownMenuItem>
  );
};

export default NavbarLogoutButton;