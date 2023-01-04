const Header = () => {
  const actions = [
    { to: "/login", label: "login" },
    { to: "/profile", label: "profile" },
    { to: "/settings", label: "settings" },
  ];

  return (
    <header className="flex h-12 flex-row items-center justify-between border-b border-b-neutral-700 px-5 uppercase text-neutral-300">
      <span className="font-black">chamber</span>
      <div className="space-x-4 font-bold tracking-tight">
        {actions.map((action) => {
          return (
            <a href={action.to} key={action.label}>
              {action.label}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
