import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const articles = [
  {
    id: 1,
    title: "Understanding Tax Deductions for Small Businesses",
    description: "Learn about the various tax deductions available for small businesses and how to maximize your savings.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "The Importance of Financial Planning for Startups",
    description: "Discover why financial planning is crucial for startups and how it can contribute to long-term success.",
    date: "2023-06-02",
  },
  {
    id: 3,
    title: "Navigating the Complexities of International Taxation",
    description: "Explore the challenges and considerations involved in international taxation for businesses operating across borders.",
    date: "2023-06-20",
  },
];

export default function Articles() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Financial Insights</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">
        Stay informed with our latest articles on accounting, taxation, and financial management.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{new Date(article.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <Link href={`/articles/${article.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}