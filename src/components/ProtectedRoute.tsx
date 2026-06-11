import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));

        if (
          userDoc.exists() &&
          userDoc.data().role === 'owner'
        ) {
          setIsOwner(true);
        }
      }

      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        جاري التحقق من الصلاحيات الملكية...
      </div>
    );
  }

  return isOwner ? <>{children}</> : <Navigate to="/" />;
}
