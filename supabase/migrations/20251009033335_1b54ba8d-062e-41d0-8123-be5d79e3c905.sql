-- Add published status to all content tables for draft system
ALTER TABLE public.gallery ADD COLUMN IF NOT EXISTS published boolean DEFAULT true;
ALTER TABLE public.portfolio ADD COLUMN IF NOT EXISTS published boolean DEFAULT true;
ALTER TABLE public.testimonials ADD COLUMN IF NOT EXISTS published boolean DEFAULT true;
ALTER TABLE public.team ADD COLUMN IF NOT EXISTS published boolean DEFAULT true;

-- Add indexes for better performance on filtering
CREATE INDEX IF NOT EXISTS idx_gallery_published ON public.gallery(published);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON public.gallery(category);
CREATE INDEX IF NOT EXISTS idx_gallery_created_at ON public.gallery(created_at);

CREATE INDEX IF NOT EXISTS idx_portfolio_published ON public.portfolio(published);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON public.portfolio(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_created_at ON public.portfolio(created_at);

CREATE INDEX IF NOT EXISTS idx_testimonials_published ON public.testimonials(published);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON public.testimonials(created_at);

CREATE INDEX IF NOT EXISTS idx_team_published ON public.team(published);
CREATE INDEX IF NOT EXISTS idx_team_created_at ON public.team(created_at);

-- Update RLS policies to only show published content to public
DROP POLICY IF EXISTS "Anyone can view gallery" ON public.gallery;
CREATE POLICY "Anyone can view published gallery" ON public.gallery
  FOR SELECT USING (published = true);

DROP POLICY IF EXISTS "Anyone can view portfolio" ON public.portfolio;
CREATE POLICY "Anyone can view published portfolio" ON public.portfolio
  FOR SELECT USING (published = true);

DROP POLICY IF EXISTS "Anyone can view testimonials" ON public.testimonials;
CREATE POLICY "Anyone can view published testimonials" ON public.testimonials
  FOR SELECT USING (published = true);

DROP POLICY IF EXISTS "Anyone can view team" ON public.team;
CREATE POLICY "Anyone can view published team" ON public.team
  FOR SELECT USING (published = true);