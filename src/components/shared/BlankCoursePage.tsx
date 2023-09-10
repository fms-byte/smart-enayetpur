import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BlankCoursePage() {
  return (
    <div className="min-h-[70vh] pt-32">
      <h1 className="flex justify-center space-x-2 text-center text-3xl">
        <ExclamationCircleIcon className="h-10 w-10" />
        <span>Course does not exist or has not been approved</span>
      </h1>

      <div className="absolute-center mx-auto mt-6 w-full">
        <button className="smooth-effect rounded-xl border-2 border-yellow-400 p-3 hover:p-4">
          <Link href={'/'}> Back to home page</Link>
        </button>
      </div>
    </div>
  );
}
