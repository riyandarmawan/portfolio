import Profile from "@/components/Profile";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="container grid md:grid-cols-3 gap-12">
      <Profile />
      <Main />
    </div>
  );
}
