import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const navigation = [
  { name: 'Главная', href: '#home', current: true },
  { name: 'Абитуриентам', href: '#applicants', current: false },
  { name: 'Специальности', href: '#specialties', current: false },
  { name: 'Студентам', href: '#students', current: false },
  { name: 'Преподаватели', href: '#teachers', current: false },
  { name: 'Контакты', href: '#contacts', current: false },
]

const specialties = [
  {
    id: 1,
    title: 'Информационные технологии',
    description: 'Разработка программного обеспечения, системное администрирование, кибербезопасность',
    duration: '3 года 10 месяцев',
    icon: 'Monitor',
    subjects: ['Программирование', 'Базы данных', 'Сети', 'Информационная безопасность']
  },
  {
    id: 2,
    title: 'Экономика и управление',
    description: 'Бухгалтерский учет, финансы, менеджмент, маркетинг',
    duration: '2 года 10 месяцев',
    icon: 'TrendingUp',
    subjects: ['Экономическая теория', 'Бухучет', 'Менеджмент', 'Маркетинг']
  },
  {
    id: 3,
    title: 'Дизайн и графика',
    description: 'Веб-дизайн, графический дизайн, мультимедиа технологии',
    duration: '3 года 10 месяцев',
    icon: 'Palette',
    subjects: ['Композиция', 'Цветоведение', 'Веб-дизайн', '3D-моделирование']
  }
]

const scheduleData = [
  {
    time: '09:00-10:30',
    monday: { subject: 'Программирование', teacher: 'Иванов А.А.', room: '201', group: 'ИТ-21' },
    tuesday: { subject: 'Математика', teacher: 'Петрова М.С.', room: '105', group: 'ИТ-21' },
    wednesday: { subject: 'Английский язык', teacher: 'Сидорова Л.В.', room: '301', group: 'ИТ-21' },
    thursday: { subject: 'Базы данных', teacher: 'Козлов В.П.', room: '202', group: 'ИТ-21' },
    friday: { subject: 'Физкультура', teacher: 'Морозов Д.И.', room: 'Спортзал', group: 'ИТ-21' }
  },
  {
    time: '10:45-12:15',
    monday: { subject: 'Веб-технологии', teacher: 'Новикова Е.А.', room: '203', group: 'ИТ-21' },
    tuesday: { subject: 'Операционные системы', teacher: 'Иванов А.А.', room: '201', group: 'ИТ-21' },
    wednesday: { subject: 'Экономика', teacher: 'Федорова Н.М.', room: '110', group: 'ИТ-21' },
    thursday: { subject: 'Сети', teacher: 'Волков С.Н.', room: '204', group: 'ИТ-21' },
    friday: { subject: 'Проектирование ИС', teacher: 'Козлов В.П.', room: '202', group: 'ИТ-21' }
  },
  {
    time: '13:00-14:30',
    monday: { subject: 'Практика', teacher: 'Иванов А.А.', room: '201', group: 'ИТ-21' },
    tuesday: { subject: 'Практика', teacher: 'Новикова Е.А.', room: '203', group: 'ИТ-21' },
    wednesday: { subject: '-', teacher: '', room: '', group: '' },
    thursday: { subject: 'Практика', teacher: 'Волков С.Н.', room: '204', group: 'ИТ-21' },
    friday: { subject: 'Консультация', teacher: 'Козлов В.П.', room: '202', group: 'ИТ-21' }
  }
]

const Index = () => {
  const [selectedGroup, setSelectedGroup] = useState('ИТ-21')
  const [activeSection, setActiveSection] = useState('home')

  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']
  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Icon name="GraduationCap" size={32} className="text-primary mr-3" />
                <h1 className="text-xl font-bold text-primary">Технологический Колледж</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.href.slice(1))}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <main>
        {activeSection === 'home' && (
          <div>
            {/* Hero секция */}
            <div className="relative bg-primary text-white overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/img/1cbc2c79-228b-4bfa-bdfb-8fb4f9f226e2.jpg"
                  alt="College building"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Добро пожаловать в
                    <br />
                    Технологический Колледж
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                    Современное образование для успешного будущего. 
                    Качественная подготовка специалистов в области IT, экономики и дизайна.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-white text-primary hover:bg-gray-100 border-white"
                      onClick={() => setActiveSection('applicants')}
                    >
                      <Icon name="FileText" size={20} className="mr-2" />
                      Подать документы
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-white border-white hover:bg-white hover:text-primary"
                      onClick={() => setActiveSection('specialties')}
                    >
                      <Icon name="BookOpen" size={20} className="mr-2" />
                      Специальности
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Преимущества */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
                  <p className="text-lg text-gray-600">Современный подход к образованию</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center animate-scale-in">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Опытные преподаватели</h3>
                    <p className="text-gray-600">Практикующие специалисты с многолетним опытом работы</p>
                  </div>
                  <div className="text-center animate-scale-in">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Laptop" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Современное оборудование</h3>
                    <p className="text-gray-600">Новейшие компьютерные классы и лаборатории</p>
                  </div>
                  <div className="text-center animate-scale-in">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">100% трудоустройство</h3>
                    <p className="text-gray-600">Гарантированная помощь в поиске работы после выпуска</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Специальности */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши специальности</h2>
                  <p className="text-lg text-gray-600">Выберите направление для своего профессионального развития</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {specialties.map((specialty) => (
                    <Card key={specialty.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            <Icon name={specialty.icon as any} size={24} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{specialty.title}</CardTitle>
                            <Badge variant="outline" className="mt-1">
                              {specialty.duration}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription>{specialty.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-gray-900">Основные предметы:</h4>
                          <div className="flex flex-wrap gap-1">
                            {specialty.subjects.map((subject, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'students' && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
                <p className="text-lg text-gray-600">Интерактивное расписание для студентов и преподавателей</p>
              </div>

              {/* Фильтр по группам */}
              <div className="mb-8 flex justify-center">
                <Tabs value={selectedGroup} onValueChange={setSelectedGroup} className="w-full max-w-md">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="ИТ-21">ИТ-21</TabsTrigger>
                    <TabsTrigger value="ЭК-22">ЭК-22</TabsTrigger>
                    <TabsTrigger value="ДЗ-21">ДЗ-21</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Расписание */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" size={24} className="mr-2 text-primary" />
                    Расписание группы {selectedGroup}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Время</th>
                          {days.map((day) => (
                            <th key={day} className="text-left py-3 px-4 font-semibold text-gray-700 min-w-[200px]">
                              {day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {scheduleData.map((timeSlot, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-4 font-medium text-primary">{timeSlot.time}</td>
                            {dayKeys.map((dayKey) => {
                              const lesson = timeSlot[dayKey as keyof typeof timeSlot] as any
                              return (
                                <td key={dayKey} className="py-4 px-4">
                                  {lesson.subject && lesson.subject !== '-' ? (
                                    <div className="space-y-1">
                                      <div className="font-medium text-gray-900">{lesson.subject}</div>
                                      <div className="text-sm text-gray-600">{lesson.teacher}</div>
                                      <div className="text-xs text-gray-500 flex items-center">
                                        <Icon name="MapPin" size={12} className="mr-1" />
                                        {lesson.room}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="text-gray-400 text-center">—</div>
                                  )}
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Дополнительная информация */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={20} className="mr-2 text-primary" />
                      Расписание звонков
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>1 пара</span>
                        <span className="font-medium">09:00 — 10:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2 пара</span>
                        <span className="font-medium">10:45 — 12:15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3 пара</span>
                        <span className="font-medium">13:00 — 14:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>4 пара</span>
                        <span className="font-medium">14:45 — 16:15</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Bell" size={20} className="mr-2 text-primary" />
                      Важные объявления
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-blue-900">Изменение в расписании</div>
                        <div className="text-sm text-blue-700">25 сентября занятия по программированию переносятся в аудиторию 205</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="font-medium text-green-900">День открытых дверей</div>
                        <div className="text-sm text-green-700">30 сентября в 14:00 приглашаем будущих студентов</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Другие разделы */}
        {activeSection === 'applicants' && (
          <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Информация для абитуриентов</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Документы для поступления</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Аттестат об основном общем образовании</li>
                      <li>• Паспорт (копия)</li>
                      <li>• 4 фотографии 3×4</li>
                      <li>• Медицинская справка</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Сроки подачи документов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium">Очная форма обучения</div>
                        <div className="text-gray-600">с 20 июня по 15 августа</div>
                      </div>
                      <div>
                        <div className="font-medium">Заочная форма обучения</div>
                        <div className="text-gray-600">с 20 июня по 30 августа</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'specialties' && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Наши специальности</h2>
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {specialties.map((specialty) => (
                  <Card key={specialty.id} className="animate-fade-in">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                          <Icon name={specialty.icon as any} size={32} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{specialty.title}</CardTitle>
                          <Badge variant="outline" className="mb-4">
                            {specialty.duration}
                          </Badge>
                          <CardDescription className="text-base">{specialty.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Основные предметы:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {specialty.subjects.map((subject, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Icon name="CheckCircle" size={16} className="text-green-500" />
                                <span className="text-gray-700">{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <Button onClick={() => setActiveSection('applicants')}>
                            Подать документы
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'teachers' && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Наши преподаватели</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'Иванов Александр Анатольевич', subject: 'Программирование', experience: '15 лет', degree: 'Кандидат технических наук' },
                  { name: 'Петрова Мария Сергеевна', subject: 'Математика', experience: '12 лет', degree: 'Магистр математики' },
                  { name: 'Новикова Елена Андреевна', subject: 'Веб-технологии', experience: '8 лет', degree: 'Магистр информатики' }
                ].map((teacher, index) => (
                  <Card key={index} className="animate-fade-in">
                    <CardHeader>
                      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="User" size={40} className="text-primary" />
                      </div>
                      <CardTitle className="text-center">{teacher.name}</CardTitle>
                      <CardDescription className="text-center">{teacher.subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <div className="text-sm text-gray-600">Стаж: {teacher.experience}</div>
                      <div className="text-sm text-gray-600">{teacher.degree}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="MapPin" size={20} className="mr-3 text-primary" />
                      <span>г. Москва, ул. Технологическая, д. 15</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" size={20} className="mr-3 text-primary" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Mail" size={20} className="mr-3 text-primary" />
                      <span>info@techcollege.edu</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Приёмная комиссия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-medium">Режим работы:</div>
                      <div className="text-gray-600">Пн-Пт: 9:00 — 18:00</div>
                      <div className="text-gray-600">Сб: 9:00 — 15:00</div>
                    </div>
                    <div>
                      <div className="font-medium">Телефон:</div>
                      <div className="text-gray-600">+7 (495) 123-45-68</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Футер */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="GraduationCap" size={32} className="text-blue-300 mr-3" />
                <h3 className="text-xl font-bold">Технологический Колледж</h3>
              </div>
              <p className="text-gray-300">Современное образование для успешного будущего</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveSection('home')}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  О колледже
                </button>
                <button 
                  onClick={() => setActiveSection('specialties')}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Специальности
                </button>
                <button 
                  onClick={() => setActiveSection('applicants')}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Поступление
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div>г. Москва, ул. Технологическая, д. 15</div>
                <div>+7 (495) 123-45-67</div>
                <div>info@techcollege.edu</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Технологический Колледж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index