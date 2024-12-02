import Image from "next/image"
import styles from "@/styles/Professores.module.css"

interface cardProfessoresProps {
  image: string,
  nome: string,
  descricao: string
}

export default function ProfessorCard({ image, nome, descricao }: cardProfessoresProps) {
  return (
    <div className={styles.card}>
        <Image className={styles.image_professor}
          src={image}
          alt={`Foto de ${nome}`}
          width={150}
          height={150}
        />
        <h3 className={styles.nome}>{nome}</h3>
        <p className={styles.descricao}>{descricao}</p>
    </div>
  );
}