import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ComparisonPlan {
  name: string;
  price?: string;
  highlighted?: boolean;
  features: {
    [key: string]: boolean | string;
  };
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  features: string[];
  plans: ComparisonPlan[];
}

export default function ComparisonTable({
  title,
  description,
  features,
  plans
}: ComparisonTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {(title || description) && (
        <div className="text-center p-8 border-b border-gray-200">
          {title && <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>}
          {description && <p className="text-lg text-gray-600">{description}</p>}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 bg-gray-50">
                Features
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className={`px-6 py-4 text-center ${
                    plan.highlighted
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-50 text-gray-900'
                  }`}
                >
                  <div className="text-lg font-semibold">{plan.name}</div>
                  {plan.price && (
                    <div className={`text-2xl font-bold mt-2 ${
                      plan.highlighted ? 'text-white' : 'text-primary-600'
                    }`}>
                      {plan.price}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {feature}
                </td>
                {plans.map((plan) => (
                  <td key={`${plan.name}-${feature}`} className="px-6 py-4 text-center">
                    {typeof plan.features[feature] === 'boolean' ? (
                      plan.features[feature] ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-5 w-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600">
                        {plan.features[feature]}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}