import { Heart, Award, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre a ShopEasy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Somos uma empresa dedicada a conectar pequenos negócios com seus clientes, 
            oferecendo produtos de qualidade com atendimento personalizado.
          </p>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A ShopEasy nasceu da necessidade de democratizar o comércio eletrônico para 
                pequenas empresas. Acreditamos que todo negócio, independente do tamanho, 
                merece ter uma presença digital forte e profissional.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Fundada em 2024, nossa plataforma foi desenvolvida com foco na simplicidade 
                e eficiência, permitindo que empresários concentrem-se no que fazem de melhor: 
                atender seus clientes com excelência.
              </p>
              <Button onClick={() => navigate('/contato')} size="lg">
                Entre em Contato
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Globe className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa empresa e definem nossa cultura organizacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Compromisso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estamos comprometidos com o sucesso de nossos clientes e parceiros, 
                  oferecendo suporte contínuo e soluções inovadoras.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Buscamos sempre a excelência em tudo que fazemos, desde nossos produtos 
                  até o atendimento ao cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Comunidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acreditamos no poder da comunidade e trabalhamos para fortalecer 
                  os laços entre empresas e consumidores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Nossa Missão</h2>
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              "Capacitar pequenas empresas com tecnologia de ponta, proporcionando 
              ferramentas simples e eficazes para crescer no mundo digital."
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a plataforma de e-commerce preferida por pequenas empresas em todo o Brasil, 
                  reconhecida pela simplicidade, eficiência e suporte excepcional.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">Objetivo</h3>
                <p className="text-muted-foreground">
                  Democratizar o acesso ao comércio eletrônico, removendo barreiras técnicas 
                  e oferecendo soluções acessíveis para empresários de todos os perfis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Quer fazer parte da nossa história?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer no mundo digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/contato')}>
              Fale Conosco
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => navigate('/categorias')}
            >
              Ver Produtos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};