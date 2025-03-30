import { AuthJwtLoginError, RegisterRegisterError } from "@/app/clientService";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(
  error: RegisterRegisterError | AuthJwtLoginError,
): string {
  let errorMessage = "发生未知错误";

  if (typeof error.detail === "string") {
    // 如果详情是字符串，直接使用
    errorMessage = error.detail;
  } else if (typeof error.detail === "object" && "reason" in error.detail) {
    // 如果详情是一个带有"reason"键的对象，则使用它
    errorMessage = error.detail["reason"];
  }

  return errorMessage;
}
