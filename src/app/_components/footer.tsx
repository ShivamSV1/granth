import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import VisitorCounter from "./counter";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
        <VisitorCounter/>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
