export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: Instructor;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: string;
  thumbnail: string;
  enrolledStudents: number;
  rating: number;
  price?: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio?: string;
  expertise?: string[];
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: string[];
  certificates: Certificate[];
}

export interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  issuedDate: string;
  certificateUrl?: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  enrollmentDate: string;
  progress: number;
  completed: boolean;
}
