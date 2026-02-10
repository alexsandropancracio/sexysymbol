import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';

export const Essence: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="font-serif text-2xl md:text-4xl italic text-neutral-300 leading-relaxed">
              "A verdadeira elegância não é sobre ser notada, é sobre ser lembrada. 
              No Sexysymbol, criamos o palco para que sua presença seja inesquecível."
            </h3>
            
            <div className="mt-12 flex justify-center space-x-8 text-xs md:text-sm font-medium tracking-[0.2em] text-gold-600 uppercase">
              <span>Confiança</span>
              <span>•</span>
              <span>Liberdade</span>
              <span>•</span>
              <span>Privacidade</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};