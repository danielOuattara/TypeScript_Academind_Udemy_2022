export {};

/* _07_generic_utility_types.ts
--------------------------------- */

interface CourseGoal {
  title: string;
  description: string;
  completedUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completedUntil: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completedUntil = completedUntil;

  return courseGoal as CourseGoal;
}

// ---------------------------------------------

// names is non modifiable
const names: Readonly<string[]> = ["Max", "Anna"];

// ---------------------------------------------
