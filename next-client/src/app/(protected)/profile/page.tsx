import Link from "next/link";

const ProfilePage = () => {
  return (
    <>
      <h2>This is protected profile page</h2>
      <Link
                  href="/settings"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Settings
                </Link>
    </>
  );
};

export default ProfilePage;
