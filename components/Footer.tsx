import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';


const Footer = () => {

  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400">
      <div>Created by Jehanne Hodge</div>
      <div className="text-3xl text-slate-300 flex justify-center gap-2  mt-2">
      <Link href="https://www.linkedin.com/in/jehanne-hodge-8657251b3/">
        <a><FaLinkedin /></a>
      </Link>
      <Link href="https://github.com/JehanneH">
        <a><FaGithub /></a>
      </Link>
      <Link href="https://www.canva.com/design/DAECeK-dAJ0/QDBrJSeb_zlnDxHSnK_b6g/edit?category=tACZCki4tbY">
        <a><ImProfile /></a>
      </Link>
     
     
      </div>
    </div>
  );
}

export default Footer;