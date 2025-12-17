import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Courses from './views/Courses';
import CourseDetail from './views/CourseDetail';
import MyCourses from './views/MyCourses';
import Certificates from './views/Certificates';
import Profile from './views/Profile';
import { mockCourses, mockStudent } from './data/mockData';

type View = 'home' | 'courses' | 'course-detail' | 'my-courses' | 'certificates' | 'profile';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(mockStudent.enrolledCourses);

  const handleNavigate = (view: string, courseId?: string) => {
    setCurrentView(view as View);
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnroll = (courseId: string) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
    }
  };

  const selectedCourse = selectedCourseId
    ? mockCourses.find((c) => c.id === selectedCourseId)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {currentView === 'home' && <Home onNavigate={handleNavigate} />}

      {currentView === 'courses' && <Courses onNavigate={handleNavigate} />}

      {currentView === 'course-detail' && selectedCourse && (
        <CourseDetail
          course={selectedCourse}
          onNavigate={handleNavigate}
          onEnroll={handleEnroll}
          isEnrolled={enrolledCourseIds.includes(selectedCourse.id)}
        />
      )}

      {currentView === 'my-courses' && (
        <MyCourses onNavigate={handleNavigate} enrolledCourseIds={enrolledCourseIds} />
      )}

      {currentView === 'certificates' && <Certificates certificates={mockStudent.certificates} />}

      {currentView === 'profile' && <Profile student={mockStudent} />}
    </div>
  );
}

export default App;
