// src/components/ToastCard.tsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ToastCardProps {
  message: string
  show: boolean
  onClose: () => void
  type?: 'success' | 'error'
}

const ToastCard: React.FC<ToastCardProps> = ({ message, show, onClose, type = 'success' }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500'

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-xl text-white shadow-lg z-50 ${bgColor}`}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="text-base font-medium">{message}</span>
            <button onClick={onClose} className="text-white hover:opacity-80 font-bold text-lg">×</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ToastCard
