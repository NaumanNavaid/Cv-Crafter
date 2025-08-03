// components/LayoutTeaser.tsx

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LayoutTeaser = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Explore Resume Layouts
        </h2>
        <p className="text-gray-600 mb-10">
          Stand out with professionally designed layouts tailored for every
          career level.
        </p>

        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-4">
              <div className="rounded-md overflow-hidden border border-gray-200 shadow">
                <Image
                  src="/corporate-classic.png"
                  alt="Corporate Classic Layout"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold text-gray-700">
                  Corporate Classic
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Timeless and professional design ideal for corporate roles.
                </p>

                <Link href="/Layouts">
                  <Button variant="default" className="w-full">
                    Preview Layouts
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LayoutTeaser;
