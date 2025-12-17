import { Award, Download, Calendar } from 'lucide-react';
import type { Certificate } from '../types';

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  const handleDownload = (certificateId: string) => {
    console.log('Téléchargement du certificat:', certificateId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mes Certificats</h1>
          <p className="text-gray-600">Vos accomplissements et certificats de réussite</p>
        </div>

        {certificates.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Award className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun certificat pour le moment
            </h3>
            <p className="text-gray-600">
              Terminez vos cours pour obtenir des certificats de réussite
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="h-12 w-12" />
                    <button
                      onClick={() => handleDownload(certificate.id)}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                      title="Télécharger"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certificat de Réussite</h3>
                  <p className="text-blue-50">{certificate.courseName}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      Délivré le{' '}
                      {new Date(certificate.issuedDate).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDownload(certificate.id)}
                    className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Télécharger le certificat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {certificates.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Partagez vos réussites</h2>
                <p className="text-blue-50">
                  Ajoutez vos certificats à votre profil LinkedIn pour mettre en valeur vos compétences
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
