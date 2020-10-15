import React from 'react';

export function ProjectAvailabilityBar(props: { projectName: string }) {
  return (
    <div className="w-full border-b px-6 py-8">
      <div className="flex justify-between">
        <h2 className="text-gray-600 font-medium">
          {props.projectName}
        </h2>
        <span className="text-green-200 font-medium">
          Available
        </span>
      </div>
      <div className="flex">
        <div className="py-5">
          Bar
      </div>
        <div className="py-5">
          Bar
      </div>
        <div className="py-5">
          Bar
      </div>
        <div className="py-5">
          Bar
      </div>

      </div>

      <div className="relative flex justify-center">
        <div className="flex justify-start text-gray-300 font-medium whitespace-no-wrap">24 hours ago</div>
        <div className="relative flex items-center mx-5 w-full" >
            <hr className="w-full" />
        </div>
        <div className="flex justify-end text-gray-300 font-medium">Today</div>

        <div className="absolute px-5 text-gray-500 font-medium bg-white">99.99% Availability</div>
      </div>

    </div>
  )
}
