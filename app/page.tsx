import Main from "@/components/Main";
import Profile from "@/components/Profile";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Profile />
      <Main />
    </>
  );
}
