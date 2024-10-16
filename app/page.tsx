import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FileText, PieChart, Users, Award, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to CA Portfolio</h1>
        <p className="text-xl text-gray-600 mb-8">Expert Accounting and Financial Services</p>
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FileText className="h-12 w-12 text-blue-500" />}
            title="Tax Planning"
            description="Optimize your tax strategy and minimize liabilities."
          />
          <ServiceCard
            icon={<BarChart3 className="h-12 w-12 text-green-500" />}
            title="Financial Reporting"
            description="Accurate and timely financial statements and reports."
          />
          <ServiceCard
            icon={<PieChart className="h-12 w-12 text-purple-500" />}
            title="Business Advisory"
            description="Strategic advice to help your business grow and succeed."
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Chartered Accountant at work"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Over 15 years of experience in accounting and finance</li>
              <li>Personalized service tailored to your unique needs</li>
              <li>Up-to-date knowledge of tax laws and regulations</li>
              <li>Commitment to accuracy and attention to detail</li>
              <li>Proactive approach to financial management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ExpertiseCard
            icon={<Users className="h-12 w-12 text-indigo-500" />}
            title="Client-Focused Approach"
            description="We prioritize understanding your unique needs and goals to provide tailored solutions."
          />
          <ExpertiseCard
            icon={<Award className="h-12 w-12 text-yellow-500" />}
            title="Industry Recognition"
            description="Our team has received multiple awards for excellence in accounting and financial services."
          />
          <ExpertiseCard
            icon={<TrendingUp className="h-12 w-12 text-red-500" />}
            title="Continuous Learning"
            description="We stay updated with the latest industry trends and regulations to serve you better."
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Get Started Today</h2>
        <p className="text-center text-xl text-gray-600 mb-8">
          Take the first step towards better financial management. Contact us for a consultation.
        </p>
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const ExpertiseCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);