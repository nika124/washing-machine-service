import { Link } from "react-router-dom";
import SEO from "../../Components/SEO/SEO.jsx";
import { PageHero, Section } from "../../Components/Common/Content.jsx";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="გვერდი ვერ მოიძებნა | Sarecxo"
        description="მოთხოვნილი გვერდი ვერ მოიძებნა."
        path="/404"
        robots="noindex,follow"
        geo={false}
      />
      <PageHero title="გვერდი ვერ მოიძებნა" intro="ბმული შეიძლება შეცვლილი ან არასწორად აკრეფილი იყოს." />
      <Section>
        <Link className="font-bold text-blue-700 hover:text-blue-900" to="/">
          დაბრუნება მთავარ გვერდზე
        </Link>
      </Section>
    </>
  );
}
