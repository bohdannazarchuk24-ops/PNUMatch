import { useState } from 'react'

function StudentForm() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('Backend')
  const [skillInput, setSkillInput] = useState('')
  const [skills, setSkills] = useState(['Java', 'Spring'])

  const handleAddSkill = (e) => {
    e.preventDefault()
    if (skillInput.trim() !== '' && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()])
      setSkillInput('')
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const studentData = { name, role, skills }
    console.log('Дані для відправки:', studentData)
    alert(`Профіль створено для: ${name}`)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span>👤</span> Реєстрація в PNU Match Team
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Поле: Ім'я */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше ім'я та прізвище:</label>
          <input 
            type="text" 
            placeholder="Наприклад, Тарас Шевченко"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Поле: Роль */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Основна роль в IT:</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="Backend">Backend Developer (Java/Spring)</option>
            <option value="Frontend">Frontend Developer (React)</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Project Manager">Project Manager (PM)</option>
            <option value="QA Engineer">QA Engineer</option>
          </select>
        </div>

        {/* Поле: Навички */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Навички (Стек технологій):</label>
          <div className="flex gap-2 mb-3">
            <input 
              type="text" 
              placeholder="Наприклад: React, Git, SQL"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button 
              onClick={handleAddSkill}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition duration-200"
            >
              + Додати
            </button>
          </div>

          {/* Список тегів */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 border border-gray-200"
              >
                {skill}
                <button 
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-red-500 hover:text-red-700 font-bold transition text-xs"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Кнопка Сабміту */}
        <button 
          type="submit" 
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-200"
        >
          Зберегти профіль
        </button>
      </form>
    </div>
  )
}

export default StudentForm
