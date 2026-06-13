"use server";

import { supabaseAdmin } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type Job = {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  description: string;
  status: "active" | "inactive";
  posted_at: string;
};

type CreateJobInput = Omit<Job, "id" | "posted_at" | "status">;
type UpdateJobInput = Partial<CreateJobInput>;

export async function getJobs(): Promise<Job[]> {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .order("posted_at", { ascending: false });

  if (error) return [];
  return data;
}

export async function getActiveJobs(): Promise<Job[]> {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("*")
    .eq("status", "active")
    .order("posted_at", { ascending: false });

  if (error) return [];
  return data;
}

export async function createJob(
  data: CreateJobInput,
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabaseAdmin.from("jobs").insert(data);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin");
  revalidatePath("/careers");
  return { success: true };
}

export async function updateJob(
  id: string,
  data: UpdateJobInput,
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabaseAdmin.from("jobs").update(data).eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin");
  revalidatePath("/careers");
  return { success: true };
}

export async function deleteJob(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabaseAdmin.from("jobs").delete().eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin");
  revalidatePath("/careers");
  return { success: true };
}

export async function toggleJobStatus(
  id: string,
  currentStatus: string,
): Promise<{ success: boolean; error?: string }> {
  const newStatus = currentStatus === "active" ? "inactive" : "active";

  const { error } = await supabaseAdmin
    .from("jobs")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin");
  revalidatePath("/careers");
  return { success: true };
}
