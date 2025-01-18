import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bvhsltkmmujhblwonrxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2aHNsdGttbXVqaGJsd29ucnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMTc3NjMsImV4cCI6MjA1MjY5Mzc2M30.-FsT8SHK-LhkCsN7xcAZlaKelZOJFi21ipFI1LyYUVE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
