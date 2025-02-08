import Image from "next/image";
import styles from "@/styles/Header.module.css"
function Header() {
  return (
    <div className={styles.header}>
      <Image
        src="/images/Mambee-logoV2.png"
        width={130}
        height={70}
        alt="Logo da Mambee"
      />
    </div>
  );
}

export default Header;