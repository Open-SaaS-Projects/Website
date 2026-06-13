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
  resume_url?: string;
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
