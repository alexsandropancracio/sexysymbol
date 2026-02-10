import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-neutral-900">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 text-center">
            Pronta para anunciar?
          </h2>
          <p className="text-neutral-400 mb-10 text-center max-w-lg">
            Entre em contato diretamente com nossa administração. 
            Análise personalizada e atendimento sigiloso.
          </p>

          <motion.a
            href="https://wa.me/5511956197970"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-black font-semibold text-lg rounded-sm hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(201,162,77,0.3)] hover:shadow-[0_0_30px_rgba(201,162,77,0.5)]"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Falar com a Administração no WhatsApp</span>
            <div className="absolute inset-0 border border-white/20 rounded-sm" />
          </motion.a>

          <div className="mt-20 pt-8 border-t border-neutral-900 w-full text-center">
             <p className="text-neutral-600 text-sm">
               © {new Date().getFullYear()} Sexysymbol. Todos os direitos reservados. 
               Conteúdo destinado a maiores de 18 anos.
             </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};