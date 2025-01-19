import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Devesh Pingle
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/deveshpingle26" target="_blank">
            <img src="/facebook.png" alt=""/>
          </a>
          <a href="https://www.instagram.com/d_y_pingle/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@deveshpingle9104" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
