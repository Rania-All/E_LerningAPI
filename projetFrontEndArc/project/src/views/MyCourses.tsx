import { BookOpen, Clock, TrendingUp } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { mockCourses } from '../data/mockData';

interface MyCoursesProps {
  onNavigate: (view: string, courseId?: string) => void;
  enrolledCourseIds: string[];
}

export default function MyCourses({ onNavigate, enrolledCourseIds }: MyCoursesProps) {
  const enrolledCourses = mockCourses.filter((course) =>
    enrolledCourseIds.includes(course.id)
  );

  const inProgressCourses = enrolledCourses.slice(0, 2);
  const completedCourses = enrolledCourses.slice(2);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mes Cours</h1>
          <p className="text-gray-600">Suivez votre progression et continuez votre apprentissage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{enrolledCourses.length}</p>
            <p className="text-sm text-gray-600">Cours Inscrits</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{inProgressCourses.length}</p>
            <p className="text-sm text-gray-600">En Cours</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{completedCourses.length}</p>
            <p className="text-sm text-gray-600">Terminés</p>
          </div>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-gray-400 mb-4">
              <BookOpen className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Vous n'êtes inscrit à aucun cours
            </h3>
            <p className="text-gray-600 mb-6">
              Explorez notre catalogue et commencez votre apprentissage dès maintenant
            </p>
            <button
              onClick={() => onNavigate('courses')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Découvrir les cours
            </button>
          </div>
        ) : (
          <>
            {inProgressCourses.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">En cours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgressCourses.map((course) => (
                    <div key={course.id} className="relative">
                      <CourseCard
                        course={course}
                        onSelect={(id) => onNavigate('course-detail', id)}
                        enrolled
                      />
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progression</span>
                          <span className="font-semibold">35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {completedCourses.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Terminés</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedCourses.map((course) => (
                    <div key={course.id} className="relative">
                      <CourseCard
                        course={course}
                        onSelect={(id) => onNavigate('course-detail', id)}
                        enrolled
                      />
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                          <span>Progression</span>
                          <span className="font-semibold text-green-600">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
