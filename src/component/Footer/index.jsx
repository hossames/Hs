import { Logo , Link } from "../../exporter"
export const Footer = () => {
  return (
    <footer className="p-2 text-center text-gray-500 font-semibold text-xl bg-white flex justify-between items-center"style={{
      boxShadow:'1px 1px 10px rgb(0,0,0)'
    }}>
      <Link to={'/'}><Logo width={"43px"} height={"60px"} className={""} /></Link>
      All rights reserved &copy; 2024
    </footer>
  )
}
