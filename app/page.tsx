import Profile from "@/components/Profile";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container grid gap-8">
      <Profile />
      <Main />
    </div>
  );
}
