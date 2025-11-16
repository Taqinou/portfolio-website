// src/components/ProjectCard.tsx
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: Props) {
  return (
    <Link href={link}>
      <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl p-5 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover h-48 w-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <h3 className="text-2xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </Link>
  );
}
