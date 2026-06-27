"use server";

import { supabaseAdmin } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type Application = {
  id: string;
  job_id: string;
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  cover_letter?: string;
  resume_file_name?: string;
  resume_path?: string;
  status: "new" | "reviewing" | "shortlisted" | "rejected";
  submitted_at: string;
};

export async function getApplications(): Promise<Application[]> {
  const { data, error } = await supabaseAdmin
    .from("applications")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) return [];
  return data;
}

/**
 * Generates a fresh signed URL for a resume, valid for 1 hour.
 * Call this on demand when the admin clicks "Download" — never store the result.
 */
export async function getResumeDownloadUrl(
  path: string,
): Promise<{ url?: string; error?: string }> {
  const { data, error } = await supabaseAdmin.storage
    .from("resumes")
    .createSignedUrl(path, 60 * 60); // 1 hour

  if (error || !data) return { error: "Failed to generate download link." };
  return { url: data.signedUrl };
}

/**
 * Generates signed download URLs for multiple resume paths at once.
 * Returns a map of { [path]: signedUrl }.
 * Paths that fail are omitted from the result.
 */
export async function getResumeDownloadUrls(
  paths: string[],
): Promise<Record<string, string>> {
  const unique = [...new Set(paths.filter(Boolean))];
  if (unique.length === 0) return {};

  const { data, error } = await supabaseAdmin.storage
    .from("resumes")
    .createSignedUrls(unique, 60 * 60 * 24 * 7); // 7 days, single request

  if (error || !data) return {};

  const result: Record<string, string> = {};
  for (const item of data) {
    if (item.signedUrl && item.path) {
      result[item.path] = item.signedUrl;
    }
  }
  return result;
}

export async function updateApplicationStatus(
  id: string,
  status: Application["status"],
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabaseAdmin
    .from("applications")
    .update({ status })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin");
  return { success: true };
}

export async function deleteApplication(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabaseAdmin
    .from("applications")
    .delete()
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin");
  return { success: true };
}
