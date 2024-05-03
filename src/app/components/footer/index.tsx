import Link from "next/link";

export default function Footer(){
  return(
    <footer className="flex justify-around items-center p-4 bg-base-black-500 border-t border-[#8a5dd2]">
      <p className="">Jonatan Marques</p>
      <ul className="flex gap-4">
        <li className=""><Link href='https://www.linkedin.com/in/jonatanmds/'>LinkedIn</Link></li>
        <li className=""><Link href='https://github.com/JonatanMds'>GitHub</Link></li>
      </ul>
    </footer>
  )
}