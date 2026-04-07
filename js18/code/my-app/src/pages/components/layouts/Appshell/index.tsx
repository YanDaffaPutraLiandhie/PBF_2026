import Navbar from "../navbar";
import {useRouter} from "next/router";
import { Roboto } from "next/font/google";

const disabeNavbar = ['/auth/login', '/auth/register'];

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main className={roboto.className}>
      {!disabeNavbar.includes(pathname) && <Navbar />}
      {children}

      <div>footer</div>
    </main>
  );
};

export default AppShell;
