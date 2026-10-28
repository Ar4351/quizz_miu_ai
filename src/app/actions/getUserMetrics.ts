import { quizzes, questions, quizzSubmissions, users } from "@/db/schema";
import { auth } from "@/auth";
import { db } from "@/db";
import { count, eq, avg } from "drizzle-orm";

const getUserMetrics = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return;
  }

 
 const numQuizzes = await db
    .select({ value: count() })
    .from(quizzes)
    .where(eq(quizzes.userId, userId));

  
  const numQuestions = await db
  .select({ value: count() })
  .from(questions)
  .innerJoin(quizzes, eq(questions.quizzId, quizzes.id))
  .innerJoin(users, eq(quizzes.userId, users.id))
  .where(eq(quizzes.userId, userId)); 

    

  const numSubmissions = await db
  .select({ value: count() })
  .from(quizzSubmissions)
  .innerJoin(quizzes, eq(quizzSubmissions.quizzId, quizzes.id))
  .innerJoin(users, eq(quizzes.userId, users.id))
  .where(eq(quizzes.userId, userId));

  

  const avgScore= await db
  .select({ value: avg(quizzSubmissions.score) })
  .from(quizzSubmissions)
  .innerJoin(quizzes, eq(quizzSubmissions.quizzId, quizzes.id))
  .innerJoin(users, eq(quizzes.userId, users.id))
  .where(eq(quizzes.userId, userId));
  



  return [
    { label: "number of Quizzes", value: numQuizzes[0].value },
    { label: "number of Questions", value: numQuestions[0].value },
    { label: "number of Submissions", value: numSubmissions[0].value },
    { label: "Average \nScore", value: avgScore[0].value
    ? Math.round(Number(avgScore[0].value) * 100) / 100
  : 0 },

  ];
};

export default getUserMetrics;