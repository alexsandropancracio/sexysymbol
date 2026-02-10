import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export const Safety: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg p-1 border border-neutral-700"
        >
          <div className="bg-neutral-900 rounded p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldAlert size={200} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="p-3 bg-gold-900/20 rounded-full border border-gold-500/20 text-gold-500">
                <AlertTriangle size={32} />
              </div>
              
              <div>
                <h3 className="font-serif text-2xl text-white mb-4">Aviso de Segurança e Integridade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-neutral-400">
                  <ul className="space-y-3 list-disc list-inside marker:text-gold-500">
                    <li>Não trabalhamos com recrutadores ou agenciadores.</li>
                    <li>O contato é direto entre anunciante e plataforma.</li>
                    <li>Não aceitamos intermediários.</li>
                  </ul>
                  <ul className="space-y-3 list-disc list-inside marker:text-gold-500">
                    <li>Cuidado com golpes: não pedimos senhas bancárias.</li>
                    <li>Anúncios falsos (fake) são banidos imediatamente.</li>
                    <li>Toda solicitação passa por verificação humana.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};