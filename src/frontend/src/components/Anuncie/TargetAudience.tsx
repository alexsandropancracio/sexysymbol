import { SectionTitle } from "./ui/SectionTitle";
import {
  Section,
  Content,
  Grid,
  Card,
  Icon,
  Title,
  Description,
  Header,
} from "./TargetAudience.styles";


import {
  Gem,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  Briefcase,
} from "lucide-react";

const cards = [
  {
    icon: <Briefcase size={32} />,
    title: "Posicionamento Sério",
    desc: "Para quem encara o anúncio como uma extensão profissional de sua carreira.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Alcance Qualificado",
    desc: "Acesso a um público que valoriza a elegância e respeita limites.",
  },
  {
    icon: <Gem size={32} />,
    title: "Imagem como Patrimônio",
    desc: "Você cuida da sua estética e apresentação com rigor e excelência.",
  },
  {
    icon: <UserCheck size={32} />,
    title: "Autonomia Total",
    desc: "Controle absoluto sobre sua agenda, valores e interações.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Ambiente Seguro",
    desc: "Uma plataforma organizada que prioriza a segurança de dados.",
  },
];

export const TargetAudience = () => {
  return (
    <Section>
      <Content>
        <Header>
          <SectionTitle
            title="Para quem é o sexysymbol"
            subtitle="Perfil ideal da plataforma"
          />
        </Header>


        <Grid>
          {cards.map((card, index) => (
            <Card
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Icon>{card.icon}</Icon>
              <Title>{card.title}</Title>
              <Description>{card.desc}</Description>
            </Card>
          ))}
        </Grid>
      </Content>
    </Section>
  );
};
