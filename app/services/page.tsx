import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FileText, PieChart, Calculator, Briefcase, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <p className="text-xl text-gray-600 mb-12 text-center">
        We offer a comprehensive range of accounting and financial services to meet your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<FileText className="h-12 w-12 text-blue-500" />}
          title="Tax Planning and Preparation"
          description="Optimize your tax strategy and ensure compliance with the latest regulations."
        />
        <ServiceCard
          icon={<BarChart3 className="h-12 w-12 text-green-500" />}
          title="Financial Reporting"
          description="Accurate and timely financial statements to give you a clear picture of your financial health."
        />
        <ServiceCard
          icon={<PieChart className="h-12 w-12 text-purple-500" />}
          title="Business Advisory"
          description="Strategic advice to help your business grow, improve profitability, and manage risks."
        />
        <ServiceCard
          icon={<Calculator className="h-12 w-12 text-red-500" />}
          title="Bookkeeping and Accounting"
          description="Maintain accurate financial records and ensure your books are always up-to-date."
        />
        <ServiceCard
          icon={<Briefcase className="h-12 w-12 text-yellow-500" />}
          title="Audit and Assurance"
          description="Independent audits to provide assurance on your financial statements and internal controls."
        />
        <ServiceCard
          icon={<TrendingUp className="h-12 w-12 text-indigo-500" />}
          title="Financial Planning"
          description="Comprehensive financial planning to help you achieve your short-term and long-term goals."
        />
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Approach</h2>
        <div className="bg-gray-100 rounded-lg p-8">
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li><strong>Initial Consultation:</strong> We start by understanding your unique financial situation and goals.</li>
            <li><strong>Tailored Strategy:</strong> Our team develops a customized plan to address your specific needs.</li>
            <li><strong>Implementation:</strong> We work closely with you to put the plan into action.</li>
            <li><strong>Ongoing Support:</strong> Regular check-ins and adjustments ensure your financial strategy remains effective.</li>
            <li><strong>Continuous Improvement:</strong> We stay up-to-date with the latest financial trends and regulations to provide you with the best service possible.</li>
          </ol>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Our Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Our team of certified professionals brings years of experience and in-depth knowledge to every client engagement.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Personalized Attention</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We take the time to understand your unique needs and provide tailored solutions that work for you.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology-Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We leverage the latest financial technologies to provide efficient and accurate services.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Proactive Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We don't just react to financial events; we help you anticipate and prepare for future challenges and opportunities.</CardDescription>
            </CardContent>
          </Card>
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