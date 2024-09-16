'use client';
import Link from "next/link";

const ProfilePage = () => {
  return (
    <>
      <Link href="/settings" className="text-sm text-blue-500 hover:underline">
        User Profile
      </Link>
    </>
  );
};

export default ProfilePage;
