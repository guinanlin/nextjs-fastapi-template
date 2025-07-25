"use server";

import { cookies } from "next/headers";

import { authJwtLogin } from "@/app/clientService";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/definitions";
import { getErrorMessage } from "@/lib/utils";

export async function login(prevState: unknown, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, password } = validatedFields.data;

  const input = {
    body: {
      username,
      password,
    },
  };

  try {
    const { data, error } = await authJwtLogin(input);
    // console.log("authJwtLogin data:", data);
    // console.log("authJwtLogin error:", error);
    if (error) {
      return { server_validation_error: getErrorMessage(error) };
    }
    (await cookies()).set("accessToken", data.access_token);
  } catch {
    // console.error("Login error:", err);
    // console.error("Error type:", typeof err);
    // console.error("Error message:", (err as Error).message);
    // console.error("Error stack:", (err as Error).stack);
    return {
      server_error: "发生了一个意外错误。请稍后再试。",
    };
  }
  redirect("/dashboard");
}
