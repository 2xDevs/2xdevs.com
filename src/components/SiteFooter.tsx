import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="border-t px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} 2xDevs
        </p>
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="mailto:contact@2xdevs.com"
            className="text-muted-foreground hover:text-foreground"
          >
            Support
          </Link>
          <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
          <Link
            href="/privacy-policy"
            className="text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
          <Link
            href="/terms-and-conditions"
            className="text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export { SiteFooter };
