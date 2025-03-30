import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "密码长度至少为 8 个字符。") // Minimum length validation
  .refine((password) => /[A-Z]/.test(password), {
    message: "密码应至少包含一个大写字母。",
  }) // At least one uppercase letter
  .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: "密码应至少包含一个特殊字符。",
  });

export const passwordResetConfirmSchema = z
  .object({
    password: passwordSchema,
    passwordConfirm: z.string(),
    token: z.string({ required_error: "Token is required" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "密码必须匹配。",
    path: ["passwordConfirm"],
  });

export const registerSchema = z.object({
  password: passwordSchema,
  email: z.string().email({ message: "邮箱地址无效" }),
});

export const loginSchema = z.object({
  password: z.string().min(1, { message: "密码是必需的" }),
  username: z.string().min(1, { message: "用户名是必需的" }),
});

export const itemSchema = z.object({
  name: z.string().min(1, { message: "名称是必需的" }),
  description: z.string().min(1, { message: "描述是必需的" }),
  quantity: z
    .string()
    .min(1, { message: "数量是必需的" })
    .transform((val) => parseInt(val, 10)) // Convert to integer
    .refine((val) => Number.isInteger(val) && val > 0, {
      message: "数量必须为正整数",
    }),
});
