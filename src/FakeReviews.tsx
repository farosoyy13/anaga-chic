import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const FakeReviews: React.FC = () => {
  const reviews: Review[] = [
    { id: 1, name: 'سارة أحمد', rating: 5, comment: 'منتج رائع جداً، أنصح الجميع به', date: '2024-01-15' },
    { id: 2, name: 'نورة خالد', rating: 4, comment: 'جودة ممتازة وسرعة في التوصيل', date: '2024-01-20' },
    { id: 3, name: 'مريم علي', rating: 5, comment: 'أفضل موقع للتسوق، أحب التعامل معهم', date: '2024-02-01' },
    { id: 4, name: 'فاطمة حسن', rating: 4, comment: 'المنتج مطابق للوصف، شكراً لكم', date: '2024-02-10' },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">تقييمات العملاء</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-gray-400 text-2xl" />
              <div>
                <p className="font-semibold">{review.name}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}