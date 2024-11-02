const SiteFooter = () => {
  return (
    <footer className="border-t py-6 md:px-8">
      <div className="mx-auto flex max-w-screen-2xl justify-between">
        <p>@2024 2xDevs</p>
        <div className="flex items-center gap-2">
          <p>Support</p>
          <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
          <p>Privacy</p>
          <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
