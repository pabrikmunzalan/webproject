-- Create storage buckets for different image types
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('gallery-images', 'gallery-images', true, 5242880, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']),
  ('portfolio-images', 'portfolio-images', true, 5242880, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']),
  ('team-avatars', 'team-avatars', true, 5242880, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']),
  ('testimonial-avatars', 'testimonial-avatars', true, 5242880, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']);

-- RLS Policies for gallery-images bucket
CREATE POLICY "Public can view gallery images"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery-images');

CREATE POLICY "Admins can upload gallery images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'gallery-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update gallery images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'gallery-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete gallery images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'gallery-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- RLS Policies for portfolio-images bucket
CREATE POLICY "Public can view portfolio images"
ON storage.objects FOR SELECT
USING (bucket_id = 'portfolio-images');

CREATE POLICY "Admins can upload portfolio images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'portfolio-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update portfolio images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'portfolio-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete portfolio images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'portfolio-images' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- RLS Policies for team-avatars bucket
CREATE POLICY "Public can view team avatars"
ON storage.objects FOR SELECT
USING (bucket_id = 'team-avatars');

CREATE POLICY "Admins can upload team avatars"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'team-avatars' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update team avatars"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'team-avatars' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete team avatars"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'team-avatars' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- RLS Policies for testimonial-avatars bucket
CREATE POLICY "Public can view testimonial avatars"
ON storage.objects FOR SELECT
USING (bucket_id = 'testimonial-avatars');

CREATE POLICY "Admins can upload testimonial avatars"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'testimonial-avatars' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update testimonial avatars"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'testimonial-avatars' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete testimonial avatars"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'testimonial-avatars' 
  AND has_role(auth.uid(), 'admin'::app_role)
);