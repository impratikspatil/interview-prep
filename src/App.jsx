import './index.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopicPage from './components/TopicPage'
import CompanyPage from './components/CompanyPage'
import ResumePage from './components/ResumePage'
import Dashboard from './components/Dashboard'

export default function App() {
  const [activeTopic, setActiveTopic] = useState(null)

  const renderMain = () => {
    if (!activeTopic) return <Dashboard onSelectTopic={setActiveTopic} />
    if (activeTopic.id === 'resume') return <ResumePage />
    if (activeTopic.sectionId === 'interview-prep') return <CompanyPage company={activeTopic} />
    return <TopicPage topic={activeTopic} />
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#0d0d0f' }}>
      <Sidebar activeTopic={activeTopic} onSelectTopic={setActiveTopic} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {renderMain()}
      </main>
    </div>
  )
}