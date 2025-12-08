// package edu.slu.geminifaculty.my_backend.controller;

// import edu.slu.geminifaculty.my_backend.dto.CourseDetailsResponse;
// import edu.slu.geminifaculty.my_backend.dto.CourseProgressResponse;
// import edu.slu.geminifaculty.my_backend.dto.ModuleCompletionRequest;
// import edu.slu.geminifaculty.my_backend.service.ProgressService;
// import org.springframework.web.bind.annotation.*;

// import java.security.Principal;
// import java.util.List;

// @RestController
// @RequestMapping("/api/progress")
// @CrossOrigin(origins = "*")
// public class ProgressController {

// private final ProgressService progressService;

// public ProgressController(ProgressService progressService) {
// this.progressService = progressService;
// }

// @GetMapping("/my-courses")
// public List<CourseProgressResponse> getMyCourses(Principal principal) {
// Long userId = Long.parseLong(principal.getName());
// return progressService.getUserCourses(userId);
// }

// @GetMapping("/course/{courseId}")
// public CourseDetailsResponse getCourseDetails(
// @PathVariable Long courseId,
// Principal principal) {
// Long userId = Long.parseLong(principal.getName());
// return progressService.getCourseDetails(userId, courseId);
// }

// @PostMapping("/complete-module")
// public String completeModule(
// @RequestBody ModuleCompletionRequest req,
// Principal principal) {
// Long userId = Long.parseLong(principal.getName());
// progressService.completeModule(userId, req.getCourseId(), req.getModuleId());
// return "Module completed";
// }
// }
// updated as per the github