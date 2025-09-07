-- Enable realtime for all relevant tables
ALTER TABLE public.portfolio REPLICA IDENTITY FULL;
ALTER TABLE public.testimonials REPLICA IDENTITY FULL;
ALTER TABLE public.team REPLICA IDENTITY FULL;
ALTER TABLE public.gallery REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER publication supabase_realtime ADD TABLE public.portfolio;
ALTER publication supabase_realtime ADD TABLE public.testimonials;
ALTER publication supabase_realtime ADD TABLE public.team;
ALTER publication supabase_realtime ADD TABLE public.gallery;