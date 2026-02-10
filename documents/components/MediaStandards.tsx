import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Camera, Video, ImagePlus } from 'lucide-react';

export const MediaStandards: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <Container>
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
             <h2 className="font-serif text-4xl text-white mb-6">Padrão de <br/><span className="text-gold-500">Fotos e Vídeos</span></h2>
             <p className="text-neutral-400 leading-relaxed mb-8">
               A qualidade do material visual é o principal fator de conversão. Aceitamos fotos caseiras, desde que bem iluminadas, nítidas e produzidas com cuidado.
             </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-neutral-900 p-8 rounded-sm border-t-2 border-gold-500"
            >
              <ImagePlus className="w-8 h-8 text-gold-500 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Quantidade</h3>
              <p className="text-neutral-400 text-sm">
                Mínimo de 10 fotos.<br/>
                Máximo de 20 fotos.<br/>
                Variedade de ângulos e produções.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-neutral-900 p-8 rounded-sm border-t-2 border-neutral-700"
            >
              <Camera className="w-8 h-8 text-neutral-300 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Estilo</h3>
              <p className="text-neutral-400 text-sm">
                Fotos profissionais são bem-vindas, mas selfies de alta qualidade ("caseiras premium") geram excelente conexão.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-neutral-900 p-8 rounded-sm border-t-2 border-neutral-700 sm:col-span-2"
            >
              <Video className="w-8 h-8 text-neutral-300 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">Vídeos</h3>
              <p className="text-neutral-400 text-sm">
                Vídeos curtos (até 15s) são permitidos no formato vertical. 
                Devem focar na naturalidade e beleza, sem conteúdo sexualmente explícito.
              </p>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};