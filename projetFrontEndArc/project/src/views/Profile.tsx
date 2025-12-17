import { Mail, BookOpen, Award, Edit } from 'lucide-react';
import type { Student } from '../types';

interface ProfileProps {
  student: Student;
}

export default function Profile({ student }: ProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-32"></div>

          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16 mb-6">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
                <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-2 mt-1">
                  <Mail className="h-4 w-4" />
                  {student.email}
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Modifier le profil
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{student.enrolledCourses.length}</p>
                <p className="text-sm text-gray-600">Cours suivis</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{student.certificates.length}</p>
                <p className="text-sm text-gray-600">Certificats obtenus</p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {student.enrolledCourses.length - student.certificates.length}
                </p>
                <p className="text-sm text-gray-600">En cours</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Informations personnelles</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input
                        type="text"
                        value={student.name}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={student.email}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
                <div className="space-y-3">
                  {student.certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <Award className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Certificat obtenu</p>
                        <p className="text-sm text-gray-600">{cert.courseName}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(cert.issuedDate).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
