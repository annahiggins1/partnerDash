import { createClient } from "@supabase/supabase-js";

// not best practice, for simplicity in set up
const supabaseUrl = "https://hsqshthtfyzulxuouywx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcXNodGh0Znl6dWx4dW91eXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjQ1NDYsImV4cCI6MjAzMjYwMDU0Nn0.qlO1OEURMaYduLmi3ra_MxmVOOJ6Q3wMN2fCtxVIEJ0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);