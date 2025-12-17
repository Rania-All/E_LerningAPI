import { BookOpen, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { mockCourses } from '../data/mockData';

interface HomeProps {
  onNavigate: (view: string, courseId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredCourses = mockCourses.slice(0, 3);

  const stats = [
    { icon: BookOpen, label: 'Cours Disponibles', value: '500+', color: 'bg-blue-100 text-blue-600' },
    { icon: Users, label: 'Étudiants Actifs', value: '50K+', color: 'bg-green-100 text-green-600' },
    { icon: Award, label: 'Certificats Délivrés', value: '25K+', color: 'bg-yellow-100 text-yellow-600' },
    { icon: TrendingUp, label: 'Taux de Réussite', value: '94%', color: 'bg-red-100 text-red-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Apprenez à Votre Rythme
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-50">
              Développez vos compétences avec des cours en ligne dispensés par des experts
            </p>
            <button
              onClick={() => onNavigate('courses')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Explorer les cours
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Cours Populaires</h2>
              <p className="text-gray-600">Découvrez nos formations les plus appréciées</p>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
            >
              Voir tout
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={(id) => onNavigate('course-detail', id)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à Commencer Votre Parcours ?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Rejoignez des milliers d'étudiants qui transforment leur carrière grâce à nos cours
            </p>
            <button
              onClick={() => onNavigate('courses')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Commencer maintenant
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
