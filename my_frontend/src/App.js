// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./utils/ProtectedRoute";
// import DashboardLayout from "./layouts/DashboardLayout";
// import CertificatesPage from "./pages/Certificates";
// import CourseDetails from "./pages/CourseDetails";
// import CourseModulesPage from "./pages/CourseModules";
// import QuizPage from "./pages/Quiz";
// import NotificationsPage from "./pages/Notifications";
// import SupportPage from "./pages/Support";
// // import AdminDashboardPage from "./pages/AdminDashboard";
// import CourseProgress from "./pages/CourseProgress";

// import CertificateViewer from "./pages/CertificateViewer";
// import CreatePost from "./pages/CreatePost";


// import Login from "./pages/Login";
// import Register from "./pages/Register";

// import DashboardPage from "./pages/Dashboard";

// import ProfilePage from "./pages/profile/ProfileInfo";
// import SecurityPage from "./pages/profile/SecuritySettings";
// import AccessibilityPage from "./pages/profile/AccessibilitySettings";

// import CoursesPage from "./pages/Courses";
// import AccomplishmentsPage from "./pages/Accomplishments";
// import CommunityPage from "./pages/Community";
// import HelpPage from "./pages/Help";

// import NotificationsCenter from "./pages/NotificationsCenter";
// import GeneralSettings from "./pages/GeneralSettings";
// import SavedResources from "./pages/SavedResources";
// import AIAssistant from "./pages/AIAssistant";
// // import Calendar from "./pages/Calendar";
// import AdminUserManagement from "./pages/AdminUserManagement";
// import AdminCourseAnalytics from "./pages/AdminCourseAnalytics";
// import FacultyCalendar from "./pages/FacultyCalendar";
// import Feedback from "./pages/Feedback";
// import LearningGoals from "./pages/LearningGoals";
// import CourseReview from "./pages/CourseReview";
// import AdminFacultyReports from "./pages/AdminFacultyReports";
// import AdminSystemSettings from "./pages/AdminSystemSettings";
// import ModulePage from "./pages/ModulePage";
// import ModuleQuiz from "./pages/ModuleQuiz";
// import FinalQuiz from "./pages/FinalQuiz";
// // import CoursePlayer from "./pages/CoursePlayer";
// import AdminRoute from "./utils/AdminRoute";
// import AdminLayout from "./layouts/AdminLayout";

// import AdminDashboard from "./pages/AdminDashboard";
// import FacultyList from "./pages/FacultyList";


// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>

//                 {/* Public */}
//                 <Route path="/" element={<Login />} />
//                 <Route path="/register" element={<Register />} />


//                 {/* Protected */}
//                 <Route
//                     path="/"
//                     element={
//                         <ProtectedRoute>
//                             <DashboardLayout />
//                         </ProtectedRoute>
//                     }
//                 >
//                     <Route path="dashboard" element={<DashboardPage />} />
//                     <Route path="profile" element={<ProfilePage />} />
//                     <Route path="security" element={<SecurityPage />} />
//                     <Route path="accessibility" element={<AccessibilityPage />} />
//                     <Route path="courses" element={<CoursesPage />} />
//                     <Route path="accomplishments" element={<AccomplishmentsPage />} />
//                     <Route path="community" element={<CommunityPage />} />
//                     <Route path="certificates" element={<CertificatesPage />} />
//                     <Route path="help" element={<HelpPage />} />
//                     <Route path="course/:id" element={<CourseDetails />} />
//                     <Route path="modules" element={<CourseModulesPage />} />
//                     <Route path="quiz" element={<QuizPage />} />
//                     <Route path="notifications" element={<NotificationsPage />} />
//                     <Route path="support" element={<SupportPage />} />
//                     {/* <Route path="admin" element={<AdminDashboardPage />} /> */}
//                     <Route path="course-progress" element={<CourseProgress />} />
//                     <Route path="certificate-viewer" element={<CertificateViewer />} />
//                     <Route path="create-post" element={<CreatePost />} />
//                     <Route path="notifications-center" element={<NotificationsCenter />} />
//                     <Route path="settings" element={<GeneralSettings />} />
//                     <Route path="saved-resources" element={<SavedResources />} />
//                     <Route path="ai-assistant" element={<AIAssistant />} />
//                     {/* <Route path="calendar" element={<Calendar />} /> */}
//                     <Route path="admin-users" element={<AdminUserManagement />} />
//                     <Route path="admin-course-analytics" element={<AdminCourseAnalytics />} />
//                     <Route path="calendar" element={<FacultyCalendar />} />
//                     <Route path="feedback" element={<Feedback />} />
//                     <Route path="goals" element={<LearningGoals />} />
//                     <Route path="course-review" element={<CourseReview />} />
//                     <Route path="admin-reports" element={<AdminFacultyReports />} />
//                     <Route path="admin-settings" element={<AdminSystemSettings />} />
//                     <Route path="course/:id/module/:moduleId" element={<ModulePage />} />
//                     {/* <Route path="course/:id/module/:moduleId" element={<CoursePlayer />} /> */}
//                     <Route path="course/:id/module/:moduleId/quiz" element={<ModuleQuiz />} />
//                     <Route path="course/:id/final-quiz" element={<FinalQuiz />} />
//                     <Route path="/admin-dashboard" element={<AdminRoute>
//             <AdminLayout />
//         </AdminRoute>
//     }
// >
//     <Route index element={<AdminDashboard />} />
//     <Route path="faculty" element={<FacultyList />} />
// </Route>


//                 </Route>

//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CertificatesPage from "./pages/Certificates";
import CourseDetails from "./pages/CourseDetails";
import CourseModulesPage from "./pages/CourseModules";
import QuizPage from "./pages/Quiz";
import NotificationsPage from "./pages/Notifications";
import SupportPage from "./pages/Support";
// import AdminDashboardPage from "./pages/AdminDashboard";
import CourseProgress from "./pages/CourseProgress";

import CertificateViewer from "./pages/CertificateViewer";
import CreatePost from "./pages/CreatePost";


import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardPage from "./pages/Dashboard";

import ProfilePage from "./pages/profile/ProfileInfo";
import SecurityPage from "./pages/profile/SecuritySettings";
import AccessibilityPage from "./pages/profile/AccessibilitySettings";

import CoursesPage from "./pages/Courses";
import AccomplishmentsPage from "./pages/Accomplishments";
import CommunityPage from "./pages/Community";
import HelpPage from "./pages/Help";

import NotificationsCenter from "./pages/NotificationsCenter";
import GeneralSettings from "./pages/GeneralSettings";
import SavedResources from "./pages/SavedResources";
import AIAssistant from "./pages/AIAssistant";
// import Calendar from "./pages/Calendar";
import AdminUserManagement from "./pages/AdminUserManagement";
import AdminCourseAnalytics from "./pages/AdminCourseAnalytics";
import FacultyCalendar from "./pages/FacultyCalendar";
import Feedback from "./pages/Feedback";
import LearningGoals from "./pages/LearningGoals";
import CourseReview from "./pages/CourseReview";
// import AdminFacultyReports from "./pages/AdminFacultyReports";
import AdminSystemSettings from "./pages/AdminSystemSettings";
import ModulePage from "./pages/ModulePage";
import ModuleQuiz from "./pages/ModuleQuiz";
import FinalQuiz from "./pages/FinalQuiz";
// import CoursePlayer from "./pages/CoursePlayer";
import AdminRoute from "./utils/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";

import AdminDashboard from "./pages/AdminDashboard";
import FacultyList from "./pages/FacultyList";
import AdminReports from "./pages/AdminReports";
import AdminFacultyReports from "./pages/AdminFacultyReports";

import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminProfile from "./pages/AdminProfile";






function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />


                {/* Admin Protected Routes (Outside DashboardLayout) */}
                <Route
    path="/admin"
    element={
        <AdminRoute>
            <AdminLayout />
        </AdminRoute>
    }
>
    <Route index element={<AdminDashboard />} />
    <Route path="faculty" element={<AdminFacultyReports />} />
    <Route path="reports" element={<AdminReports />} />
    <Route path="profile" element={<AdminProfile/>}/>
    {/* <Route path="certificates" element={<AccomplishmentsPage />} /> */}
</Route>



                {/* Protected Faculty/General User Routes */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="security" element={<SecurityPage />} />
                    <Route path="accessibility" element={<AccessibilityPage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="accomplishments" element={<AccomplishmentsPage />} />
                    <Route path="community" element={<CommunityPage />} />
                    <Route path="certificates" element={<CertificatesPage />} />
                    <Route path="help" element={<HelpPage />} />
                    <Route path="course/:id" element={<CourseDetails />} />
                    <Route path="modules" element={<CourseModulesPage />} />
                    <Route path="quiz" element={<QuizPage />} />
                    <Route path="notifications" element={<NotificationsPage />} />
                    <Route path="support" element={<SupportPage />} />
                    {/* <Route path="admin" element={<AdminDashboardPage />} /> */}
                    <Route path="course-progress" element={<CourseProgress />} />
                    <Route path="certificate-viewer" element={<CertificateViewer />} />
                    <Route path="create-post" element={<CreatePost />} />
                    <Route path="notifications-center" element={<NotificationsCenter />} />
                    <Route path="settings" element={<GeneralSettings />} />
                    <Route path="saved-resources" element={<SavedResources />} />
                    <Route path="ai-assistant" element={<AIAssistant />} />
                    {/* <Route path="calendar" element={<Calendar />} /> */}
                    <Route path="users" element={<AdminUserManagement />} />
                    <Route path="admin-course-analytics" element={<AdminCourseAnalytics />} />
                    <Route path="calendar" element={<FacultyCalendar />} />
                    <Route path="feedback" element={<Feedback />} />
                    <Route path="goals" element={<LearningGoals />} />
                    <Route path="course-review" element={<CourseReview />} />
                    <Route path="admin-reports" element={<AdminFacultyReports />} />
                    <Route path="admin-settings" element={<AdminSystemSettings />} />
                    <Route path="course/:id/module/:moduleId" element={<ModulePage />} />
                    {/* <Route path="course/:id/module/:moduleId" element={<CoursePlayer />} /> */}
                    <Route path="course/:id/module/:moduleId/quiz" element={<ModuleQuiz />} />
                    <Route path="course/:id/final-quiz" element={<FinalQuiz />} />



                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;