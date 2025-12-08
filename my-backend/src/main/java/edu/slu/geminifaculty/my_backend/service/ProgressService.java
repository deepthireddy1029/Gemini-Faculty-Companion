// package edu.slu.geminifaculty.my_backend.service;

// import edu.slu.geminifaculty.my_backend.dto.CourseDetailsResponse;
// import edu.slu.geminifaculty.my_backend.dto.CourseProgressResponse;
// import edu.slu.geminifaculty.my_backend.model.Certificate;
// import edu.slu.geminifaculty.my_backend.model.CourseProgress;
// import edu.slu.geminifaculty.my_backend.model.ModuleProgress;
// import edu.slu.geminifaculty.my_backend.repository.CertificateRepository;
// import edu.slu.geminifaculty.my_backend.repository.CourseProgressRepository;
// import edu.slu.geminifaculty.my_backend.repository.ModuleProgressRepository;
// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;
// import java.util.*;

// @Service
// public class ProgressService {

// private final CourseProgressRepository courseRepo;
// private final ModuleProgressRepository moduleRepo;
// private final CertificateRepository certificateRepo;

// public ProgressService(CourseProgressRepository courseRepo,
// ModuleProgressRepository moduleRepo,
// CertificateRepository certificateRepo) {
// this.courseRepo = courseRepo;
// this.moduleRepo = moduleRepo;
// this.certificateRepo = certificateRepo;
// }

// // List of available courses
// private final Map<Long, String> courseNames = Map.of(
// 1L, "Getting started with Gemini LTI",
// 2L, "How to use Gemini effectively",
// 3L, "How to use NotebookLM effectively",
// 4L, "How to give good prompts");

// private final Map<Long, String> courseDescriptions = Map.of(
// 1L, "Learn how to use Gemini LTI in your LMS.",
// 2L, "Master Gemini for classroom use.",
// 3L, "Learn NotebookLM workflows.",
// 4L, "Learn to write perfect prompts.");

// // List modules for a course
// private final List<String> modules = List.of(
// "Introduction",
// "Basics",
// "Video Lesson",
// "Practice Task",
// "Advanced Concepts",
// "Summary");

// public List<CourseProgressResponse> getUserCourses(Long userId) {

// List<CourseProgressResponse> result = new ArrayList<>();

// for (Long id : courseNames.keySet()) {

// Optional<CourseProgress> cp = courseRepo.findByUserIdAndCourseId(userId, id);

// CourseProgressResponse res = new CourseProgressResponse();
// res.setCourseId(id);
// res.setCourseName(courseNames.get(id));
// res.setDescription(courseDescriptions.get(id));

// if (cp.isPresent()) {
// res.setProgress(cp.get().getProgress());
// res.setCompleted(cp.get().isCompleted());
// } else {
// res.setProgress(0);
// res.setCompleted(false);
// }

// result.add(res);
// }

// return result;
// }

// public CourseDetailsResponse getCourseDetails(Long userId, Long courseId) {

// List<ModuleProgress> progressList = moduleRepo
// .findByUserIdAndCourseId(userId, courseId);

// Set<Integer> completedModules = new HashSet<>();

// for (ModuleProgress mp : progressList) {
// if (mp.isCompleted())
// completedModules.add(mp.getModuleId());
// }

// List<CourseDetailsResponse.ModuleInfo> moduleInfos = new ArrayList<>();

// for (int i = 1; i <= 6; i++) {

// CourseDetailsResponse.ModuleInfo info = new
// CourseDetailsResponse.ModuleInfo();

// info.setModuleId(i);
// info.setTitle(modules.get(i - 1));
// info.setCompleted(completedModules.contains(i));
// info.setLocked(i > 1 && !completedModules.contains(i - 1));

// moduleInfos.add(info);
// }

// CourseDetailsResponse response = new CourseDetailsResponse();
// response.setCourseId(courseId);
// response.setModules(moduleInfos);

// return response;
// }

// public void completeModule(Long userId, Long courseId, int moduleId) {

// ModuleProgress mp = moduleRepo.findByUserIdAndCourseIdAndModuleId(userId,
// courseId, moduleId)
// .orElse(new ModuleProgress());

// mp.setUserId(userId);
// mp.setCourseId(courseId);
// mp.setModuleId(moduleId);
// mp.setCompleted(true);

// moduleRepo.save(mp);

// updateCourseProgress(userId, courseId);
// }

// private void updateCourseProgress(Long userId, Long courseId) {

// List<ModuleProgress> progressList = moduleRepo
// .findByUserIdAndCourseId(userId, courseId);

// int completed = 0;
// for (ModuleProgress p : progressList) {
// if (p.isCompleted())
// completed++;
// }

// int percentage = (completed * 100) / 6;

// CourseProgress cp = courseRepo.findByUserIdAndCourseId(userId, courseId)
// .orElse(new CourseProgress());

// cp.setUserId(userId);
// cp.setCourseId(courseId);
// cp.setProgress(percentage);

// if (completed == 6) {
// cp.setCompleted(true);
// issueCertificate(userId, courseId);
// }

// courseRepo.save(cp);
// }

// private void issueCertificate(Long userId, Long courseId) {

// if (certificateRepo.findByUserIdAndCourseId(userId, courseId).isPresent())
// return;

// Certificate cert = new Certificate();
// cert.setUserId(userId);
// cert.setCourseId(courseId);
// cert.setIssuedAt(LocalDateTime.now());

// certificateRepo.save(cert);
// }
// }
