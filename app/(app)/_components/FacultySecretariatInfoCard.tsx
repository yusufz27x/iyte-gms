import React from 'react';
import { Faculty } from '@prisma/client';

interface FacultySecretariatInfoCardProps {
  name: string;
  email: string;
  faculty: Faculty;
}

export default function FacultySecretariatInfoCard({ name, email, faculty }: FacultySecretariatInfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-medium text-gray-700 mb-4">Faculty Secretariat Information</h2>
      <div className="flex items-center space-x-4">
        {/* Placeholder for secretariat picture */}
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-semibold text-gray-500">?
          {/* <Image src="/path/to/secretariat/image.jpg" alt="Secretariat" width={64} height={64} className="rounded-full" /> */}
        </div>
        <div>
          <p className="font-semibold text-gray-700">Secretariat name: {name}</p>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">Faculty: {faculty.name}</p>
        </div>
      </div>
    </div>
  );
} 