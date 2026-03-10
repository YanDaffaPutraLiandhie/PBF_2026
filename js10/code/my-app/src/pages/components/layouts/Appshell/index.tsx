import Navbar from "../navbar";
import {useRouter} from "next/router";

const disabeNavbar = ['/auth/login', '/auth/register'];

type AppShellProps = {
  children: React.ReactNode;
};


const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!disabeNavbar.includes(pathname) && <Navbar />}
      {children}

      <div>footer</div>
    </main>
  );
};

export default AppShell;
