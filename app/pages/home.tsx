import { BackgroundBeamsWithCollision } from "../components/ui/background";
import { Menu } from "../components/ui/navbar-menu";
import ShinyButton from "../components/ui/shiny-button";

export default function Home() {
  function setActiveItem(item: string | null): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <BackgroundBeamsWithCollision
        children={<ShinyButton>Download Resume</ShinyButton>}
      />
    </>
  );
}
