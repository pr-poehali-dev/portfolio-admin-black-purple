import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const portfolioItems = [
    {
      id: 1,
      title: "Веб-приложение для стартапа",
      description: "Современное SPA приложение с React и TypeScript",
      category: "Веб-разработка",
      image: "/img/a715f1e5-9507-4e75-8931-9ac95e8d8225.jpg"
    },
    {
      id: 2,
      title: "Мобильное приложение",
      description: "Кроссплатформенное приложение для iOS и Android",
      category: "Мобильная разработка",
      image: "/img/c781bf0b-ff3b-48bf-864f-92c8408bc9f9.jpg"
    },
    {
      id: 3,
      title: "E-commerce платформа",
      description: "Полнофункциональный интернет-магазин с админ панелью",
      category: "Веб-разработка",
      image: "/img/0961e75b-c4d2-420c-ab46-2f43ca082ef4.jpg"
    }
  ];

  const services = [
    {
      icon: "Code",
      title: "Веб-разработка",
      description: "Создание современных веб-приложений на React, Vue, Angular"
    },
    {
      icon: "Smartphone",
      title: "Мобильная разработка",
      description: "Разработка нативных и кроссплатформенных мобильных приложений"
    },
    {
      icon: "Database",
      title: "Backend разработка",
      description: "Создание API, баз данных и серверной логики"
    },
    {
      icon: "Palette",
      title: "UI/UX дизайн",
      description: "Проектирование пользовательского интерфейса и опыта"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold">
              <span className="text-primary">Port</span>folio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Korand</h1>
            <h2 className="text-2xl md:text-3xl font-montserrat font-medium mb-8 text-muted-foreground">UI/UX Designer</h2>
            <p className="text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">
              Создаю современные веб-приложения и мобильные решения. 
              Специализируюсь на React, TypeScript и Node.js
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Обо мне
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Я Full-Stack разработчик с 5+ годами опыта создания веб-приложений 
                и мобильных решений. Работаю с современными технологиями и следую 
                лучшим практикам разработки.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Увлекаюсь созданием продуктов, которые решают реальные проблемы 
                пользователей и приносят пользу бизнесу.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <span>Москва, Россия</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Calendar" size={24} className="text-primary" />
                    <span>5+ лет опыта</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Award" size={24} className="text-primary" />
                    <span>50+ проектов</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Users" size={24} className="text-primary" />
                    <span>30+ довольных клиентов</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Мои работы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Несколько проектов, которыми я горжусь больше всего
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-t-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-montserrat font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Посмотреть
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Github" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что я могу сделать для вашего проекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Давайте работать вместе
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Готов обсудить ваш проект и найти лучшее решение
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 text-center">
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@example.com</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 text-center">
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0 text-center">
                  <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat font-semibold mb-2">Telegram</h3>
                  <p className="text-muted-foreground">@username</p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Send" size={20} className="mr-2" />
              Написать мне
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Александр. Все права защищены.
              </p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}