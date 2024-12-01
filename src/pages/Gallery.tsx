import React from 'react';
import GalleryItem from '../components/gallery/GalleryItem';

const Gallery = () => {
  const artworks = [
    {
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000',
      title: 'Digital Abstract',
      description: 'A modern take on abstract expressionism',
    },
    {
      image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=1000',
      title: 'Urban Landscape',
      description: 'City life through a minimalist lens',
    },
    {
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000',
      title: 'Nature Series',
      description: 'Exploring organic forms and patterns',
    },
    {
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=1000',
      title: 'Geometric Study',
      description: 'Mathematical beauty in art',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Gallery</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <GalleryItem key={index} {...artwork} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;