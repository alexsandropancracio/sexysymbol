import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { BadgeCheck } from 'lucide-react';

export const Verification: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-b border-neutral-900">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-8 text-gold-500"
          >
            <BadgeCheck size={80} strokeWidth={1.5} />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Selo Sexysymbol <span className="text-gold-500">Verificada</span>
          </h2>
          
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            O selo de verificação confere credibilidade ao seu perfil. Ele atesta que a administração validou sua identidade através de documentos e confirmação visual (foto/vídeo de rosto).
          </p>

          <div className="bg-neutral-900/50 px-6 py-4 rounded border border-neutral-800">
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              Nota: O selo confirma a identidade, não garante conduta pessoal.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};