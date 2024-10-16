import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Chartered Accountant"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At CA Portfolio, our mission is to provide exceptional accounting and financial services that empower businesses and individuals to achieve their financial goals. We are committed to delivering accurate, timely, and personalized solutions that add value to our clients' financial well-being.
            </p>
            <p className="text-gray-700">
              With a team of experienced professionals and a client-centric approach, we strive to be the trusted financial partner for businesses of all sizes, helping them navigate complex financial landscapes and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            name="John Doe"
            title="Senior Chartered Accountant"
            image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            description="John has over 20 years of experience in accounting and financial management."
          />
          <TeamMember
            name="Jane Smith"
            title="Tax Specialist"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            description="Jane specializes in tax planning and compliance for businesses and individuals."
          />
          <TeamMember
            name="Mike Johnson"
            title="Business Advisor"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            description="Mike provides strategic advice to help businesses grow and optimize their operations."
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard title="Integrity" description="We uphold the highest ethical standards in all our dealings." />
          <ValueCard title="Excellence" description="We strive for excellence in every service we provide." />
          <ValueCard title="Innovation" description="We embrace innovative solutions to meet evolving financial needs." />
          <ValueCard title="Client-Centric" description="Our clients' success is at the heart of everything we do." />
        </div>
      </section>
    </div>
  );
}

const TeamMember = ({ name, title, image, description }: { name: string; title: string; image: string; description: string }) => (
  <Card>
    <CardHeader>
      <Image src={image} alt={name} width={300} height={300} className="rounded-full mx-auto" />
      <CardTitle className="text-center mt-4">{name}</CardTitle>
      <CardDescription className="text-center">{title}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-center text-gray-700">{description}</p>
    </CardContent>
  </Card>
);

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-center">{description}</CardDescription>
    </CardContent>
  </Card>
);