import { Clock, Users, Star, Award, BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';
import type { Course } from '../types';

interface CourseDetailProps {
  course: Course;
  onNavigate: (view: string) => void;
  onEnroll: (courseId: string) => void;
  isEnrolled: boolean;
}

export default function CourseDetail({ course, onNavigate, onEnroll, isEnrolled }: CourseDetailProps) {
  const modules = [
    { id: 1, title: 'Introduction et Configuration', duration: '45 min', completed: isEnrolled },
    { id: 2, title: 'Concepts Fondamentaux', duration: '1h 20min', completed: false },
    { id: 3, title: 'Pratique et Exercices', duration: '2h 15min', completed: false },
    { id: 4, 'title': 'Projet Final', duration: '3h', completed: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => onNavigate('courses')}
            className="mb-4 flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour aux cours
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-blue-50 mb-6">{course.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <p className="font-semibold">{course.instructor.name}</p>
                  <p className="text-sm text-blue-50">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.enrolledStudents.toLocaleString()} étudiants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>Certificat inclus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {course.price && course.price > 0 ? (
                  <div className="text-3xl font-bold text-gray-900 mb-4">{course.price.toFixed(2)} €</div>
                ) : (
                  <div className="text-3xl font-bold text-green-600 mb-4">Gratuit</div>
                )}

                <button
                  onClick={() => onEnroll(course.id)}
                  disabled={isEnrolled}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isEnrolled
                      ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isEnrolled ? 'Déjà inscrit' : "S'inscrire au cours"}
                </button>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Accès à vie au contenu</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Support des instructeurs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Certificat de réussite</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ressources téléchargeables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce cours</h2>
              <p className="text-gray-600 leading-relaxed">
                Ce cours vous permettra de maîtriser les concepts essentiels et d'acquérir les compétences
                pratiques nécessaires pour exceller dans votre domaine. Vous apprendrez à travers des
                exemples concrets, des exercices pratiques et un projet final qui consolidera vos acquis.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Contenu du cours
              </h2>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                      )}
                      <span className="font-medium text-gray-900">{module.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{module.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructeur</h2>
              <div className="flex items-start gap-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.instructor.name}</h3>
                  <p className="text-gray-600 mb-2">{course.instructor.title}</p>
                  {course.instructor.expertise && (
                    <div className="flex flex-wrap gap-2">
                      {course.instructor.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ce que vous apprendrez</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Maîtriser les concepts fondamentaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Développer des compétences pratiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Réaliser des projets concrets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Obtenir un certificat reconnu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
