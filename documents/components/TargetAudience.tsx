import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { Gem, TrendingUp, ShieldCheck, UserCheck, Briefcase } from 'lucide-react';

const cards = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Posicionamento Sério",
    desc: "Para quem encara o anúncio como uma extensão profissional de sua carreira."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Alcance Qualificado",
    desc: "Acesso a um público que valoriza a elegância e respeita limites."
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Imagem como Patrimônio",
    desc: "Você cuida da sua estética e apresentação com rigor e excelência."
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Autonomia Total",
    desc: "Controle absoluto sobre sua agenda, valores e interações."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Ambiente Seguro",
    desc: "Uma plataforma organizada que prioriza a segurança de dados."
  }
];

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <Container>
        <SectionTitle title="Para quem é o Sexysymbol" subtitle="true" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-neutral-900 p-8 border border-neutral-800 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <div className="mb-6 text-neutral-400 group-hover:text-gold-500 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-4">{card.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};