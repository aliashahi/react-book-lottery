import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tyemwbicaqhioupobvly.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTQwMjg4MSwiZXhwIjoxOTU2OTc4ODgxfQ.2er4vEbz2bgLUNNLXLzppU0pc2wuVX5oSpC9sisjO5E";

export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
