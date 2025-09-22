import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const specialties = [
    {
      title: "Информационные технологии",
      description: "Программирование, веб-разработка, системное администрирование",
      duration: "3 года 10 месяцев",
      subjects: ["Программирование", "Базы данных", "Веб-технологии", "Сетевое администрирование"],
      icon: "Code"
    },
    {
      title: "Экономика и бухгалтерский учет",
      description: "Финансовый учет, экономический анализ, налогообложение",
      duration: "2 года 10 месяцев",
      subjects: ["Бухгалтерский учет", "Налогообложение", "Экономика", "Финансы"],
      icon: "Calculator"
    },
    {
      title: "Строительство и эксплуатация зданий",
      description: "Проектирование, строительные технологии, контроль качества",
      duration: "3 года 10 месяцев",
      subjects: ["Строительные материалы", "Проектирование", "Технология строительства", "Геодезия"],
      icon: "Building"
    },
    {
      title: "Автомобильный транспорт",
      description: "Техническое обслуживание, ремонт автомобилей, диагностика",
      duration: "3 года 10 месяцев",
      subjects: ["Двигатели", "Электрооборудование", "Диагностика", "Ремонт"],
      icon: "Car"
    }
  ];

  const schedule = [
    { time: "8:30-10:00", group: "ИТ-21", subject: "Программирование", room: "201" },
    { time: "10:15-11:45", group: "ЭК-22", subject: "Экономика", room: "305" },
    { time: "12:00-13:30", group: "СТ-21", subject: "Строительные материалы", room: "102" },
    { time: "13:45-15:15", group: "АТ-22", subject: "Двигатели", room: "мастерская" },
    { time: "15:30-17:00", group: "ИТ-22", subject: "Базы данных", room: "201" },
  ];

  const teachers = [
    {
      name: "Иванов Алексей Петрович",
      position: "Преподаватель информационных технологий",
      experience: "15 лет",
      education: "КТУ, факультет ВТ"
    },
    {
      name: "Петрова Мария Сергеевна",
      position: "Преподаватель экономических дисциплин",
      experience: "12 лет",
      education: "ФЭУ, экономический факультет"
    },
    {
      name: "Сидоров Дмитрий Николаевич",
      position: "Мастер производственного обучения",
      experience: "20 лет",
      education: "СибГИУ, строительный факультет"
    }
  ];

  const filteredSchedule = selectedGroup === 'all' 
    ? schedule 
    : schedule.filter(item => item.group === selectedGroup);

  const groups = ['all', ...Array.from(new Set(schedule.map(item => item.group)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Навигация */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="GraduationCap" className="h-8 w-8 text-primary mr-3" />
              <span className="text-xl font-bold text-gray-900">Технологический Колледж</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О колледже</a>
              <a href="#specialties" className="text-gray-600 hover:text-primary transition-colors">Специальности</a>
              <a href="#schedule" className="text-gray-600 hover:text-primary transition-colors">Расписание</a>
              <a href="#teachers" className="text-gray-600 hover:text-primary transition-colors">Преподаватели</a>
              <a href="#admission" className="text-gray-600 hover:text-primary transition-colors">Поступление</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Твоё будущее начинается здесь
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Современное образование, практические навыки и перспективные специальности 
                в самом инновационном колледже города
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="UserPlus" className="mr-2" />
                  Подать заявление
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Play" className="mr-2" />
                  Виртуальный тур
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/api/placeholder/600/400" 
                alt="Здание колледжа" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Лет на рынке образования</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">2500+</div>
              <div className="text-gray-600">Выпускников</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-600">Специальностей</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Трудоустройство</div>
            </div>
          </div>
        </div>
      </section>

      {/* О колледже */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О нашем колледже</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы готовим специалистов, которые завтра будут определять развитие технологий и экономики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытные преподаватели</h3>
              <p className="text-gray-600">Наши преподаватели - это практики с многолетним опытом работы в индустрии</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Современное оборудование</h3>
              <p className="text-gray-600">Лаборатории и мастерские оснащены новейшим профессиональным оборудованием</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокие результаты</h3>
              <p className="text-gray-600">Наши студенты регулярно занимают призовые места в профессиональных конкурсах</p>
            </div>
          </div>
        </div>
      </section>

      {/* Специальности */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши специальности</h2>
            <p className="text-xl text-gray-600">Выберите направление, которое откроет двери в успешную карьеру</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={specialty.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{specialty.title}</h3>
                    <p className="text-gray-600">{specialty.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                <div className="flex flex-wrap gap-2">
                  {specialty.subjects.map((subject, idx) => (
                    <span key={idx} className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
            <p className="text-xl text-gray-600">Актуальное расписание на сегодня</p>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {groups.map(group => (
              <Button
                key={group}
                variant={selectedGroup === group ? "default" : "outline"}
                onClick={() => setSelectedGroup(group)}
                className="mb-2"
              >
                {group === 'all' ? 'Все группы' : group}
              </Button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Время</th>
                    <th className="px-6 py-3 text-left">Группа</th>
                    <th className="px-6 py-3 text-left">Предмет</th>
                    <th className="px-6 py-3 text-left">Аудитория</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-6 py-4 font-medium">{item.time}</td>
                      <td className="px-6 py-4">{item.group}</td>
                      <td className="px-6 py-4">{item.subject}</td>
                      <td className="px-6 py-4">{item.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Преподаватели */}
      <section id="teachers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши преподаватели</h2>
            <p className="text-xl text-gray-600">Профессионалы своего дела с богатым опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center animate-fade-in">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{teacher.name}</h3>
                <p className="text-primary font-medium mb-2">{teacher.position}</p>
                <p className="text-gray-600 text-sm mb-1">Опыт работы: {teacher.experience}</p>
                <p className="text-gray-600 text-sm">{teacher.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Поступление */}
      <section id="admission" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Поступление</h2>
            <p className="text-xl text-blue-100">Начни свой путь к успешной карьере уже сегодня</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Необходимые документы:</h3>
              <ul className="space-y-3">
                {[
                  "Аттестат об основном общем образовании",
                  "Паспорт и копия",
                  "6 фотографий 3×4",
                  "Медицинская справка (форма 086-у)",
                  "Заявление о приеме"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Icon name="CheckCircle" className="mr-3 text-green-400" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-3" size={20} />
                  <span>ул. Студенческая, 15, г. Новосибирск</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3" size={20} />
                  <span>+7 (383) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-3" size={20} />
                  <span>info@techcollege.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-3" size={20} />
                  <span>Пн-Пт: 8:00-17:00</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-white text-primary hover:bg-gray-100">
                <Icon name="MessageCircle" className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="GraduationCap" className="h-8 w-8 text-primary mr-3" />
                <span className="text-xl font-bold">Технологический Колледж</span>
              </div>
              <p className="text-gray-400">
                Качественное профессиональное образование для успешного будущего
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Специальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Библиотека</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Студентам</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Электронный дневник</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стипендии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Общежитие</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Спорт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>ул. Студенческая, 15</p>
                <p>г. Новосибирск, 630000</p>
                <p>+7 (383) 123-45-67</p>
                <p>info@techcollege.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Технологический Колледж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;