import React from 'react';
import { FaStore, FaStar, FaHeart } from 'react-icons/fa';

interface FamilyMember {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  description: string;
}

const ProductiveFamilies: React.FC = () => {
  const families: FamilyMember[] = [
    {
      id: 1,
      name: 'عائلة البركات',
      specialty: 'الحلويات والمعجنات',
      rating: 4.8,
      image: '🍰',
      description: 'عائلة متخصصة في صناعة الحلويات الشرقية والغربية بأيدي ماهرة'
    },
    {
      id: 2,
      name: 'عائلة النور',
      specialty: 'الأعمال اليدوية والتطريز',
      rating: 4.9,
      image: '🧵',
      description: 'إبداع في التطريز والأعمال اليدوية والهدايا التذكارية'
    },
    {
      id: 3,
      name: 'عائلة الوادي',
      specialty: 'المنتجات الطبيعية والعطور',
      rating: 4.7,
      image: '🌿',
      description: 'منتجات طبيعية وعطور شرقية أصيلة من تراث الأجداد'
    },
    {
      id: 4,
      name: 'عائلة البستان',
      specialty: 'المأكولات الشعبية',
      rating: 4.9,
      image: '🍲',
      description: 'أشهى المأكولات الشعبية السعودية بطعم البيت'
    },
    {
      id: 5,
      name: 'عائلة الإبداع',
      specialty: 'الإكسسوارات والهدايا',
      rating: 4.6,
      image: '💎',
      description: 'تصميم إكسسوارات فريدة وهدايا مخصصة لجميع المناسبات'
    },
    {
      id: 6,
      name: 'عائلة الريف',
      specialty: 'المنتجات الزراعية والعسل',
      rating: 4.8,
      image: '🍯',
      description: 'عسل طبيعي ومنتجات زراعية طازجة من مزارعنا'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            الأسر المنتجة
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفتخر بدعم الأسر المنتجة في مجتمعنا، ونساعدهم على عرض منتجاتهم المميزة
          </p>
        </div>

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {families.map((family) => (
            <div
              key={family.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-6 text-center">
                <span className="text-6xl block mb-4">{family.image}</span>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {family.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-yellow-200">
                  <FaStar />
                  <span className="text-white font-semibold">{family.rating}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-amber-700 mb-3">
                  <FaStore />
                  <span className="font-semibold">{family.specialty}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {family.description}
                </p