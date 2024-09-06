import Link from "next/link";

const ProfilePage = () => {
  return (
    <>
      <h2>This is settings page</h2>
      <Link
        href="/profile"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Profile
      </Link>
    </>
  );
};

export default ProfilePage;
