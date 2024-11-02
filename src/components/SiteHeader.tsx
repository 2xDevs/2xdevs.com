import { MainNav } from "@/components/MainNav";
import { MobileNav } from "@/components/MobileNav";

const SiteHeader = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-center px-3 lg:justify-normal">
          <MainNav />
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export { SiteHeader };
