import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Alcance digital extremamente qualificado",
  "Visibilidade estratégica em nichos de alto padrão",
  "Critérios claros de publicação",
  "Atendimento personalizado via WhatsApp",
  "Aprovação prévia e curadoria de material",
  "Layout limpo que valoriza o conteúdo"
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-y border-neutral-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              O que você contrata <br />
              <span className="italic text-gold-500">ao anunciar</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              Investir no Sexysymbol é investir na sua marca pessoal. Oferecemos a infraestrutura necessária para que seu perfil se destaque pela qualidade, não pelo excesso.
            </p>
          </motion.div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-neutral-900/50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-neutral-200 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};