import Link from "next/link"

type ButtonProps = {
  label: string
  linkToPage: string
  onClick?: ()=>void
  idGame: string
}

export default function Button({label, onClick, linkToPage, idGame}:ButtonProps){
  return(
    <Link href={
      {
        pathname:linkToPage,
        query:{idGame}
      }
      }>
      <button 
        className="rounded bg-[#8a5dd2] p-2 text-sm"
        onClick={onClick}
      >{label}</button>
    </Link>
  )
}