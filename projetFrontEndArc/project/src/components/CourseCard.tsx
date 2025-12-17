import { Clock, Users, Star } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
  enrolled?: boolean;
}

export default function CourseCard({ course, onSelect, enrolled = false }: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-green-100 text-green-800';
      case 'Intermédiaire':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avancé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      onClick={() => onSelect(course.id)}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
            {course.level}
          </span>
        </div>
        {enrolled && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
              Inscrit
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{course.instructor.name}</p>
            <p className="text-xs text-gray-500 truncate">{course.instructor.title}</p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.enrolledStudents.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900">{course.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{course.category}</span>
          {course.price && course.price > 0 ? (
            <span className="text-lg font-bold text-blue-600">{course.price.toFixed(2)} €</span>
          ) : (
            <span className="text-lg font-bold text-green-600">Gratuit</span>
          )}
        </div>
      </div>
    </div>
  );
}
