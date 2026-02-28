import { z } from "zod";

export const onboardingCompleteSchema = z.object({
  role: z.string().min(1),
  company: z.string().optional().default(""),
  useCases: z.array(z.string()).min(1),
  referralSource: z.string().min(1),
  referralDetail: z.string().optional().default(""),
  channelVotes: z.array(z.string()).optional().default([]),
  selectedAvatar: z.string().min(1),
  avatarVotes: z.array(z.string()).optional().default([]),
});

export type OnboardingCompleteRequest = z.infer<
  typeof onboardingCompleteSchema
>;

export const onboardingCompleteResponseSchema = z.object({
  ok: z.boolean(),
});
