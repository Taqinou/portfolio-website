// src/components/ContactSection.tsx

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 text-center">
      <h2 className="text-3xl font-semibold mb-6">Me contacter</h2>

      <p className="text-gray-300 mb-8">
        Pour toute question, collaboration ou demande :  
        <br /> → N’hésite pas à me contacter !
      </p>

      <div className="flex justify-center gap-6">
        <a className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl" href="mailto:tonmail@mail.com">
          Email
        </a>
        <a className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl" href="https://github.com/">
          GitHub
        </a>
        <a className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl" href="https://linkedin.com/">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
