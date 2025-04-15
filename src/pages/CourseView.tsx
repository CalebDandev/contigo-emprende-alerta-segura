import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';

// Define the type for useParams
interface CourseParams {
  courseId: string;
}

const CourseView = () => {
  // Use the courseId from the URL parameters
  const { courseId } = useParams<keyof CourseParams>() as CourseParams;
  const [progress, setProgress] = useState(0);

  const courseData = {
    id: courseId,
    title: "Curso de Resiliencia para Emprendedores",
    description: "Aprende a proteger tu negocio ante cualquier adversidad.",
    imageUrl: "https://images.unsplash.com/photo-1560419661-49d57a1c85a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    modules: [
      { id: 1, title: "Introducción a la Resiliencia", completed: false },
      { id: 2, title: "Identificación de Riesgos", completed: false },
      { id: 3, title: "Planificación de la Continuidad", completed: false },
      { id: 4, title: "Estrategias de Recuperación", completed: false },
      { id: 5, title: "Comunicación en Crisis", completed: false },
    ],
  };

  const [modules, setModules] = useState(courseData.modules);

  useEffect(() => {
    // Calculate progress based on completed modules
    const completedCount = modules.filter((module) => module.completed).length;
    const totalModules = modules.length;
    const calculatedProgress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;
    setProgress(calculatedProgress);
  }, [modules]);

  const handleCheckboxChange = (moduleId: number) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId ? { ...module, completed: !module.completed } : module
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-8">
          <div className="bcp-container">
            <nav className="flex py-3 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-gray-500 hover:text-bcp-blue">Inicio</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li>
                  <a href="/cursos" className="text-gray-500 hover:text-bcp-blue">Cursos</a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li className="text-bcp-blue font-medium" aria-current="page">
                  {courseData.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="bcp-section">
          <div className="bcp-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Course Details */}
              <div>
                <h1 className="text-3xl font-bold text-bcp-blue mb-4">{courseData.title}</h1>
                <p className="text-gray-600 mb-6">{courseData.description}</p>
                <img src={courseData.imageUrl} alt={courseData.title} className="rounded-xl mb-6" />

                {/* Progress Bar */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Progreso del curso</h3>
                  <Progress value={progress} className="h-3" />
                  <p className="text-sm text-gray-500 mt-1">{progress.toFixed(0)}% completado</p>
                </div>
              </div>

              {/* Course Modules */}
              <div>
                <h2 className="text-2xl font-bold text-bcp-blue mb-4">Módulos del curso</h2>
                <ul className="space-y-4">
                  {modules.map((module) => (
                    <li key={module.id} className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4">
                      <div className="flex items-center">
                        <Checkbox
                          id={`module-${module.id}`}
                          checked={module.completed}
                          onCheckedChange={() => handleCheckboxChange(module.id)}
                          className="mr-3"
                        />
                        <label
                          htmlFor={`module-${module.id}`}
                          className="text-gray-700"
                        >
                          {module.title}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseView;
