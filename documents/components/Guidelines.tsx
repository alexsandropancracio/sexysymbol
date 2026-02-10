import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { XCircle } from 'lucide-react';

const prohibitions = [
  "Símbolos religiosos, militares ou políticos",
  "Locais públicos ou impróprios para o contexto",
  "Animais ou presença de terceiros (clientes)",
  "Temática infantil ou sugestiva a menores",
  "Fotos com baixa resolução ou iluminação precária",
  "Uso de entorpecentes ou armas"
];

export const Guidelines: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 text-neutral-200">
      <Container>
        <SectionTitle title="Diretrizes para Publicação" subtitle="true" />
        
        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-xl p-8 md:p-12 border border-neutral-800 shadow-2xl">
          <p className="text-center mb-10 text-neutral-400">
            Para manter o padrão de excelência, algumas regras são inegociáveis. A violação destas diretrizes impede a veiculação do anúncio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prohibitions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 text-sm md:text-base border-l-2 border-red-900/50 pl-4 py-2"
              >
                <XCircle className="w-5 h-5 text-red-800/70" />
                <span className="text-neutral-300">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-neutral-800 text-center">
            <span className="text-gold-500 text-sm tracking-widest uppercase font-semibold">
              Padrão Mínimo de Qualidade Exigido
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};