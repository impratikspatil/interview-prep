import './index.css'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopicPage from './components/TopicPage'
import Dashboard from './components/Dashboard'

export default function App() {
  const [activeTopic, setActiveTopic] = useState(null)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#0d0d0f' }}>
      <Sidebar activeTopic={activeTopic} onSelectTopic={setActiveTopic} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {activeTopic
          ? <TopicPage topic={activeTopic} />
          : <Dashboard onSelectTopic={setActiveTopic} />
        }
      </main>
    </div>
  )
}