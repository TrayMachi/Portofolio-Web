import Magnetic from "../utils/magnetic";
import Link from "next/link";
import { useLenis, ReactLenis } from "@studio-freight/react-lenis";

const ScrollLink: React.FC<{
  href: string;
  children: any;
  target?: string;
}> = ({ href, children, target }) => {
  const lenis = useLenis(() => {});
  const handleClick = () => {
    lenis.scrollTo(href, { duration: 3 });
  };
  return (
    <ReactLenis root>
      <Magnetic>
        <Link
          href={href}
          onClick={handleClick}
          className="hover:text-[#c9d6d6]"
          target={target}
        >
          {children}
        </Link>
      </Magnetic>
    </ReactLenis>
  );
};

export default ScrollLink;
