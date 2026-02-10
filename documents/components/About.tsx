import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-transparent blur-2xl opacity-30 rounded-full" />
             <SectionTitle title="Sobre o Sexysymbol" align="left" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-neutral-300 space-y-6 text-lg leading-relaxed"
          >
            <p>
              O <strong className="text-gold-400">Sexysymbol</strong> não é apenas um site de anúncios; é um ambiente digital curado para profissionais que exigem excelência.
            </p>
            <p>
              Atuamos como um marketplace de alto padrão, onde a discrição, o respeito e a segurança são os pilares fundamentais. Nossa plataforma foi desenhada para oferecer liberdade financeira consciente, conectando anunciantes selecionados a um público qualificado.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Discrição', 'Segurança', 'Qualidade', 'Respeito'].map((item, index) => (
                <span key={index} className="px-4 py-2 border border-neutral-800 rounded-full text-sm text-neutral-400 tracking-wide hover:border-gold-500/50 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};