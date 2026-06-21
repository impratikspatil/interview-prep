import { useState, useEffect } from 'react'

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('ip_progress')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem('ip_progress', JSON.stringify(progress))
  }, [progress])

  const setStatus = (topicId, status) => {
    setProgress(prev => ({ ...prev, [topicId]: status }))
  }

  const getStatus = (topicId) => progress[topicId] || 'not-started'

  const getStats = (topics) => {
    const done = topics.filter(t => progress[t.id] === 'done').length
    const inProgress = topics.filter(t => progress[t.id] === 'in-progress').length
    return { done, inProgress, total: topics.length }
  }

  return { setStatus, getStatus, getStats }
}