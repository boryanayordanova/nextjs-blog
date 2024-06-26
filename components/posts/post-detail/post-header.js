import Image from "next/image";
import clases from "./post-header.module.css";
export default function PostHeader({ title, image }) {
  return (
    <header className={clases.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={300} height={300} />
    </header>
  );
}
