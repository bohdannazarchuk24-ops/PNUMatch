import StudentForm from './components/StudentForm'
import ProjectCard from './components/ProjectCard'

function App() {
  const sampleProjects = [
    {
      id: 1,
      title: "Розробка Telegram-бота для PNU",
      teamLead: "Андрій Мельник",
      description: "Шукаємо людей для автоматизації розкладу занять університету. Потрібно буде розробити зручного бота, який надсилатиме сповіщення про пари.",
      tags: ["Java", "Spring Boot", "Telegram API"]
    },
    {
      id: 2,
      title: "Платформа для Коворкінгу",
      teamLead: "Олена Кравченко",
      description: "Вебдодаток для онлайн-бронювання місць у студентському хабі ПНУ. Потрібно зверстати гарний та зручний інтерфейс користувача.",
      tags: ["React", "JavaScript", "REST API"]
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
          Платформа <span className="text-blue-600">PNU Match Team</span> 🚀
        </h1>
        
        {/* Головна сітка */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Ліва колонка: Форма реєстрації */}
          <div>
            <StudentForm />
          </div>

          {/* Права колонка: Список проєктів */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex items-center gap-2">
              <span>🔥</span> Актуальні проєкти
            </h2>
            <div className="flex flex-col gap-6">
              {sampleProjects.map(project => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  teamLead={project.teamLead}
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
