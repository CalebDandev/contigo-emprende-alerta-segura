
import React, { useState } from 'react';
import { Play, CheckCircle, Lock, ChevronRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import QuizSection from './QuizSection';
import KututuChat from './KututuChat';

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked?: boolean;
  videoUrl?: string;
}

const ModuleView = () => {
  const [activeSection, setActiveSection] = useState('video');
  const [videosCompleted, setVideosCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const videoList: VideoItem[] = [
    { 
      id: 'video-1', 
      title: '¿Qué es un proceso clave?', 
      duration: '4:32', 
      completed: false,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    { 
      id: 'video-2', 
      title: 'Identificando procesos en tu emprendimiento', 
      duration: '5:15', 
      completed: false,
      locked: true 
    },
    { 
      id: 'video-3', 
      title: 'Documentando tus procesos esenciales', 
      duration: '3:48', 
      completed: false,
      locked: true 
    },
  ];
  
  const handleVideoComplete = () => {
    setVideosCompleted(true);
    setActiveSection('quiz');
  };
  
  const handleQuizComplete = (score: number, totalPoints: number) => {
    setQuizCompleted(true);
    setActiveSection('mission');
  };
  
  const handleMissionComplete = () => {
    // Handle mission completion
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-bcp-blue text-white p-6">
        <h2 className="text-2xl font-bold">Módulo 1: Conoce los procesos clave</h2>
        <p className="text-blue-100 mt-2">Identifica qué mantiene vivo tu negocio</p>
        
        <div className="mt-6 flex items-center">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full" 
              style={{ width: `${videosCompleted ? (quizCompleted ? '100' : '66') : '33'}%` }}
            ></div>
          </div>
          <span className="ml-3 text-sm font-medium">
            {videosCompleted ? (quizCompleted ? '3' : '2') : '1'}/3
          </span>
        </div>
      </div>
      
      <div className="p-6">
        {/* Navigation tabs */}
        <div className="flex border-b">
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeSection === 'video' ? 'text-bcp-blue border-b-2 border-bcp-blue' : 'text-gray-500'}`}
            onClick={() => setActiveSection('video')}
          >
            1. Video
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeSection === 'quiz' ? 'text-bcp-blue border-b-2 border-bcp-blue' : 'text-gray-500'} ${!videosCompleted && 'opacity-50 cursor-not-allowed'}`}
            onClick={() => videosCompleted && setActiveSection('quiz')}
            disabled={!videosCompleted}
          >
            2. Quiz
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm ${activeSection === 'mission' ? 'text-bcp-blue border-b-2 border-bcp-blue' : 'text-gray-500'} ${!quizCompleted && 'opacity-50 cursor-not-allowed'}`}
            onClick={() => quizCompleted && setActiveSection('mission')}
            disabled={!quizCompleted}
          >
            3. Misión
          </button>
        </div>
        
        {/* Dynamic content based on active section */}
        <div className="mt-6">
          {activeSection === 'video' && (
            <div>
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe 
                  className="w-full h-full rounded-lg"
                  src={videoList[0].videoUrl}
                  title={videoList[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="space-y-4 mb-6">
                {videoList.map((video, index) => (
                  <div 
                    key={video.id}
                    className={`flex items-center p-4 rounded-lg ${index === 0 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}
                  >
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${video.locked ? 'bg-gray-200' : 'bg-bcp-blue'}`}>
                      {video.locked ? (
                        <Lock className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Play className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{video.title}</h3>
                      <span className="text-sm text-gray-500">{video.duration}</span>
                    </div>
                    {index === 0 && (
                      <Button variant="outline" onClick={handleVideoComplete}>
                        Completar
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeSection === 'quiz' && (
            <QuizSection onQuizComplete={handleQuizComplete} />
          )}
          
          {activeSection === 'mission' && (
            <KututuChat onMissionComplete={handleMissionComplete} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleView;
