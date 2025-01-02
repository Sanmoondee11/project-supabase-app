import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.'https://tnbtdvuijlgfsrvalaud.supabase.co'!,
  process.env.'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuYnRkdnVpamxnZnNydmFsYXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NzI4MDcsImV4cCI6MjA1MTA0ODgwN30.DrLMAn2cuvjQ3gqtFEph9Xo-m4xT1MCfFG57w5m4-qg'!
);