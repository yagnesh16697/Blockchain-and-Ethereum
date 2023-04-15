import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Product
              </Link>
              <Link
                href="/marketplace"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="blogs"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Company
              </Link>
              <Link
                href="/"
                className="font-medium mr-8 text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
