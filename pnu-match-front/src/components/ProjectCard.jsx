import { useState } from 'react'

function ProjectCard({ title, description, tags, teamLead }) {
  const [applied, setApplied] = useState(false)

  const handleApply = () => {
    setApplied(true)
    alert(`Ви успішно відгукнулися на проєкт: "${title}"! Тімлід ${teamLead} отримає сповіщення.`)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between h-full transition hover:shadow-lg">
      <div>
        <h3 className="text-xl font-bold text-blue-700 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <span>👤</span> Тімлід: <span className="font-medium text-gray-700">{teamLead}</span>
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        
        {/* Теги технологій */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button 
        onClick={handleApply}
        disabled={applied}
        className={`w-full py-2.5 font-bold rounded-lg transition duration-200 ${
          applied 
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow'
        }`}
      >
        {applied ? '✓ Ви відгукнулися' : 'Відгукнутися на проєкт'}
      </button>
    </div>
  )
}

export default ProjectCard
