import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lworffdxspjxvnovzeyv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3b3JmZmR4c3BqeHZub3Z6ZXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDg0MzgsImV4cCI6MjA2Mzk4NDQzOH0.WbQVpcvS5eP43RSmR_3CdUHGxgEBiXw9vDs619T2ywI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
